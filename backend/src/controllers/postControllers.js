import Post from "../models/Post.js";


class PostController {

  async index(req, res) {
    try {
      // Récupérer les paramètres de pagination depuis la requête
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      const posts = await Post.findAll(page, limit);
      res.status(200).json({
        success: true,
        data: posts,
        page,
        limit,
      });
    } catch (error) {
      // En cas d'erreur, renvoyer un message d'erreur
      console.error("Erreur dans PostController.index :", error.message);
      res.status(500).json({
        success: false,
        message: "Erreur lors de la récupération des posts",
        error: error.message,
      });
    }
  }



 
  async show(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findOne(id);
      res.status(200).json({
        success: true,
        data: post,
      });
    } catch (error) {
      if (error.message === "ID invalide") {
        res.status(400).json({
          success: false,
          message: "ID invalide",
          error: error.message,
        });
      } else if (error.message === "Post non trouvé") {
        res.status(404).json({
          success: false,
          message: "Post non trouvé",
          error: error.message,
        });
      } else {
        console.error("Erreur dans PostController.show :", error.message);
        res.status(500).json({
          success: false,
          message: "Erreur lors de la récupération du post",
          error: error.message,
        });
      }
    }
  }



  async create(req, res) {
    try {
      const { text, image } = req.body;
      const user_id = req.body.user_id || req.user?.id;

      if (!text) {
        return res.status(400).json({
          success: false,
          message: "Le texte du post est requis",
        });
      }

      if (!user_id) {
        return res.status(400).json({
          success: false,
          message: "L'ID de l'utilisateur est requis",
        });
      }

      // Préparer les données pour la création du post
      const postData = {
        text,
        image,
        user_id,
      };

      // Appeler la méthode create du modèle Post
      const newPost = await Post.create(postData);

      // Renvoyer le nouveau post avec un statut 201 (Created)
      res.status(201).json({
        success: true,
        message: "Post créé avec succès",
        data: newPost,
      });
    } catch (error) {
      console.error("Erreur dans PostController.create :", error.message);
      res.status(500).json({
        success: false,
        message: "Erreur lors de la création du post",
        error: error.message,
      });
    }
  }



  async update(req, res) {
    try {
      const { id } = req.params;
      const { text, image } = req.body;

      // Préparer les données pour la mise à jour
      const updateData = {};
      if (text !== undefined) updateData.text = text;
      if (image !== undefined) updateData.image = image;

      // Si aucune donnée n'est fournie pour la mise à jour, renvoyer une erreur
      if (Object.keys(updateData).length === 0) {
        return res.status(400).json({
          success: false,
          message: "Aucune donnée fournie pour la mise à jour",
        });
      }

      const updatedPost = await Post.update(id, updateData);

      res.status(200).json({
        success: true,
        message: "Post mis à jour avec succès",
        data: updatedPost,
      });
    } catch (error) {
      // Gérer les différents types d'erreurs
      if (error.message === "ID invalide") {
        res.status(400).json({
          success: false,
          message: "ID invalide",
          error: error.message,
        });
      } else if (error.message.includes("Record to update not found")) {
        res.status(404).json({
          success: false,
          message: "Post non trouvé",
          error: "Le post que vous essayez de mettre à jour n'existe pas",
        });
      } else {
        console.error("Erreur dans PostController.update :", error.message);
        res.status(500).json({
          success: false,
          message: "Erreur lors de la mise à jour du post",
          error: error.message,
        });
      }
    }
  }


  
  
  async delete(req, res) {
    try {
      // Récupérer l'ID du post depuis les paramètres de la requête
      const { id } = req.params;

      // Appeler la méthode delete du modèle Post
      const deletedPost = await Post.delete(id);

      // Renvoyer une confirmation de suppression
      res.status(200).json({
        success: true,
        message: "Post supprimé avec succès",
        data: deletedPost,
      });
    } catch (error) {
      
      if (error.message === "ID invalide") {
        res.status(400).json({
          success: false,
          message: "ID invalide",
          error: error.message,
        });
      } else if (error.message.includes("Record to delete does not exist")) {
        res.status(404).json({
          success: false,
          message: "Post non trouvé",
          error: "Le post que vous essayez de supprimer n'existe pas",
        });
      } else {
        console.error("Erreur dans PostController.delete :", error.message);
        res.status(500).json({
          success: false,
          message: "Erreur lors de la suppression du post",
          error: error.message,
        });
      }
    }
  }
}

export default PostController;
