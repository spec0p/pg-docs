---
layout: default
title: Best practices
description: Read the Phune Gaming best practices guidelines and apply them to your game development
---

---

<div data-magellan-expedition="fixed" data-options="destination_threshold: 65;">
    <dl class="sub-nav">
        <dt>Jump to:</dt>
        <dd data-magellan-arrival="aspect-ratio"><a href="#aspect-ratio">Aspect ratio</a></dd>
        <dd data-magellan-arrival="csp-restrictions"><a href="#csp-restrictions">CSP Restrictions</a></dd>
    </dl>
</div>

---

<a name="aspect-ratio"></a>
<h3 data-magellan-destination="aspect-ratio">Aspect ratio</h3>

TODO: aspecto ratio...

<a name="csp-restrictions"></a>
<h3 data-magellan-destination="csp-restrictions">CSP restrictions</h3>

Phune Gaming fully supports [Firefox OS](https://developer.mozilla.org/en-US/Firefox_OS). However, Phune Gaming is distributed as a Firefox OS privileged type of app which enforces the [CSP (Content Security Policy)](https://developer.mozilla.org/en-US/docs/Security/CSP/Introducing_Content_Security_Policy) by default. This may cause your game not to work properly on Firefox OS if it does not comply with the CSP restrictions.

To guarantee your game is fully functional on Firefox OS, follow the best practices below during the development:

* Include all JavaScript and CSS files locally in your game instead of loading them remotely.
* Don't embed JavaScript in `<script>` tags in HTML files since the inline scripts are banned. You should place the code in an external JavaScript file and reference it via the `src` attribute. 
* HTML event attributes like `onclick` and `onload` are also considered inline scripts, thus add them as event listeners in your JS files.
* Don't assign content to the `innerHTML` property of dimanically created `<script>` tags.
* Don't assign remote URLs to the `src` property of dinamically created `<script>` tags.
* Don't use the `eval()` function or the `eval` operator.
* Don't use the `javascript:` pseudo-protocol (i.e. `<a href="javascript:alert('foo')">`).
* Don't use the `Function()` constructor.
* Pass callable objects (i.e. functions) to `setTimeout` and `setInterval` and not strings for example.
* Don't use plugins (i.e. `<object>`, `<embed>`, etc).
* Don't create Web Workers with remote URLs.

---

What's next? Go to [Install Phune Gaming](install.html) to learn how to install the Phune Gaming client platform.
