---
layout: default
title: Install Phune Gaming
description: Download and configure everything you need to get started
---

<hr />

<div data-magellan-destination="sdk-js" data-magellan-expedition="fixed" data-options="destination_threshold: 65;">
    <dl class="sub-nav">
        <dt>Jump to:</dt>
        <dd data-magellan-arrival="request"><a href="#request">Developer's account</a></dd>
        <dd data-magellan-arrival="download"><a href="#download">Download the platform</a></dd>
        <dd data-magellan-arrival="install"><a href="#install">Install the platform</a></dd>
    </dl>
</div>

<hr />

<a name="request"></a>
<h3 data-magellan-destination="request">Request a developer's account</h3>

Send and email to [pg-dev@present-technologies.com](mailto:pg-dev@present-technologies.com) with the following information:

```
Name: "The name of the game",
Description: "The description of the game"
Bot: "Whether your game support bots or not"
```

In response you will receive a new `id` for your game and the credentials for a SFTP account that you will need later to deploy the game rules on the server. Used, for instance, to validate moves or generate moves for a bot.

**Note:** you can update the game details any time by sending a new email and refering the game `id`.

<hr />

<a name="download"></a>
<h3 data-magellan-destination="download">Download Phune Gaming platform</h3>

To download the Phune Gaming client platform you must accept the [Present Technologies License Agreement for Phune Gaming](javascript:alert('Not yet available!'\)).

<input id="accept-license" type="checkbox" /><label for="accept-license">Accept License Agreement</label>  
<a id="download-platform" href="javascript:alert('Not yet available!')">Download Phune Gaming platform</a>

<hr />

<a name="install"></a>
<h3 data-magellan-destination="install">Install Phune Gaming platform</h3>

Unzip the platform into a local folder. Inside, create a new folder `game` and inside `game` another one named after the `id` you got from us in the email.

Finally, create an `index.html` file and include a `<script>` tag with our SDK. Please move to the next section, [SDK for JavaScript](/sdk-js.html), to find how to install and use it in your game.
