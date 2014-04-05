---
layout: default
title: JavaScript SDK
description: Build HTML5 games for the Phune Gaming platform
---

<hr />

<div data-magellan-destination="sdk-js" data-magellan-expedition="fixed" data-options="destination_threshold: 65;">
    <dl class="sub-nav">
        <dt>Jump to:</dt>
        <dd data-magellan-arrival="install"><a href="#install">Install</a></dd>
        <dd data-magellan-arrival="getting-started"><a href="#getting-started">Getting Started</a></dd>
        <dd data-magellan-arrival="public-api"><a href="#public-api">Public API</a></dd>
    </dl>
</div>

<hr />

<a name="install"></a>
<h3 data-magellan-destination="install">Install</h3>

Install the SDK with [Bower](http://bower.io/) from the command-line:

```
bower install phune-gaming-sdk
```

Add Phune Gaming SDK to your `index.html`:

```html
<script src="/bower_components/phune-gaming-sdk/dist/PG.min.js"></script>
```

Alternatively, for those who do not use Bower, you can directly [download the Phune Gaming SDK from GitHub](https://github.com/phune-gaming/pg-sdk-js/releases).

You are now ready to start your game implementation. Please proceed to the <a href="#getting-started">Getting Started</a> sub-section to find which callbacks your game needs to implement to process the messages sent by the platform, and to the <a href="#public-api">Public API</a> sub-section to find out which methods you have available to send the game messages (e.g. moves) to the server.

<hr />

<a name="getting-started"></a>
<h3 data-magellan-destination="getting-started">Getting Started</h3>

Initialize the JavaScript SDK by calling `PG.init` and defining the callback functions which will handle all matchmaking states and the game events sent to your game by the platform:

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

Please find below a detailed description for each callback.

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

When the match starts the game will be informed of which player should start playing and the time allowed for each player to make a move.

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

Responses to messages sent to the server will be processed by the `onServerMatch` callback function.

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

When the game ends, the `onMatchEnd` callback function is called with the end condition. Possible values are 'won', 'lost', and 'draw'.

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

<hr />

<a name="public-api"></a>
<h3 data-magellan-destination="public-api">Public API</h3>

The Phune Gaming SDK provides an [API](http://phune-gaming.github.io/pg-sdk-js/) with the public methods as detailed below.

#### Match start

During the match preparation phase (`onMatchPrepare` callback) the game must inform the platform when it is ready to be shown to the user by calling `PG.ready`.

```js
PG.ready();
```

#### Game lobby

If the game is configured on the server to require a configuration phase, the (`onGameLobby` callback) will be called to allow the game to send the required configuration back to the server by calling `PG.serverMessage`. When finished, it must inform the platform that the match is ready to start by calling `PG.exitGameLobby`.

```js
PG.exitGameLobby();
```

#### Send messages to the server

It is possible to send messages to be evaluated by the server-side rules. You can specify if you want the response to be sent to both players or only to yourself. Additionally you can also indicate if you want the messages to be processed by the server-side rules in order of arrival or in parallel.

```js
PG.serverMessage(
    messageObject,    // any message content can be passed here
    false,            // should the response be sent to both players?
    true              // should the message be processed by the order of arrival?
);
```

#### Send messages to the opponent

If the game requires to send messages to the opponent that should not be evaluated by the server-side rules, it can use this function. Optionally, you can specify if you do not want to allow more than one message to be sent within the specified time in milliseconds. If this is called more than once during this interval only the last message will be sent.

```js
PG.playerMessage(
    messageObject,    // any message content can be passed here
    150               // do not send more than one message during this interval
);
```

#### Perform a move

If it is the current player turn, the game should allow the player to make a move and then send it to the platform. Optionally, you can specify a validate function that accepts the move object as a parameter and validates it before sending it to the server. This prevents additional round-trips to the server for invalid moves, thus making the game a lot more responsive.

```js
PG.move(
    moveObject,         // any move details can be passed here
    validateFunction    // function to validate the move
);
```

#### Show the platform menu

The game must include a visual component allowing a user to call for the platform menu. In order to show the menu that component must call the function `PG.showMenu`.

```js
PG.showMenu();
```

<hr />

What's next? Go to [Server rules](/server-rules.html) to find how to do your game validations on the server.
