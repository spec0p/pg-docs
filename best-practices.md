---
layout: default
title: Best practices
description: Read the Phune Gaming best practices guidelines and apply them to your game development
---

---

<div data-magellan-expedition="fixed" data-options="destination_threshold: 65;">
    <ul class="sub-nav">
        <li data-magellan-arrival="aspect-ratio"><a href="#aspect-ratio">Aspect ratio</a></li>
        <li data-magellan-arrival="csp-restrictions"><a href="#csp-restrictions">CSP Restrictions</a></li>
    </ul>
</div>

---

<a name="aspect-ratio"></a>
<h3 data-magellan-destination="aspect-ratio">Aspect ratio</h3>

For a seamless integration with the Phune Gaming platform we recommend all the games to be implemented using the aspect ratio of **1.775** (same as iPhone 5).

This is how a game looks on a smartphone device:

<ul class="small-block-grid-1 medium-block-grid-2">
    <li class="text-center">
        <img id="" src="img/ratio/mobile.png" alt="Mobile aspect ration" />
    </li>
    <li class="text-center">
        <img id="" src="img/ratio/mobile-hover.png" alt="Mobile aspect ration" />
    </li>
</ul>

This is how a game looks on a TV set using the split-screen option:

<ul class="small-block-grid-1 medium-block-grid-2">
    <li class="text-center">
        <img id="" src="img/ratio/tv-split.png" alt="TV split-screen aspect ration" />
    </li>
    <li class="text-center">
        <img id="" src="img/ratio/tv-split-hover.png" alt="TV split-screen aspect ration" />
    </li>
</ul>

This is how a game looks on a TV set using the full-screen option:

<ul class="small-block-grid-1 medium-block-grid-2">
    <li class="text-center">
        <img id="" src="img/ratio/tv-full.png" alt="TV full-screen aspect ration" />
    </li>
    <li class="text-center">
        <img id="" src="img/ratio/tv-full-hover.png" alt="TV full-screen aspect ration" />
    </li>
</ul>

<div class="panel callout radius">
{% markdown %}
The game background can (and should) be enriched with additional elements when running in full screen mode on a TV set.
{% endmarkdown %}
</div>

<a name="csp-restrictions"></a>
<h3 data-magellan-destination="csp-restrictions">CSP restrictions</h3>

Phune Gaming fully supports [Firefox OS](https://developer.mozilla.org/en-US/Firefox_OS). However, unlike traditional web sites, [Open Web App](https://developer.mozilla.org/en/Apps) with [privileged or certified types](https://developer.mozilla.org/en-US/docs/Web/Apps/Packaged_apps) enforce a [CSP (content security policy)](https://developer.mozilla.org/en-US/docs/Security/CSP/Introducing_Content_Security_Policy) by default. This may cause quite a bit of existing code to break while porting and cause a significant amount of confusion if developers are unaware that the CSP exists.

TODO: CSP... https://developer.mozilla.org/en-US/Apps/CSP

---

What's next? Go to [Install Phune Gaming](install.html) to learn how to install the Phune Gaming client platform.
