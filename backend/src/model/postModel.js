import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Post {
  static async findAll() {
    return await prisma.posts.findMany();
  }

  static async findOne(id) {
    return await prisma.posts.findUnique({
      where: { id: Number(id) },
    });
  }
}