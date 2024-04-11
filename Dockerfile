# Utilisez une image Node.js comme base
FROM node:latest

# Répertoire de travail dans le conteneur
WORKDIR ~/biblio-front

# Copiez les fichiers package.json et package-lock.json pour installer les dépendances
COPY package.json package-lock.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Construisez l'application React TypeScript
RUN npm run build

# Exposez le port sur lequel l'application s'exécute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "serve"]
