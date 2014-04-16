# Phune Gaming game development documentation

## Game development tutorial

If you are looking for the game development tutorial, please head up to [Phune Gaming game development tutorial](http://developers.phune.com).

## Generate the site locally

To build the site locally please read the following subsections.

### Requirements

This documentation is built with [Jekyll](http://jekyllrb.com/). It you don't have Jekyll installed please read the [Jekyll Installation](http://jekyllrb.com/docs/installation/) page to install it, or alternatively, read [How to Run Jekyll on Windows](https://github.com/juthilo/run-jekyll-on-windows/).

With Jekyll installed, install all the required additional [Ruby Gems](https://rubygems.org/) by running:

```
$ gem install bundler
$ bundle install
```

It also uses [Foundation](http://foundation.zurb.com/) with [Compass](http://compass-style.org/) as the base front-end framework. In order to build the project please install the projects below.

Install Foundation dependency with [Bower](http://bower.io):

```
$ bower install
```

### Build

In order to build the documentation site run:

```
$ jekyll build --watch
# => The current folder will be generated into ./_site,
#    watched for changes, and regenerated automatically.
```

### Preview

Jekyll also comes with a built-in development server that will allow you to preview what the generated site will look like in your browser locally:

```
$ jekyll serve --watch
# => A development server will run at http://localhost:4000/,
#    watched for changes, and regenerated automatically.
```

### Deploy

Build Jekyll site locally and push it up to the origin/gh-pages branch using [Rake](http://rake.rubyforge.org/):

```
$ rake
```

## License

Copyright (c) 2014 Present Technologies

Licensed under the MIT license.
