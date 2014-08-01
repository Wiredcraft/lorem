---
weight: 100
title: The Docs
template: doc.jade
promoted: true
---

Docs is committed to [`/docs`](https://github.com/Wiredcraft/lorem/tree/master/docs) and hosted with Github pages. It is a single page website. The `/docs` folder is self-contained and can be copied to wherever to build a new site (doesn't need to be a sub-folder). Just make sure you have the build result committed and deploy with the right command (see below).

### Requirements

* Node and NPM.
* `npm -g install gulp`

### Development

We require 0 Ruby gems. We use bower but vendor is pre-built so you don't need to run `bower install`.

* `npm install`
* `gulp`
* [http://127.0.0.1:4321/](http://127.0.0.1:4321/)

### Authoring

* Docs are organized in sub-directories in `/src`. For example, `/src/api`.
* For the build system to see the directories, they need to be in `/src/docs.json`.
* Files are markdown with YAML header.

### Deployment

* `npm install`
* `gulp dist`
* `git commit ...` etc. You need to track the build result with the main branch for `git subtree` to work.
* `git subtree push --prefix docs/build origin gh-pages`
