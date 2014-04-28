---
layout: default
title: Server-side rules in JavaScript
---

### JavaScriptRules.js

```js
/**
 * Create the game state representation and return it as a string containing: the players information, the id of the
 * next player to play, the id of the next move and any other information relevant to the game. The players attribute
 * is an array containing the players information, where each one is another array containing the player's id in the
 * first position and a boolean indicating if the player is a bot in the second position.
 *
 * @param {array} players array containing the id of the player and if it is a bot or not.
 * @param {number} nextPlayerId The id of the next player to play.
 * @returns {string} The state of the match.
 */
var createStateForNewMatch = function(players, nextPlayerId) {
    // ...
};

/**
 * Move must be validated, and if valid, the necessary changes should be applied to the game state. It must return an
 * object containing: the move result (possible values are 'valid', 'invalid', 'draw' or 'winner'), the content of the
 * move that was evaluated and the new state of the game.
 *
 * @abstract
 * @param {Object} state The state of the match.
 * @param {number} playerId The id of the player that wants to perform this move.
 * @param {number} moveId The id of the move.
 * @param {Object} content The move details.
 * @returns {Object} The move result, content and game state.
 */
var evaluateMove = function(state, playerId, moveId, content) {
    // ...
};

/**
 * Generates a new move for the bot. It must return an object containing the content of the move that was created and
 * the new state of the game.
 *
 * @abstract
 * @param {Object} state The state of the match.
 * @param {number} playerId The id of the bot that will perform this move.
 * @returns {Object} The move content and game state.
 */
var createBotMove = function(state, playerId) {
    // ...
};

/**
 * Messages sent by the game are evaluated by this function which may change the game state. It must return an object
 * containing the message result and the new game state. It can also return null if it does not want a reply to be
 * sent to the game.<br />
 * <strong>Note:</strong> this kind of messages are not validated by the server (e.g. they do not validate players or
 * moves ordering).
 *
 * @abstract
 * @param {Object} state The state of the match.
 * @param {number} playerId The id of the player that sent this message.
 * @param {Object} content The message details.
 * @returns {Object} An object containing the message response and the new game state.
 */
var evaluateGameMessage = function(state, playerId, content) {
    // ...
};

/**
 * Get the id of the next player to play the game and return it.
 *
 * @abstract
 * @param {Object} state The state of the match.
 * @returns {number} The id of the next player to play the game.
 */
var getNextPlayerId = function(state) {
    // ...
};

/**
 * Get the id of the next move and return it.
 *
 * @abstract
 * @param {Object} state The state of the match.
 * @returns {number} The id of the next move.
 */
var getNextMoveId = function(state) {
    // ...
};
```
