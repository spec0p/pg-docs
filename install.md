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
        <dd data-magellan-arrival="download"><a href="#download">Download Phune</a></dd>
        <dd data-magellan-arrival="install"><a href="#install">Install Phune</a></dd>
        <dd data-magellan-arrival="test"><a href="#test">Test Phune</a></dd>
    </dl>
</div>

<hr />

To download and install the Phune Gaming client platform complete the steps bellow:

<a name="request"></a>
<h3 data-magellan-destination="request">Request a developer's account</h3>

Send an email to [pg-dev@present-technologies.com](mailto:pg-dev@present-technologies.com) with the following information:

```
Name: "The name of the game",
Description: "The description of the game"
Bot: "Whether your game support bots or not"
```

In response you will receive an `id` for your game and the credentials for an SFTP account that you will need later to deploy the server-side rules on the server. The rules are used to manage the game states, to validate players' moves or to generate moves for a bot.

**Note:** You can always update the game details by sending us a new email and refering the game `id`.

<hr />

<a name="download"></a>
<h3 data-magellan-destination="download">Download Phune Gaming</h3>

To download the Phune Gaming client platform you must accept the [Present Technologies License Agreement for Phune Gaming](license-agreement.html).

<input id="accept-license" type="checkbox" /><label for="accept-license">Accept License Agreement</label>  
<a id="download-platform" href="http://www.phune.com/assets/phune.zip">Download the Phune Gaming client platform</a>

<hr />

<a name="install"></a>
<h3 data-magellan-destination="install">Install Phune Gaming</h3>

Install the Phune Gaming client platform by following the steps below:

1. Unzip the platform into a local folder. 
2. Inside the platform create a new folder called `game`. 
3. Inside `game` create another folder named after the `id` from our email. The `your-game-id` folder is where your game contents will reside, structure it the way you want.
4. Finally, create an `index.html` file at the root of `your-game-id` folder. 

<hr />

<a name="test"></a>
<h3 data-magellan-destination="test">Test Phune Gaming</h3>

To test if your environment is set up properly, copy the platform contents to an HTTP server of your choice. Alternatively, if you have Python installed, you can simply run `python -m SimpleHTTPServer` at the root of the platform folder.

At this point you should see the Phune Gaming client platform, feel free to explore it. However, you will not be able to start playing your game yet, since you need to implement the required callbacks described on the next section.

<hr />

What's next? Go to our [JavaScript SDK](sdk-js.html) documentation to start developing your game.
