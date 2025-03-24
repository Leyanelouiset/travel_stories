# TravelStories - Réseau Social de Voyages

## Présentation du Projet

TravelStories est un réseau social centré sur le voyage permettant aux utilisateurs de partager leurs expériences à travers le monde. La particularité de notre plateforme est son interface cartographique interactive où les utilisateurs peuvent épingler leurs photos, commentaires et recommandations directement sur les pays qu'ils ont visités.

Ce projet personnel est né de notre passion commune pour les voyages et de notre désir de créer un espace où les voyageurs peuvent se connecter, s'inspirer et partager leurs aventures.

## Fonctionnalités MVP (Produit Minimum Viable)

### Cartographie Interactive
- Carte mondiale interactive utilisant Mapbox permettant aux utilisateurs d'épingler leurs photos
- Visualisation des pays visités par un utilisateur
- Navigation intuitive et zoom sur différentes régions

### Profil Utilisateur
- Création et personnalisation de profil
- Tableau de bord affichant les statistiques de voyage (nombre de pays visités, photos partagées)
- Liste des pays visités avec dates

### Blog Personnel
- Espace blog dédié à chaque utilisateur
- Publication de récits de voyage avec photos
- Système de catégorisation par pays/ville

### Partage de Contenu
- Upload de photos géolocalisées
- Ajout de commentaires et recommandations liés à un lieu
- Possibilité de noter les lieux visités (hébergements, restaurants, attractions)

### Interaction Sociale
- Système d'abonnement aux profils d'autres voyageurs
- Commentaires sur les publications
- Partage des publications sur d'autres plateformes

## Technologies Envisagées

### Frontend
- HTML5, CSS3, JavaScript (Vanilla)
- Bibliothèque cartographique : Mapbox API
- Design responsive pour mobile et desktop

### Backend
- Node.js avec Express
- Base de données : PostgreSQL avec Neon (service PostgreSQL serverless)
- Gestion d'authentification : JWT ou OAuth

### Stockage
- Stockage d'images : AWS S3 ou Firebase Storage
- CDN pour l'optimisation de la livraison des images

### Déploiement
- Hébergement : Heroku, Netlify ou Vercel
- CI/CD : GitHub Actions

## Architecture du Projet

```
/travelstories/
├── client/                     # Frontend (Vanilla JavaScript)
│   ├── public/
│   ├── src/
│   │   ├── js/                 # Fichiers JavaScript
│   │   │   ├── components/     # Composants modulaires
│   │   │   ├── services/       # Services API
│   │   │   └── utils/          # Utilitaires
│   │   ├── css/                # Styles CSS
│   │   └── assets/             # Images et ressources
│   └── index.html
├── server/                     # Backend (Node.js/Express)
│   ├── controllers/            # Logique métier
│   ├── models/                 # Modèles de données
│   ├── routes/                 # Routes API
│   ├── middleware/             # Middlewares
│   ├── config/                 # Configuration
│   └── package.json
└── README.md
```

## Roadmap de Développement

### Phase 1 : Conception et Planification
- [x] Définition des fonctionnalités MVP
- [ ] Wireframing et design de l'interface
- [ ] Définition de l'architecture technique
- [ ] Choix des technologies

### Phase 2 : Développement MVP
- [ ] Mise en place de l'environnement de développement
- [ ] Développement du backend (API, modèles de données)
- [ ] Développement du frontend (interface utilisateur, carte interactive)
- [ ] Intégration de l'API Mapbox

### Phase 3 : Tests et Déploiement
- [ ] Tests fonctionnels
- [ ] Optimisation des performances
- [ ] Déploiement de la version beta
- [ ] Recueil des retours utilisateurs

### Phase 4 : Fonctionnalités Avancées (post-MVP)
- [ ] Amélioration de l'algorithme de recommandation
- [ ] Fonctionnalités de planification de voyage
- [ ] Version mobile native (React Native)
- [ ] Intégration de partenariats (hébergements, compagnies aériennes)


## Contributeurs
- Daniel
- Leyane


---

*Ce README représente notre vision initiale pour le projet TravelStories qui est actuellement en phase de conception. Veuillez noter que de nombreux aspects techniques, fonctionnels et organisationnels sont susceptibles d'évoluer significativement au cours du développement du projet. Les technologies, l'architecture et les fonctionnalités mentionnées ici constituent des pistes de réflexion plutôt que des décisions définitives.
