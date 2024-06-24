// src/services/UserService.ts
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export class UserService {
  static async getUsersWithFoodPreference(foodPreferenceName: string): Promise<User[]> {
    return prisma.user.findMany({
      where: {
        foodPreferences: {
          some: {
            name: foodPreferenceName
          }
        }
      },
      include: {
        foodPreferences: true
      }
    });
  }
}

// src/scripts/GroupUsersByFoodPreference.ts
