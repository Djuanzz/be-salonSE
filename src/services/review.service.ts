import { Review } from "@prisma/client";
import { ReviewRepo } from "../repository/review.repo";
import {
  ReviewRequest,
  ReviewResponse,
  ToReviewResponse,
} from "../dtos/review.dto";
import { ReviewValidation } from "../validations/review.val";
import { Validation } from "../validations/validation";

export class ReviewService {
  static async createReview(review: ReviewRequest): Promise<ReviewResponse> {
    const reviewReq = Validation.validate(ReviewValidation.CREATE, review);

    const reviewData = await ReviewRepo.createReview(reviewReq);
    // return reviewData;
    return ToReviewResponse(reviewData);
  }

  static async getAllReview() {
    const reviewData = await ReviewRepo.getAllReview();
    return reviewData;
  }
}
