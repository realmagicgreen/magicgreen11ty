

## 2DOs:
- [ ] check unused dependencies: slugify?, eduardoboucas stuff,
- [ ] Add Patreon
- [ ] TEST: gsheet is shared with iam.gservice user (magicgreen-admin@magicgreen-205703.iam.gserviceaccount.com) and given EDIT permissions, maybe need only read, test later, when it's working!
- [ ] build ADD YOURSELF FORM > gform > gsheet
- [ ] css ovelay ala VEGAS, via frontmatter true false, for crappy jpgs
- [ ] i18n + make indo posts (using G translate
- [ ] Know section: make memes img 4 social with pill statistics phrases (img)
- [ ] tooltip showing categories descriptions
- [ ] page.name  instead of filename in footer list
- [ ] FB post some stuff + setup post robot (buffer?)
- [ ] add + pinned post options (or new posts | featured | popular sections)
- [ ] make contributor guide page w/ what's needed in an article, writing style, checklist.


## FUTURE 2DOs:

- [ ] setup search
- [ ] Twitter account
- [ ] MAYBE: GUI grid with all post+titles+subtitles
- [ ] footer: install collapsible + block | only popular posts, just topics
- [ ] add ?ref=magicgreen.org with JS
- [ ] listen to this post (use Soundcloud!)
- [ ] - [X] address use [microformat](https://schema.org/Organization). [See test](https://search.google.com/structured-data/testing-tool#url=http%3A%2F%2Fbinocle.it%2F)

## @ BE EVALUATED

- [ ] when took-off, refactor w/ hugo+netlify using https://github.com/netlify/victor-hugo, tut here: https://www.sarasoueidan.com/blog/jekyll-ghpages-to-hugo-netlify/
- [ ] standalone web-app (after "add to home screen" on android).


## Dev Setup

```npm install``` node dependencies setup

## Dev Troublshooting

```npm run debug``` DEBUG=* eleventy

```npm update``` update npm packages

```npm outdated``` list npm packages


## Dev Time

Boot up a Browsersync web server to apply changes and refresh automatically. We’ll also --watch for you:

```terminal
npm run start
```

which runs ```npx @11ty/eleventy --serve```

or serve like this:

```terminal
npm run serve
```

which runs ```eleventy --serve```

build only:

```terminal
npm run build
```

which runs ```rm -rf _site && npx @11ty/eleventy```

or Automatically run when input template files change.
Useful if you have your own web server:

```terminalterminal
npm run watch
```

which runs ```eleventy --watch```

or Change the web server’s port. Here how to use ```localhost:8081``` :

```terminal
npx @11ty/eleventy --serve --port=8081
```


```terminal
npm run watch start:clean

```

## New posts

use this in from matter:

```frontmatter
eleventyExcludeFromCollections: true #turn off to publish it!
```



## MG 11TY ☑ ☐ 2DO:

☐ tagcloud everywhere, not just tag pages
☐ dark on mobiles, light on dkt
☐ web share instead of current share block
☐ hack mediumzoon > image 100vh

MAYBE:
☐ https://github.com/quasibit/eleventy-plugin-schema

DONE:
☐ https://github.com/11ty/eleventy-img
☑ og metas
☑ fix mediumzoom
☑ put resp-img in tag.njk
☑ improve resources as mgsome
☑ switch to new SVG sys
☑ resources
☑ underline current cat page in menu
☑ rid of categories now use tags
☑ home pagination
☑ home pagination navigation
☑ quick fix heading-link in posts
☑ filtered article tag
☑ solved menu w/ hardcoding
☑ solved slugify problem
☑ inner post images
☑ made article.json
☑ add tag: article to each post
☑ image.html update tu njk
