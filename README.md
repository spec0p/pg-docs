# Phune Gaming game development documentation

## Game development tutorial

If you are looking for the game development tutorial, please head up to [Phune Gaming game development tutorial](http://phune-gaming.github.io/pg-docs/).

## Generate the site locally

To build the site locally please read the following subsections.

### Requirements

This documentation is built with [Jekyll](http://jekyllrb.com/). It you don't have Jekyll installed please read the [Jekyll Installation](http://jekyllrb.com/docs/installation/) page to install it, or alternatively, read [How to Run Jekyll on Windows](https://github.com/juthilo/run-jekyll-on-windows/).

It also uses [Foundation](http://foundation.zurb.com/) as the base front-end framework.  Please read [Getting Started With Sass](http://foundation.zurb.com/docs/sass.html) or see the video [Getting Started with Sass](http://foundation.zurb.com/learn/video-started-with-foundation.html) to find out how to start a project with Foundation and Sass.

Foundation with Compass requires you to install the following projects:

* Git [[Linux/UNIX](http://git-scm.com/), [Windows](http://msysgit.github.io/)]
* Ruby 1.9+ [[Linux/UNIX](https://www.ruby-lang.org/en/), [Windows](http://rubyinstaller.org/)]
* [Node.js](http://nodejs.org)
* [Compass](http://compass-style.org/): `gem install compass`
* [Bower](http://bower.io): `npm install -g bower`

The following plugin have been used with Jekyll:

* [Compass integration for Jekyll](https://github.com/mscharley/jekyll-compass)

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
$ jekyll serve --watch --baseurl ''
# => A development server will run at http://localhost:4000/,
#    watched for changes, and regenerated automatically.
```

## License

Copyright (c) 2014 Present Technologies

Licensed under the MIT license.
