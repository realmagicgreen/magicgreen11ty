## Warning:

Despite this repo being public, it doesn't mean that all these assets are open-source and/or copyright free, or even that you may use any of them. Please, ask for permission first by contacting us: info@junglestar.org

All photos are © by the photographers, all rights are reserved.

Thanks, the [Junglestar](https://junglestar.org) team.

## Features:


## URGENT 2DOs:
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

```npm run start``` which runs ```npx @11ty/eleventy --serve```

or serve like this:

```npm run serve``` which runs ```eleventy --serve```

build only:

```npm run build``` which runs ```eleventy```

or Automatically run when input template files change.
Useful if you have your own web server:

```npm run watch``` which runs ```eleventy --watch```

or Change the web server’s port. Here how to use ```localhost:8081``` :

```npx @11ty/eleventy --serve --port=8081```
