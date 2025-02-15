// components
import Spring from "@components/Spring";
import ReviewItem from "@components/ReviewItem";
import TabButton from "@ui/TabButton";
import ScrollContainer from "@components/ScrollContainer";
import AddFormContainer from "@components/AddFormContainer";
import CustomRating from "@ui/CustomRating";

// hooks
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import useMeasure from "react-use-measure";
import { useForm, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { useCreateProductReviewMutation } from "@api/eCommerce/eCommerceApi";

// utils
import classNames from "classnames";
import dayjs from "dayjs";

const Reviews = ({ standalone, wrapperClass, reviews = [] }) => {
  const userId = useSelector((state) => state.user?.user?.uid);
  const { id: productID } = useParams();
  const Wrapper = standalone ? Spring : "div";
  const [isFormOpen, setIsFormOpen] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    defaultValues: {
      Title: "",
      Notes: "",
      Rating: 5,
    },
  });
  const [activeTab, setActiveTab] = useState("latest");
  const [reviewList, setReviewList] = useState([]);
  const [headerRef, { height: headerHeight }] = useMeasure();
  const [footerRef, { height: footerHeight }] = useMeasure();
  const trackRef = useRef(null);

  const [createProductReview] = useCreateProductReviewMutation();

  const onReset = () => {
    reset();
    setIsFormOpen(false);
  };

  const onSubmit = async (data) => {
    const response = await createProductReview({
      ...data,
      ProductID: productID,
      User_ID: userId,
    });
    setReviewList(response.data.data);
    onReset();
  };

  const getReviews = useCallback(() => {
    const sortedData = [...reviewList];

    if (activeTab === "latest") {
      return sortedData.sort((a, b) =>
        dayjs(b.updatedAt).diff(dayjs(a.updatedAt))
      );
    } else {
      return sortedData.sort((a, b) =>
        a.LikedUsers.length < b.LikedUsers.length ? 1 : -1
      );
    }
  }, [activeTab, reviewList]);

  useEffect(() => {
    setReviewList(reviews);
  }, [reviews]);

  useEffect(() => {
    trackRef.current && trackRef.current.scrollTo(0, 0);
  }, [activeTab, isFormOpen]);

  return (
    <Wrapper className={standalone ? "card height-w-3" : wrapperClass}>
      <div
        className={`${standalone ? "card_header" : ""} flex flex-col gap-4`}
        ref={headerRef}
        style={{ paddingBottom: 24 }}
      >
        <h3>Reviews</h3>
        <div className="tab-nav col-2">
          <TabButton
            title="Latest"
            active={activeTab === "latest"}
            onClick={() => setActiveTab("latest")}
          />
          <TabButton
            title="Helpful"
            active={activeTab === "helpful"}
            onClick={() => setActiveTab("helpful")}
          />
        </div>
      </div>
      <ScrollContainer height={headerHeight + footerHeight}>
        <div
          className="track"
          style={{ padding: standalone ? "0 var(--card-padding)" : 0 }}
          ref={trackRef}
        >
          {standalone && (
            <AddFormContainer open={isFormOpen}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ marginBottom: 30 }}
              >
                <div className="flex flex-col gap-2.5">
                  <input
                    className={classNames("field", {
                      "field--error": errors.Title,
                    })}
                    type="text"
                    placeholder="Title"
                    {...register("Title", { required: true })}
                  />
                  <textarea
                    className={classNames("field", {
                      "field--error": errors.Notes,
                    })}
                    placeholder="Your review"
                    {...register("Notes", { required: true })}
                  />
                </div>
                <div
                  className="flex items-center justify-between"
                  style={{ margin: "15px 0 20px" }}
                >
                  <span className="label h6">Your rating:</span>
                  <Controller
                    name="Rating"
                    control={control}
                    render={({ field }) => (
                      <CustomRating
                        readOnly={false}
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                      />
                    )}
                  />
                </div>
                <div className="grid col-2 gap-2.5">
                  <button className="btn" type="submit">
                    Submit
                  </button>
                  <button
                    className="btn btn--outlined"
                    type="reset"
                    onClick={onReset}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </AddFormContainer>
          )}
          <div className="flex flex-col gap-6">
            {getReviews().map((review, index) => (
              <ReviewItem
                review={review}
                setReviews={setReviewList}
                index={index}
                key={`product-review-${review.ReviewID}`}
              />
            ))}
          </div>
        </div>
      </ScrollContainer>
      {standalone && (
        <div className={standalone ? "card-padded" : "pt-30"} ref={footerRef}>
          <button
            className="btn w-full"
            onClick={() => setIsFormOpen(true)}
            disabled={isFormOpen}
          >
            Leave a review
          </button>
        </div>
      )}
    </Wrapper>
  );
};

export default Reviews;
