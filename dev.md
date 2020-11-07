## Warning:

Despite this repo being public, it doesn't mean that all these assets are open-source and/or copyright free, or even that you may use any of them. Please, ask for permission first by contacting us: info@junglestar.org

All photos are © by the photographers, all rights are reserved.

Thanks, the [Junglestar](https://junglestar.org) team.

## Features:

- [X] plain javascript.
- [X] responsive images with tweaked [jekyll-responsive-image](https://github.com/wildlyinaccurate/jekyll-responsive-image) srcset+[sizes](https://ericportis.com/posts/2014/srcset-sizes/) + [Responsive Background Image script](https://aclaes.com/responsive-background-images-with-srcset-and-sizes/)
- [X] FULL HD - up to 1920px wide shots.
- [X] open-graph & twitter-cards.
- [X] SSL/https thanks to netlify.
- [X] include in home slideshow via fron matter.
- [X] script to append ref info to copy action
- [X] sticky posts [option](https://github.com/ibrado/jekyll-stickyposts)
- [X] jekyll-paginate-v2
- [X] setup [gsheet > jekyll yaml data as](https://sprintworks.se/blog/data-from-google-drive-in-static-websites/)


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

- [ ] setup Alexa verify
- [ ] install (Algolia) or other search
- [X] Instagram account
- [ ] Twitter account
- [ ] setup this: https://github.com/myles/jekyll-typogrify
- [ ] MAYBE: GUI grid with all post+titles+subtitles
- [ ] footer: install collapsible + block | only popular posts, just topics
- [ ] add ?ref=magicgreen.org with JS
- [ ] add [blur-up](https://css-tricks.com/the-blur-up-technique-for-loading-background-images/)
- [ ] add this: https://github.com/sverrirs/jekyll-paginate-v2 + https://github.com/sverrirs/jekyll-paginate-v2/blob/master/README-AUTOPAGES.md
- [ ] listen to this post (use Soundcloud!)
- [ ] when took-off, refactor w/ hugo+netlify using https://github.com/netlify/victor-hugo, tut here: https://www.sarasoueidan.com/blog/jekyll-ghpages-to-hugo-netlify/
- [ ] standalone web-app (after "add to home screen" on android).
- [X] address use [microformat](https://schema.org/Organization). [See test](https://search.google.com/structured-data/testing-tool#url=http%3A%2F%2Fbinocle.it%2F)



## Dev Dependencies

```npm install --save-dev change-case```

```npm install --save-dev gulp@4.0.0```

```npm install --save-dev gulp-rename```

```npm install --save-dev gulp-responsive```



## Dev Setup

```bundle install``` gems setup

```npm install``` node dependencies setup

## Dev Troublshooting

```npm update``` update npm packages
```npm outdated``` list npm packages


## Dev Time

Store photos, at least 2000x1333px, .tif or .jpg, in ```/src/_p-hi```
Copy those to process into:

- ```/src/p_input``` if not yet lowercase, or
- ```/src/p_lowercase``` if already all lowercase, or
- ```/src/p_jpeg``` if already .jpg

Then use:

```gulp lower``` to lowercase all photo names

```gulp tifs``` to produce jpg from tifs

```gulp jpgs``` to produce sized copies


Also can use [grafickmagik](http://aheckmann.github.io/gm/docs.html) to work photos 1 by 1, from CLI, like this:

```gm convert pippa-01.tif pippa-01.jpg```

Run Jekyll:

```bundle exec Jekyll serve ```

or to see draft posts:

```bundle exec Jekyll serve --draft```

or to see error traces:

```bundle exec Jekyll serve --trace```



## Update companies green pages

```npm run getdata```



## LIMITS (BUGS?!)

Tried jekyll-responsive-image but it sucks, this is not working:

```
{% capture path %} {{ page.image }} {% endcapture %}

{% responsive_image_block %}
   path: {{ path }}
{% endresponsive_image_block %}
```

there an [open issue here](https://github.com/wildlyinaccurate/jekyll-responsive-image/issues/70) ...
