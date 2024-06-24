import { Review } from "@prisma/client";

export type ReviewRequest = {
  user_id: string;
  star: number;
  comment: string;
};

export type ReviewResponse = {
  user_id: string;
  star: number;
  comment: string;
};

export function ToReviewResponse(review: Review): ReviewResponse {
  return {
    user_id: review.user_id,
    star: review.star,
    comment: review.comment,
  };
}
