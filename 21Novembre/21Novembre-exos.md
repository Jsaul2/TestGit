## Exo 01

#### Creer un Repo sur Github avec un README

* Sur le site Github.com, creez un nouveau Repo public
* Ce Repo devra avoir comme nom: `NOM_DE_FAMILLE-test`
* Ce Repo devra etre cree avec un fichier README
* Creer un dossier `workspace` sur votre ordinateur dans `~/Documents`

#### Cloner le Repo sur votre machine

* Utilisez la commande clone dans le dossier `workspace` pour avoir votre Repo en local
* Vous devez avoir un dossier en local qui s'appelle `NOM_DE_FAMILLE-test`
* Utilisez la commande `git status` dans ce dossier devrait etre possible

## Exo 02

#### Cloner le Repo dans un autre dossier

* Utilisez la commande clone dans le dossier `workspace` pour avoir votre Repo en local
* Vous devrez avoir un dossier en local qui s'appelle `NOM_DE_FAMILLE-retest`
* Utilisez la commande `git status` dans ce dossier devrait etre possible

## Exo 03

#### Modifier le README

* Remplacez le contenu du fichier `README.md` par le texte `Hello World!`

#### Faire son premier commit

* Utilisez les commandes `git add` et `git commit` pour faire votre premier commit
* La commande `git status` doit indiquer que vous avez un commit en local de plus que le serveur

## Exo 04

#### Init un Repo en local

* Creez un dossier test dans votre dossier `workspace`
* Dans ce dossier utilisez la commande `git init`

#### Creer un nouveau repo vide sur Github

* Creez un nouveau Repo public sur Github sans README
* Ce Repo devra avoir comme nom: `NOM_DE_FAMILLE-init`

#### Relier le repo local a Github

* Reliez votre Repo GIT local avec Github
* Github doit etre attache au remote `origin`
* `git remote` doit montrer `origin`

#### Ajouter un fichier

* Toujours dans votre dossier `NOM_DE_FAMILLE-init`
* Creez un fichier `A.txt`
* Le ficihier `A.txt` doit contenir le texte `Hello Damien!`
* Faites un commit avec comme message `hahaha`

#### Envoyer le fichier sur Github

* Envoyez votre commit sur votre Github
* Vous devez voir le commit `hahaha` sur le site Github pour le Repo `NOM_DE_FAMILLE-init`
* `git status` doit vous dire que vous etes a jour

## Exo 05

#### Ajouter plusieurs fichiers

* Retournez dans votre dossier `NOM_DE_FAMILLE-test`
* Creez un fichier `A.txt`
* `A.txt` doit contenir le texte `A!`
* * Creez un fichier `B.txt`
* `B.txt` doit contenir le texte `B!`
* Utilisez une seule commande `git add` pour ajouter les 2 fichiers a la fois
* `git status` doit maintenant montrer les 2 fichiers en vert
* Faites un commit avec comme message `A & B`
* Envoyez vos commits sur votre github

## Exo 06

#### Enlever un Fichier

* Supprimer le fichier `A.txt` en local
* Faire le necessaire pour qu'il ne soit plus visible sur github

## Exo 07

#### Renomer un fichier

* Renomez le fichier `B.txt` en `C.txt` en local
* Faire le necessaire pour qu'il soit visible sur github
