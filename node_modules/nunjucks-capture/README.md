# nunjucks-capture

> A nunjucks port of the [Liquid Capture tag](https://docs.shopify.com/themes/liquid-documentation/tags/variable-tags#capture)

[![Build Status](https://travis-ci.org/fffunction/nunjucks-capture.svg?branch=master)](https://travis-ci.org/fffunction/nunjucks-capture) [![Coverage Status](https://coveralls.io/repos/fffunction/nunjucks-capture/badge.svg?branch=master&service=github)](https://coveralls.io/github/fffunction/nunjucks-capture?branch=master)

## Install

```sh
npm install nunjucks-capture
```

## Usage

Add the extension to the Nunjucks environment:

```js
var nunjucks = require('nunjucks');
var CaptureTag = require('nunjucks-capture');

var env = new nunjucks.Environment();
env.addExtension('CaptureTag', new CaptureTag());
```

Capture some content as a string:

```html+jinja
{% capture as="demo" -%}
    <h2>Hello, world!</h2>
    {% include 'includes/content.html' %}
{%- endcapture %}

{{ demo }}

<pre>
    {{ demo | e }}
</pre>

```

will result in:

```html
<h2>Hello, world!</h2>
<p>This is the included content</p>
<pre>
    &lt;h2&gt;Hello, world!&lt;/h2&gt;
    &lt;p&gt;This is the included content&lt;/p&gt;
</pre>
```

Everything between the two tags is stored in a new variable as a string. Dynamic content, such as includes or loops, are evaluated before the variable is stored. This means you've captured the resulting content, not the templating.

See also:
    - [Nunjucks API documentation](https://mozilla.github.io/nunjucks/api.html)
    - [Nunjucks templating documentation](https://mozilla.github.io/nunjucks/templating.html)

[![Built by fffunction, with love and coffee](http://i.imgur.com/hY7NBej.png)](http://fffunction.co "Built by fffunction, with love and coffee")
