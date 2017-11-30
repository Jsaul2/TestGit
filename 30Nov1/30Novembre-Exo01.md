## Prerequis

Ces Exercices sont la suite de ceux du 1er Cours.

Afin de s'assurer que tout le monde est au point, faites un fork du **Repo**: `https://github.com/corneadoug/CORNEAU-test` sur votre _Github_.

Il vous faudra ensuite faire un checkout de votre fork dans 2 dossiers `CORNEAU-test` et `CORNEAU-retest`

```
cd ~/Documents/workspace
git clone https://github.com/VOTRELOGIN/CORNEAU-test.git
git clone https://github.com/VOTRELOGIN/CORNEAU-test.git CORNEAU-retest
```


## Exo 08

#### Utiliser .gitignore

* Allez dans votre dossier `CORNEAU-test`
* Creez un fichier `.gitignore`
* Ecrire le texte `D.txt` dans le fichier `.gitignore`
* Faire le necessaire pour qu'il soit visible sur github
* Creez un fichier `D.txt` avec le texte `Je suis D`
* `git status` ne devrait pas montrer la modification

## Exo 09

#### Annuler un git add

* Remplacez le texte de `C.txt` par `C?`
* Utilisez `git add` pour que `C.txt` soir vert quand on tape `git status`
* Faire en sorte que `C.txt` apparaise en rouge de nouveau
* Faites apparaitre les modifications de `C.txt` sur Github

#### Annuler une modification

* Modifiez le texte de `C.txt` par `C3PO`
* Annulez le changement a l'aide de la commande checkout


## Exo 10

#### Mettre a jour NOM_DE_FAMILLE-retest

* Faites un `git pull` dans votre dossier `NOM_DE_FAMILLE-retest`
* `git status` doit vous dire que vous etes a jour
* Vous devriez voir un fichier `C.txt` dans votre dossier, mais pas de `D.txt`

#### Travailler a plusieurs

* Dans le dossier `NOM_DE_FAMILLE-test` modifiez le texte de `C.txt` par `C moi`
* Faites en sorte d'avoir ce commit sur github
* Dans le dossier `NOM_DE_FAMILLE-retest` modifiez le texte de `C.txt` par `C pas moi` 
* Faites en sorte de d'avoir cette modification sur github (il faudra resoudre le conflict)

## Exo 11

#### Annuler le dernier commit local

* Dans votre dossier `NOM_DE_FAMILLE-test`
* Mettez vous a jour avec un `git pull`
* Changez le text de `C.txt` en `Vive les bonbons`
* Faites un commit sans l'envoyer sur Github
* Annulez ce dernier commit avec reset
* `git status` devrait montrer le fichier en rouge
* Supprimez le changement avec checkout


## Exo 12

#### Visiter un ancien commit

* Faites un checkout du commit `A & B`
* Vous devez avoir un fichier `A.txt` et `B.txt` en local
* Retourner au dernier commit

#### Revert 
* Changez le text de `C.txt` en `ABC`
* Le Commit devra s'appeller `Easy as 123`
* Envoyez la modification sur Github
* Utiliser Revert pour annuler cette modification

## Exo 13

#### Retour vers le commit

* Mettre a jour votre dossier `CORNEAU-retest`
* Dans le dossier `CORNEAU-test`
* Utilisez reset pour retourner au commit `Easy as 123`
* Refaites le commit avec comme nom `Return to the future`
* Faites un force push
* Le dernier commit sur Github devrait etre `Return to the future`

#### Se remettre d'un changement de l'History
* Dans `CORNEAU-retest`
* Creez un fichier `E.txt` avec comme texte `E`
* Faites un commit de cette modification avec comme nom `E`
* Faites un `git pull --rebase` pour vous mettre a jour
* Envoyez enfin votre commit sur github
* Les 2 derniers commits doivent etre: `Return to the Futur` et `E`

