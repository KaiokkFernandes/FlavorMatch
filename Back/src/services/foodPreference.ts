import { PrismaClient, FoodPreference } from '@prisma/client';

const prisma = new PrismaClient();

export class FoodPreferenceService {
  static async createFoodPreference(name: string, userId: string): Promise<FoodPreference> {
    return prisma.foodPreference.create({
      data: {
        name,
        userId
      }
    });
  }

  static async getFoodPreference(id: string): Promise<FoodPreference | null> {
    return prisma.foodPreference.findUnique({
      where: { id }
    });
  }

  static async updateFoodPreference(id: string, name: string): Promise<FoodPreference> {
    return prisma.foodPreference.update({
      where: { id },
      data: { name }
    });
  }

  static async deleteFoodPreference(id: string): Promise<FoodPreference> {
    return prisma.foodPreference.delete({
      where: { id }
    });
  }
}