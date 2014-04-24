# Docs

## Development

We require 0 Ruby gems. Vendor is prebuilt so you don't need to run `bower install`.

* `npm -g install gulp`
* `npm install`
* `gulp`
* [http://127.0.0.1:4321/](http://127.0.0.1:4321/)

## Deploy

* `gulp dist`
* `git commit ...` etc.
* `git subtree push --prefix docs/build origin gh-pages`
