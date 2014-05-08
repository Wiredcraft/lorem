---
weight: 100
id: docs
title: The Docs
template: doc.jade
---

### Development

We require 0 Ruby gems. We use bower but vendor is pre-built so you don't need to run `bower install`.

* `npm -g install gulp`
* `npm install`
* `gulp`
* [http://127.0.0.1:4321/](http://127.0.0.1:4321/)

### Authoring

* Docs are organized in sub-directories in `/src`. For example, `/src/api`.
* For the build system to see the directories, they need to be in `/src/docs.json`.
* Files are markdown with YAML header.

### Deploy

* `gulp dist`
* `git commit ...` etc. You need to track the build result with the main branch for `git subtree` to work.
* `git subtree push --prefix docs/build origin gh-pages`
