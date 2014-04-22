---
layout: default
title: SDK for JavaScript
description: Build HTML5 games for the Phune Gaming platform
---

---

<div data-magellan-expedition="fixed" data-options="destination_threshold: 65;">
    <ul class="sub-nav">
        <li data-magellan-arrival="install"><a href="#install">Install</a></li>
        <li data-magellan-arrival="getting-started"><a href="#getting-started">Getting Started</a></li>
        <li data-magellan-arrival="public-api"><a href="#public-api">Public API</a></li>
    </ul>
</div>

---


Before you start developing your game you need to install the JavaScript SDK.  

<a name="install"></a>
<h3 data-magellan-destination="install">Install</h3>

Download [the Phune Gaming SDK directly from GitHub](https://github.com/phune-gaming/pg-sdk-js/releases) and unzip the contents of the `dist` folder into the JavaScript folder of your game (e.g. `js` folder).

Alternatively, if you use [Bower](http://bower.io/), you can install the Phune Gaming JavaScript SDK from the command-line by running the command below from the root of your game folder:

```
bower install phune-gaming-sdk
```

Add the Phune Gaming SDK to your `index.html` file as below.

For direct download installation:

```html
<script src="js/PG.min.js"></script>
```
For Bower installation:

```html
<script src="bower_components/phune-gaming-sdk/dist/PG.min.js"></script>
```

You are now ready to start your game implementation. Please proceed to the [Getting Started](#getting-started) sub-section to find which callbacks your game needs to implement to process the messages sent by the platform or to the [Public API](#public-api) sub-section to find out which methods you have available to send the game messages (e.g. moves) to the server.

<div class="panel callout radius">
{% markdown %}
The [implementation of the game Tic-Tac-Toe](https://github.com/phune-gaming/pg-tic-tac-toe) is freely available on GitHub.
{% endmarkdown %}
</div>

---

<a name="getting-started"></a>
<h3 data-magellan-destination="getting-started">Getting Started</h3>

This section details the callbacks you must implement in your game to process the messages sent by the server.

#### Init

Initialize the JavaScript SDK by calling `PG.init` and defining the callback functions which will handle all matchmaking phases and the game events sent to your game by the platform.

##### Usage

```js
PG.init(config);
```

##### Parameters

<table>
    <thead>
        <tr>
            <th>Param</th>
            <th>Type</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
{% markdown %}
config
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`Object`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
Object defining the callback functions. The object must provide the following properties:

* **onMatchPrepare** – `{function(player, opponent, deviceType)}` – MISSING_DESCRIPTION.
* **onGameLobby** – `{function(allowedTime)}` – MISSING_DESCRIPTION.
* **onMatchStart** – `{function(playerIdToPlayNext, timeToPlay)}` – MISSING_DESCRIPTION.
* **onMoveValid** – `{function(playerIdWhoSentTheMove, playerIdToPlayNext, moveDetails, moveResults, gameResults)}` – MISSING_DESCRIPTION.
* **onMoveInvalid** – `{function(playerIdWhoSentTheMove, playerIdToPlayNext)}` – MISSING_DESCRIPTION.
* **onServerMessage** – `{function(playerIdWhoSentTheMessage, messageDetails, messageResults)}` – MISSING_DESCRIPTION.
* **onPlayerMessage** – `{function(messageDetails)}` – MISSING_DESCRIPTION.
* **onMatchEnd** – `{function(gameResults)}` – MISSING_DESCRIPTION.
* **onKeyPress** – `{function(key)}` – MISSING_DESCRIPTION.
{% endmarkdown %}
            </td>
        </tr>
    </tbody>
</table>

The detailed description for each callback is presented below.

---

#### Match prepare

During the match preparation phase, the game should build the user interface and get ready to start playing. It is provided with the details of the player, the opponent and the type of device on which the game is running (`mobile` or `tv`).

##### Callback function

```js
onMatchPrepare(player, opponent, deviceType);
```

##### Parameters

<table>
    <thead>
        <tr>
            <th>Param</th>
            <th>Type</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
{% markdown %}
player
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`Object`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
The current player details.
{% endmarkdown %}
            </td>
        </tr>
        <tr>
            <td>
{% markdown %}
opponent
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`Object`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
The opponent details.
{% endmarkdown %}
            </td>
        </tr>
        <tr>
            <td>
{% markdown %}
deviceType
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`string`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
Indicates the type of the device where the game is running. Possible values are `MOBILE` and `TV`.
{% endmarkdown %}
            </td>
        </tr>
    </tbody>
</table>

---

#### Game lobby

If the game needs to configure the match details before it is started, the `onGameLobby` callback function will be called to allow it to do so. It is provided with the time allowed for the player to configure the game and start the match.

##### Callback function

```js
onGameLobby(allowedTime);
```

##### Parameters

<table>
    <thead>
        <tr>
            <th>Param</th>
            <th>Type</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
{% markdown %}
allowedTime
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`number`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
Time allowed for the player to configure the game and start the match.
{% endmarkdown %}
            </td>
        </tr>
    </tbody>
</table>

---

#### Match start

When the match starts, the game will be informed of which player should play first and the time allowed for each player to make a move.

##### Callback function

```js
onMatchStart(playerIdToPlayNext, timeToPlay);
```

##### Parameters

<table>
    <thead>
        <tr>
            <th>Param</th>
            <th>Type</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
{% markdown %}
playerIdToPlayNext
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`boolean`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
The identifier of the player to whom the next move belongs.
{% endmarkdown %}
            </td>
        </tr>
        <tr>
            <td>
{% markdown %}
timeToPlay
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`number`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
Time allowed for the player to make a move.
{% endmarkdown %}
            </td>
        </tr>
    </tbody>
</table>

---

#### Moves handling and validation

If a move is considered valid by the server-side rules, the server will respond with a confirmation message that will be handled by the `onMoveValid` callback function. Moves performed by the opponent will also be handled by this callback function. If a move ends the game, the `gameResults` parameter will indicate how the game ended.

##### Callback function

```js
onMoveValid(playerIdWhoSentTheMove, playerIdToPlayNext, moveDetails,
    moveResults, [gameResult]);
```

##### Parameters

<table>
    <thead>
        <tr>
            <th>Param</th>
            <th>Type</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
{% markdown %}
playerIdWhoSentTheMove
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`number`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
The identifier of the player that sent the move.
{% endmarkdown %}
            </td>
        </tr>
        <tr>
            <td>
{% markdown %}
playerIdToPlayNext
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`number`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
The identifier of the player to whom the next move belongs.
{% endmarkdown %}
            </td>
        </tr>
        <tr>
            <td>
{% markdown %}
moveDetails
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`Object`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
The move details.
{% endmarkdown %}
            </td>
        </tr>
        <tr>
            <td>
{% markdown %}
moveResults
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`Object`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
The results of the move validation.
{% endmarkdown %}
            </td>
        </tr>
        <tr>
            <td>
{% markdown %}
gameResult _(optional)_
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`string`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
If the move ended the game, this parameter returns the results. Possible values are `won`, `lost` or `draw`.
{% endmarkdown %}
            </td>
        </tr>
    </tbody>
</table>

If a move does not pass the server-side rules validation, the game will be notified by the `onMoveInvalid` callback function.

##### Callback function

```js
onMoveInvalid(playerIdWhoSentTheMove, playerIdToPlayNext);
```

##### Parameters

<table>
    <thead>
        <tr>
            <th>Param</th>
            <th>Type</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
{% markdown %}
playerIdWhoSentTheMove
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`number`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
The identifier of the player that sent the move.
{% endmarkdown %}
            </td>
        </tr>
        <tr>
            <td>
{% markdown %}
playerIdToPlayNext
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`number`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
The identifier of the player to whom the next move belongs.
{% endmarkdown %}
            </td>
        </tr>
    </tbody>
</table>

---

#### Handle messages from the server

Responses to messages sent to the server will be processed by the `onServerMessage` callback function.

##### Callback function

```js
onServerMessage(playerIdWhoSentTheMessage, messageDetails, messageResults);
```

##### Parameters

<table>
    <thead>
        <tr>
            <th>Param</th>
            <th>Type</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
{% markdown %}
playerIdWhoSentTheMessage
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`number`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
The identifier of the player that sent the message.
{% endmarkdown %}
            </td>
        </tr>
        <tr>
            <td>
{% markdown %}
messageDetails
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`Object`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
Message specific to a game and unknown to the platform. The developer is advised to have multiple message types with different bodies in order to achieve different goals.
{% endmarkdown %}
            </td>
        </tr>
        <tr>
            <td>
{% markdown %}
messageResults
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`Object`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
The result returned by the server-side rules.
{% endmarkdown %}
            </td>
        </tr>
    </tbody>
</table>

---

#### Handle messages from an opponent

Messages sent by the opponent will be processed by the `onPlayerMessage` callback function.

##### Callback function

```js
onPlayerMessage(messageDetails);
```

##### Parameters

<table>
    <thead>
        <tr>
            <th>Param</th>
            <th>Type</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
{% markdown %}
messageDetails
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`Object`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
Message specific to a game and unknown to the platform. The developer is advised to have multiple message types with different bodies in order to achieve different goals.
{% endmarkdown %}
            </td>
        </tr>
    </tbody>
</table>

---

#### Match end

When the game is over, the `onMatchEnd` callback function is called with the game result.

##### Callback function

```js
onMatchEnd(gameResult);
```

##### Parameters

<table>
    <thead>
        <tr>
            <th>Param</th>
            <th>Type</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
{% markdown %}
gameResult
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`string`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
The game results. Possible values are `won`, `lost` or `draw`.
{% endmarkdown %}
            </td>
        </tr>
    </tbody>
</table>

---

#### TV remote control input handling

On TV environment, the `onKeyPress` callback handles the remote control keys that were pressed.'enter'.

##### Callback function

```js
onKeyPress(key);
```

##### Parameters

<table>
    <thead>
        <tr>
            <th>Param</th>
            <th>Type</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
{% markdown %}
key
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`string`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
The key that was pressed. Possible values are `left`, `right`, `up`, `down` or `enter`.
{% endmarkdown %}
            </td>
        </tr>
    </tbody>
</table>

---

<a name="public-api"></a>
<h3 data-magellan-destination="public-api">Public API</h3>

The Phune Gaming SDK provides an [API](http://phune-gaming.github.io/pg-sdk-js/) which allows the game to send messages to the platform and to the server.

#### Match start

During the match preparation phase (`onMatchPrepare` callback) the game must inform the platform when it is ready to be shown to the user by calling `PG.ready`.

##### Usage

```js
PG.ready();
```

---

#### Game lobby

If the game is configured on the server to require a configuration phase, the `onGameLobby` callback will be called to allow the game to send the required configuration back to the server by calling `PG.serverMessage`. When the match is ready to start, the game must inform the platform by calling `PG.exitGameLobby`.

##### Usage

```js
PG.exitGameLobby();
```

---

#### Perform a move

If it is the current player's turn, the game should allow the player to make a move and then send it to the platform. Optionally, you can specify a validate function that accepts the move object as a parameter and validates it before sending it to the server. This prevents additional round-trips to the server for invalid moves, thus making the game a lot more responsive.

##### Usage

```js
PG.move(moveDetails, [validate]);
```

##### Parameters

<table>
    <thead>
        <tr>
            <th>Param</th>
            <th>Type</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
{% markdown %}
moveDetails
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`Object`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
The move details.
{% endmarkdown %}
            </td>
        </tr>
        <tr>
            <td>
{% markdown %}
validate _(optional)_
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`function(moveDetails)`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
Validates the move before sending it to server.
{% endmarkdown %}
            </td>
        </tr>
    </tbody>
</table>

##### Returns

<table class="no-border">
    <tbody>
        <tr>
            <td>
{% markdown %}
`boolean`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`true` when the move is valid or when no validation function was provided, otherwise `false`.
{% endmarkdown %}
            </td>
        </tr>
    </tbody>
</table>

---

#### Show the platform menu

The game must include a visual component which allows the user to have access to the platform menu. In order to show the menu this component must call the function `PG.showMenu`.

##### Usage

```js
PG.showMenu();
```

---

#### Send messages to the server

It is possible to send messages to be evaluated by the server-side rules. You can specify if you want the response to be sent to both players or only to you. Additionally, you can indicate if you want the messages to be processed by the server-side rules in order of arrival or in parallel.

##### Usage

```js
PG.serverMessage(messageDetails, isAnswerPublic, [serializeRequest]);
```

##### Parameters

<table>
    <thead>
        <tr>
            <th>Param</th>
            <th>Type</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
{% markdown %}
messageDetails
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`Object`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
The content of the message to be sent.
{% endmarkdown %}
            </td>
        </tr>
        <tr>
            <td>
{% markdown %}
isAnswerPublic
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`boolean`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
Whether the reply from the server's rules should be sent to all players or not.
{% endmarkdown %}
            </td>
        </tr>
        <tr>
            <td>
{% markdown %}
serializeRequest _(optional)_
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`boolean`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
Whether the messages should be processed in order of arrival or can be executed in parallel.
{% endmarkdown %}
            </td>
        </tr>
    </tbody>
</table>

---

#### Send messages to the opponent

If the game requires to send messages to the opponent that should not be evaluated by the server-side rules, it can use this function. Optionally, you can specify if you do not want to allow more than one message to be sent within a specified time in milliseconds. In this case, if the function is called more than once during the specified interval, only the last message will be sent.

##### Usage

```js
PG.playerMessage(messageDetails, [sendTimeIntervalLimit]);
```

##### Parameters

<table>
    <thead>
        <tr>
            <th>Param</th>
            <th>Type</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
{% markdown %}
messageDetails
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`Object`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
The content of the message to be sent.
{% endmarkdown %}
            </td>
        </tr>
        <tr>
            <td>
{% markdown %}
sendTimeIntervalLimit _(optional)_
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
`number`
{% endmarkdown %}
            </td>
            <td>
{% markdown %}
Do not allow sending more than one message within the specified time in milliseconds. If this function is called more than once during this interval only the last message will be sent.
{% endmarkdown %}
            </td>
        </tr>
    </tbody>
</table>

---

What's next? Go to [Server rules](server-rules.html) to find out how to do your game validations on the server.
