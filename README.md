# Portfolio - Souleimane Zeggaï 💻

Ici, vous avez une version anonymisée du portfolio. Un CV fictif et une photo de profil fictive ont été ajoutés. 
Cette démo n'est que pour que vous puissiez parcourir mon code pour en comprendre le fonctionnement. Seule la partie mail ne fonctionnera pas si vous ne suivez pas les étapes plus bas qui vous expliqueront comment synchroniser de manière sécurisée votre compte mail.

Voici mon portfolio codé grâce à __React.JS__.

## A voir ici : 
[Démo du site](https://www.souleimane-z.com)

![Portfolio by souleimane-z](https://dl.dropboxusercontent.com/s/1bteaibu98p2t67/demo.gif)

## Fichier à ajouter :

- Ajouter son CV :  __"CV.pdf"__    ➡️➡️   (***FACULTATIF***)
> ./client/src/Assets/CV.pdf


- Images: __"me.jpg"__    ➡️➡️   (***FACULTATIF***)
> ./client/src/Assets/AboutMe/me.webp

#### BACKEND Pour connecter son compte Gmail:
> ./route/contactRoute.js

- la ligne 19 & 25 : 

Remplacer par votre adresse mail
- Ligne 20 :
> **Note:** *ce ne sera pas votre mot-de-passe Google mais un token unique donné par google*

Pour avoir un code de connexion unique suivre cette procédure ⬇️.

https://youtu.be/pBtQ4IHkuQE


## Lancement du projet : 
> **Note:** *depuis le terminal*

#### ___Première Méthode___ .   (dans l'ordre)
```bash
cd client
npm i --legacy-peer-deps
```
. Ensuite : 
```bash
cd ../   (pour revenir au dosssier original et installer les dépendances du backend)
npm i --legacy-peer-deps
npm run dev
```


#### ___Deuxième Méthode___ .   (dans l'ordre)
Si la première méthode ne fonctionne pas, tapez cela dans le terminal: 

  ||Backend                     | Frontend                     |
--|-----------------------------|------------------------------|
|1|`npm i --legacy-peer-deps`   |`cd client --legacy-peer-deps`|
|2|`nodemon server.js`          |`npm i`            		       |
|3|                             |`npm start`                   |


## Contact Me
Souleimane Zeggai - 2022

[LinkedIn](https://www.linkedin.com/in/souleimane-zeggai)       --       [Portfolio](https://souleimanez.herokuapp.com/) 
