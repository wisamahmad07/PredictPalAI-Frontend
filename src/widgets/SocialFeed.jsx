import React, { useState } from "react";
import ModalImage from "react-modal-image";
import { format } from "date-fns";
import { Avatar, Modal, Box, Typography, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  useAddCommentMutation,
  useLikeFeedMutation,
} from "@api/community/communityApi";
import { useSelector } from "react-redux";

const SocialFeed = ({ data, setFeeds }) => {
  const userId = useSelector((state) => state.user?.user?.uid);
  const [comment, setComment] = useState("");
  const [addComment] = useAddCommentMutation();
  const [likeFeed] = useLikeFeedMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddComment = async () => {
    if (comment.trim() !== "") {
      try {
        const updatedFeed = await addComment({
          data: {
            SocialFeedID: data.SocialFeedID,
            Content: comment,
            User_ID: userId,
          },
        });
        setComment("");
        setFeeds((prev) =>
          prev.map((item) =>
            item.SocialFeedID === data.SocialFeedID
              ? updatedFeed.data.data
              : item
          )
        );
      } catch (error) {
        console.error("Failed to add comment:", error);
      }
    }
  };

  const handleLike = async () => {
    try {
      const updatedFeed = await likeFeed({ id: data.SocialFeedID });
      setFeeds((prev) =>
        prev.map((item) =>
          item.SocialFeedID === data.SocialFeedID ? updatedFeed.data.data : item
        )
      );
    } catch (error) {
      console.error("Failed to like the feed:", error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="border border-border p-4 mb-2.5 rounded flex flex-col gap-2.5">
      <div className="flex gap-2.5 items-center">
        <Avatar src={data?.UserProfile?.Avatar || null} />
        <div>
          <p>{data?.UserProfile?.Name || ""}</p>
          <p>
            {data.createdAt
              ? format(new Date(data.createdAt), "dd MMMM 'at' hh.mm a")
              : ""}
          </p>
        </div>
      </div>
      <div>
        <p>{data.Content}</p>
        {data?.Images && data.Images.length > 0 && (
          <div className="flex gap-2.5 mt-2.5">
            {data.Images.map((img, index) => (
              <div
                className="w-32 h-32 rounded-lg overflow-hidden"
                key={`image-${index}`}
              >
                <ModalImage small={img} large={img} alt="Feed Thumbnails" />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="border-y border-border py-2.5 flex gap-4">
        <button
          className="flex items-center gap-2.5 hover:text-accent transition-all"
          onClick={toggleModal}
        >
          <FontAwesomeIcon icon={faComment} />{" "}
          {data.SocialReviews ? data.SocialReviews.length : 0} comments
        </button>
        <button
          className="flex items-center gap-2.5 hover:text-accent transition-all"
          onClick={handleLike}
        >
          <FontAwesomeIcon icon={faHeart} /> {data.Likes} likes
        </button>
      </div>
      <div className="flex gap-1.5">
        <input
          className="field"
          type="text"
          placeholder=" Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="button" className="btn" onClick={handleAddComment}>
          Submit
        </button>
      </div>
      <Modal open={isModalOpen} onClose={toggleModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "var(--widget)",
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <Typography variant="h6" component="h2">
              Comments
            </Typography>
            <Button onClick={toggleModal} className="!min-w-6 !h-6 !p-0">
              <FontAwesomeIcon icon={faClose} />
            </Button>
          </div>
          <ul>
            {data.SocialReviews && data.SocialReviews.length > 0 ? (
              data.SocialReviews.map((review, index) => (
                <li key={`review-${index}`} className="flex gap-2.5">
                  <Avatar src={review?.UserProfile?.Avatar || null} />
                  <div>
                    <p>{review.Content}</p>
                    <p className="text-xs">
                      By {review?.UserProfile?.Name || ""}
                    </p>
                  </div>
                </li>
              ))
            ) : (
              <Typography>No comments yet.</Typography>
            )}
          </ul>
        </Box>
      </Modal>
    </div>
  );
};

export default SocialFeed;
