# Docs

## Development

We require 0 Ruby gems. Vendor is prebuilt so you don't need to run `bower install`.

* `npm -g install gulp`
* `npm install`
* `gulp`
* [http://127.0.0.1:4321/](http://127.0.0.1:4321/)

## Authoring

* Docs are organized in sub-directories in `/src`. For example, `/src/api`.
* For the build system to see the directories, they need to be in `/docs.json`.
* Files are markdown with YAML header.

## Deployment

* `gulp dist`
* `git commit ...` etc.
* `git subtree push --prefix docs/build origin gh-pages`