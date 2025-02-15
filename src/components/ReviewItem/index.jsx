import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";

import Spring from "@components/Spring";
import CustomRating from "@ui/CustomRating";

import { useState } from "react";
import { useChangeProductReviewReactionMutation } from "@api/eCommerce/eCommerceApi";

import styles from "./styles.module.scss";
import { toast } from "react-toastify";

const ReviewItem = ({ review, index, setReviews }) => {
  const userId = useSelector((state) => state.user?.user?.uid);

  const [liked, setLiked] = useState(review.LikedUsers || []);
  const [isDisliked, setIsDisliked] = useState(review.DislikedUsers || []);

  const [changeProductReviewReaction] =
    useChangeProductReviewReactionMutation();

  const handleLike = useCallback(async () => {
    try {
      setIsDisliked((prev) => prev.filter((item) => item.User_ID !== userId));
      setLiked((prev) => [...prev, { User_ID: userId }]);
      const response = await changeProductReviewReaction({
        ReviewID: review.ReviewID,
        User_ID: userId,
        Type: "like",
      }).unwrap();
      setReviews((prev) =>
        prev.map((item) =>
          item.ReviewID === review.ReviewID ? response.data : item
        )
      );
      toast.success("You liked this review!");
      return response.data;
    } catch (error) {
      console.error("Failed to like product review:", error);
      toast.error("Failed to like the review.");
    }
  }, [changeProductReviewReaction, review, setReviews, userId]);

  const handleDislike = useCallback(async () => {
    try {
      setLiked((prev) => prev.filter((item) => item.User_ID !== userId));
      setIsDisliked((prev) => [...prev, { User_ID: userId }]);
      const response = await changeProductReviewReaction({
        ReviewID: review.ReviewID,
        User_ID: userId,
        Type: "dislike",
      }).unwrap();
      setReviews((prev) =>
        prev.map((item) =>
          item.ReviewID === review.ReviewID ? response.data : item
        )
      );
      toast.success("You disliked this review!");
      return response.data;
    } catch (error) {
      console.error("Failed to dislike product review:", error);
      toast.error("Failed to dislike the review.");
    }
  }, [changeProductReviewReaction, review, setReviews, userId]);

  return (
    <Spring className={styles.container} type="slideUp" index={index}>
      <div className="flex flex-col gap-5">
        <h3>{review.Title}</h3>
        <p>{review.Notes}</p>
      </div>
      <div className={styles.rating}>
        <CustomRating value={review.Rating} />
      </div>
      <div className={styles.footer}>
        <div className="flex items-center gap-5">
          <img
            className="square-avatar"
            src={review.Author.Avatar}
            alt={review.Author.Name}
          />
          <span className="font-semibold">{review.Author.Name}</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="flex gap-2 items-center"
            aria-label="This review was helpful"
            onClick={handleLike}
          >
            <span className={`${styles.thumbs} ${styles.up}`}>
              <i
                className={`${styles.icon} ${styles.active} icon-thumbs-up-regular`}
              />
              <i
                className={classNames(`${styles.icon} icon-thumbs-up-solid`, {
                  [styles.active]: liked.some(
                    (item) => item.User_ID === userId
                  ),
                })}
              />
            </span>
            <span className="label h6">({liked.length})</span>
          </button>
          <button
            className="flex gap-2 items-center"
            aria-label="This review was not helpful"
            onClick={handleDislike}
          >
            <span className={`${styles.thumbs} ${styles.down}`}>
              <i
                className={`${styles.icon} ${styles.active} icon-thumbs-down-regular`}
              />
              <i
                className={classNames(`${styles.icon} icon-thumbs-down-solid`, {
                  [styles.active]: isDisliked.some(
                    (item) => item.User_ID === userId
                  ),
                })}
              />
            </span>
            <span className="label h6">({isDisliked.length})</span>
          </button>
        </div>
      </div>
    </Spring>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default ReviewItem;
