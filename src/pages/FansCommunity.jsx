import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PageHeader from "@layout/PageHeader";
import LocalFans from "@widgets/LocalFans";
import WidgetGroup from "@components/WidgetGroup";
import ClubFans from "@widgets/ClubFans";
import ClubFansMap from "@widgets/ClubFansMap";
import GamesCalendar from "@widgets/GamesCalendar";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import SocialFeed from "@widgets/SocialFeed";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  useCreateNewFeedMutation,
  useGetAllFeedsQuery,
} from "@api/community/communityApi";
import ModalImage from "react-modal-image";
import { useSelector } from "react-redux";

const FansCommunity = () => {
  const userId = useSelector((state) => state.user?.user?.uid);
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [createNewFeed] = useCreateNewFeedMutation();
  const [feeds, setFeeds] = useState([]);
  const [totalFeeds, setTotalFeeds] = useState(0);

  const handleImageSelection = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
    reset,
  } = useForm({
    defaultValues: {
      Content: "",
    },
  });

  const [offset, setOffset] = useState(0);
  const limit = 2;

  const { data: feedData } = useGetAllFeedsQuery({
    offset,
    limit,
  });

  const fetchNextPage = () => {
    if (feeds.length < totalFeeds) {
      setOffset((prevOffset) => prevOffset + limit);
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const storage = getStorage();
      const uploadPromises = selectedImages.map((image) => {
        const storageRef = ref(storage, `uploads/${image.name}`);
        return uploadBytesResumable(storageRef, image).then(() =>
          getDownloadURL(storageRef)
        );
      });

      const imageUrls = await Promise.all(uploadPromises);

      const formData = {
        ...data,
        Images: imageUrls,
        User_ID: userId,
      };

      const newFeed = await createNewFeed({ data: formData }).unwrap();
      setLoading(false);
      setSelectedImages([]);
      setImagePreviews([]);
      setFeeds((prev) => [newFeed.data, ...prev]);
      setOffset((prev) => prev++);
      setTotalFeeds((prev) => prev++);
      reset();
    } catch (error) {
      console.error("Error creating new feed:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (feedData) {
      setFeeds((prev) => [...prev, ...feedData.data.feeds]);
      setTotalFeeds(feedData.data.totalFeeds);
    }
  }, [feedData]);

  return (
    <>
      <PageHeader title="Fans community" />
      <div className="flex gap-4 p-6">
        <div className="basis-1/4">
          <div className="flex flex-col gap-4">
            <WidgetGroup>
              <ClubFans id="realmadrid" />
              <ClubFans id="manunited" />
            </WidgetGroup>
            <ClubFansMap id="manunited" />
          </div>
        </div>
        <div className="basis-1/2 flex flex-col gap-4">
          <div className="bg-widget p-6 rounded">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-2.5">
                <textarea
                  className={classNames("field", {
                    "field--error": errors.Content,
                  })}
                  placeholder="Content"
                  {...register("Content", { required: true })}
                />
              </div>
              <div className="grid grid-cols-4 gap-4 justify-around mt-2.5">
                <div className="px-2.5">
                  <button
                    type="button"
                    className="flex gap-2.5 items-center hover:text-accent transition"
                    onClick={() =>
                      document.getElementById("imageUpload").click()
                    }
                  >
                    <FontAwesomeIcon icon={faImage} />
                    <span>Media</span>
                  </button>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    multiple
                    style={{ display: "none" }}
                    onChange={handleImageSelection}
                  />
                </div>
              </div>
              {imagePreviews.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {imagePreviews.map((preview, index) => (
                    <div
                      className="w-32 h-32 rounded-lg overflow-hidden"
                      key={`preview-${index}`}
                    >
                      <ModalImage
                        small={preview}
                        large={preview}
                        alt="Feed Thumbnails"
                      />
                    </div>
                  ))}
                </div>
              )}
              <button
                className="btn w-full mt-2.5"
                type="submit"
                disabled={loading || !isValid}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
          <div className="bg-widget p-4 flex flex-col gap-4 rounded">
            <InfiniteScroll
              dataLength={feeds?.length || 0}
              next={fetchNextPage}
              hasMore={feeds.length < totalFeeds}
              loader={<p>Loading more feeds...</p>}
              endMessage={<p>No more feeds to load.</p>}
            >
              {feeds?.map((feed, index) => (
                <SocialFeed key={`feed-${index}`} data={feed} setFeeds={setFeeds} />
              ))}
            </InfiniteScroll>
          </div>
        </div>
        <div className="basis-1/4">
          <div className="flex flex-col gap-4">
            <LocalFans />
            <GamesCalendar />
          </div>
        </div>
      </div>
    </>
  );
};

export default FansCommunity;
