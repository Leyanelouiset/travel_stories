import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Post {
  // Récupération de plusieurs posts avec pagination
  static async findAll(limit = 10, skip = 0) {
    try {
      const posts = await prisma.posts.findMany({
        orderBy: {
          createdAt: "desc",
        },
        include: {
          users: true,
        },
        take: limit,
        skip: skip,
      });

      return posts;
    } catch (error) {
      console.error("Erreur lors de la récupération des posts:", error.message);
      throw error;
    }
  }

  // Récupération d'un seul post par ID
  static async findOne(id) {
    try {
      if (!id || isNaN(Number(id))) {
        throw new Error("ID invalide");
      }

      const post = await prisma.posts.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          users: true,
          comments: true,
        },
      });

      if (!post) {
        throw new Error("Post non trouvé");
      }

      return post;
    } catch (error) {
      console.error("Erreur lors de la récupération du post :", error.message);
      throw error;
    }
  }


static async create(data){
  try{
if(!data.text|| !data.user_id){
  throw new Error ("Le texte du post et l'ID de l'utilisateur sont requis");
      
}
  console.log("DATA REÇUE PAR PRISMA : ", data);
      
      // Création du post dans la base de données
      const post = await prisma.posts.create({
        data: {
          text: data.text,
          image: data.image, 
          users: {
            connect: {
              id: Number(data.user_id), // Connexion à l'utilisateur existant
            },
          },
        },
        // Inclure les données de l'utilisateur dans le résultat
        include: {
          users: true,
        },
      });
      
      return post;
    } catch (error) {
      console.error("Erreur lors de la création du post :", error.message);
      throw error;
    }
  }
}