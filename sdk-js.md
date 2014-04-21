---
layout: default
title: SDK for JavaScript
description: Build HTML5 games for the Phune Gaming platform
---

---

<div data-magellan-destination="sdk-js" data-magellan-expedition="fixed" data-options="destination_threshold: 65;">
    <dl class="sub-nav">
        <dt>Jump to:</dt>
        <dd data-magellan-arrival="install"><a href="#install">Install</a></dd>
        <dd data-magellan-arrival="getting-started"><a href="#getting-started">Getting Started</a></dd>
        <dd data-magellan-arrival="public-api"><a href="#public-api">Public API</a></dd>
    </dl>
</div>

---


Before you start developing your game you need to install the JavaScript SDK.  

<a name="install"></a>
<h3 data-magellan-destination="install">Install</h3>

Download [the Phune Gaming SDK directly from GitHub](https://github.com/phune-gaming/pg-sdk-js/releases) and unzip it somewhere. Then copy the `dist` folder to the javascript folder for your game (i.e. `js` folder inside `your-game-id` folder).


Alternatively, if you use [Bower](http://bower.io/), you can install the JavaScript SDK from the command-line. From the root of `your-game-id` folder run:

```
bower install phune-gaming-sdk
```

Add the Phune Gaming SDK to your `index.html`, such as:

* For direct download installation

```html
<script src="js/PG.min.js"></script>
```
* For Bower installation

```html
<script src="bower_components/phune-gaming-sdk/dist/PG.min.js"></script>
```

You are now ready to start your game implementation. Please proceed to the [Getting Started](#getting-started) sub-section to find which callbacks your game needs to implement to process the messages sent by the platform, and to the [Public API](#public-api) sub-section to find out which methods you have available to send the game messages (e.g. moves) to the server.

**Note:** The [implementation of the game Tic-Tac-Toe](https://github.com/phune-gaming/pg-tic-tac-toe) is freely available on GitHub.

---

<a name="getting-started"></a>
<h3 data-magellan-destination="getting-started">Getting Started</h3>

Initialize the JavaScript SDK by calling `PG.init` and defining the callback functions which will handle all matchmaking phases and the game events sent to your game by the platform:

```js
PG.init({
    onMatchPrepare: function(player, opponent, deviceType) {
        // ...
    },
    onGameLobby: function(allowedTime) {
        // ...
    },
    onMatchStart: function(playerIdToPlayNext, timeToPlay) {
        // ...
    },
    onMoveValid: function(playerIdWhoSentTheMove, playerIdToPlayNext, moveDetails, moveResults, gameResults) {
        // ...
    },
    onMoveInvalid: function(playerIdWhoSentTheMove, playerIdToPlayNext) {
        // ...
    },
    onServerMessage: function(playerIdWhoSentTheMessage, messageDetails, messageResults) {
        // ...
    },
    onPlayerMessage: function(messageDetails) {
        // ...
    },
    onMatchEnd: function(gameResults) {
        // ...
    },
    onKeyPress: function(key) { // TV only
        // ...
    }
});
```

The detailed description for each callback is presented below.

#### Match prepare

During the match preparation phase, the game should build the user interface and get ready to start playing. It is provided with the details of the player and opponent, and in which type of device the game is running ('mobile' or 'tv').

```js
onMatchPrepare: function(player, opponent, deviceType) {
    // ...
},
```

#### Game lobby

If the game needs to configure the match details before it is started, the `onGameLobby` callback function will be called to allow it to do so. It is provided with the time allowed for the player to configure the game and start the match.

```js
onGameLobby: function(allowedTime) {
    // ...
},
```

#### Match start

When the match starts, the game will be informed of which player should play first and the time allowed for each player to make a move.

```js
onMatchStart: function(playerIdToPlayNext, timeToPlay) {
    // ...
},
```

#### Moves handling and validation

If a move is considered valid by the server-side rules, the server will respond with a confirmation message that will be handled by the `onMoveValid` callback function. Moves performed by the opponent will also be handled by this callback function.

If a move ends the game, the `gameResults` parameter will indicate how the game ended. Possible values are 'won', 'lost', and 'draw'.

```js
onMoveValid: function(playerIdWhoSentTheMove, playerIdToPlayNext, moveDetails, moveResults, gameResults) {
    // ...
},
```

If a move does not pass the server-side rules validation, the game will be notified by the `onMoveInvalid` callback function.

```js
onMoveInvalid: function(playerIdWhoSentTheMove, playerIdToPlayNext) {
    // ...
},
```

#### Handle messages from the server

Responses to messages sent to the server will be processed by the `onServerMessage` callback function.

```js
onServerMessage: function(playerIdWhoSentTheMessage, messageDetails, messageResults) {
    // ...
},
```

#### Handle messages from an opponent

Messages sent by the opponent will be processed by the `onPlayerMessage` callback function.

```js
onPlayerMessage: function(messageDetails) {
    // ...
},
```

#### Match end

When the game is over, the `onMatchEnd` callback function is called with the game result. Possible values are 'won', 'lost', and 'draw'.

```js
onMatchEnd: function(gameResults) {
    switch (gameResults) {
    case 'won':
        // ...
        break;
    case 'lost':
        // ...
        break;
    default:
        // draw...
        break;
    }
},
```

#### TV remote control input handling

On TV environment, the `onKeyPress` callback handles the remote control keys that were pressed. The possible values are: 'left', 'right', 'up', 'down' and 'enter'.

```js
onKeyPress: function(key) {
    switch(key) {
    case 'left':
        // ...
        break;
    case 'right':
        // ...
        break;
    case 'up':
        // ...
        break;
    case 'down':
        // ...
        break;
    case 'enter':
        // ...
        break;
    }
}
```

---

<a name="public-api"></a>
<h3 data-magellan-destination="public-api">Public API</h3>

The Phune Gaming SDK provides an [API](http://phune-gaming.github.io/pg-sdk-js/) which allows the game to send messages to the platform and to the server.

#### Match start

During the match preparation phase (`onMatchPrepare` callback) the game must inform the platform when it is ready to be shown to the user by calling `PG.ready`.

```js
PG.ready();
```

#### Game lobby

If the game is configured on the server to require a configuration phase, the `onGameLobby` callback will be called to allow the game to send the required configuration back to the server by calling `PG.serverMessage`. When the match is ready to start, the game must inform the platform by calling `PG.exitGameLobby`.

```js
PG.exitGameLobby();
```

#### Send messages to the server

It is possible to send messages to be evaluated by the server-side rules. You can specify if you want the response to be sent to both players or only to you. Additionally, you can indicate if you want the messages to be processed by the server-side rules in order of arrival or in parallel.

```js
PG.serverMessage(
    messageObject,    // any message content can be passed here
    false,            // should the response be sent to both players?
    true              // should the message be processed by the order of arrival?
);
```

#### Send messages to the opponent

If the game requires to send messages to the opponent that should not be evaluated by the server-side rules, it can use this function. Optionally, you can specify if you do not want to allow more than one message to be sent within a specified time in milliseconds. In this case, if the function is called more than once during the specified interval, only the last message will be sent.

```js
PG.playerMessage(
    messageObject,    // any message content can be passed here
    150               // do not send more than one message during this interval
);
```

#### Perform a move

If it is the current player's turn, the game should allow the player to make a move and then send it to the platform. Optionally, you can specify a validate function that accepts the move object as a parameter and validates it before sending it to the server. This prevents additional round-trips to the server for invalid moves, thus making the game a lot more responsive.

```js
PG.move(
    moveObject,         // any move details can be passed here
    validateFunction    // function to validate the move
);
```

#### Show the platform menu

The game must include a visual component which allows the user to have access to the platform menu. In order to show the menu this component must call the function `PG.showMenu`.

```js
PG.showMenu();
```

---

What's next? Go to [Server rules](server-rules.html) to find out how to do your game validations on the server.
