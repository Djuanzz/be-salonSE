import { Review } from "@prisma/client";
import { prisma } from "../config/database";
import { ReviewRequest } from "../dtos/review.dto";

export class ReviewRepo {
  static async createReview(review: ReviewRequest): Promise<Review> {
    return await prisma.review.create({
      data: review,
    });
  }

  static async getAllReview() {
    return await prisma.review.findMany({
      select: {
        id: true,
        star: true,
        comment: true,
        user: {
          select: {
            fullname: true,
          },
        },
      },
    });
  }
}
