import { Review } from "@prisma/client";
import { prisma } from "../config/database";
import { ReviewRequest } from "../dtos/review.dto";

export class ReviewRepo {
  static async createReview(review: ReviewRequest): Promise<Review> {
    return await prisma.review.create({
      data: review,
    });
  }

  static async getAllReview(): Promise<Review[]> {
    return await prisma.review.findMany();
  }
}
