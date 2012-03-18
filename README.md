Bienvenue dans le module ETag pour node.js 

This module computes ETag sum  for locals files

It uses a array like a cache 

Ce module permet de gérer les headers ETag d'une ressource web

# Usage

First : var ETag = require('ETag');

Then use it: 
 
Like a function : 
          etag = ETag.Calcul({'ressource':'zombi.jpg', 'url':'/zombi.jpg'}) ;
          console.log("etag:" + etag);  


or OOP 

        myetag = new ETag({
         'url': '/foo/bar.png',
         'etag': '1234567890'
        });

# Installation 
## by npm 

npm install ETag

## From github 

Go to https://github.com/germanlinux/ETag and download the archive

## by git 

git://github.com/germanlinux/ETag.git


# Prerequis

node.js

npm

coffeescript (uniquement pour modifier les sources coffeescript)

## Dépendances

aucunes

# Methods

##Constructor: 

        myetag = new ETag({
         'url': '/foo/bar.png',
         'etag': '1234567890'
         'resource' :'path_to/bar.png'
        });

If you give 'resource' ,  ETag will be re-comptuting

Each call of 'new' , pushes the url and l'ETag in the cache.
 
## Attribute

myobjet.value :return ETag value 
 
##CLass method

ETag.Calcul(resource) 

        eg: myetag = Etag.Calcul({'resource':'/path/img.png'});

ETag.Calcul_etag(file)

        eg: myetag = Etag.Calcul_etag({'/path/img.png');

ETag.Find(by_url)

ETag.Raz() : clear the cache

ETag.List() : list all entries from cache

ETag.Items() : return the number of entries


# Tests 
npm test ETag


