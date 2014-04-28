---
layout: default
title: Definitions
description: Read through the list of definitions to understand terms used throughout the documentation
---

Term | Definition
--- | ---
Game | A game is composed of a client component and a server component. The client component must communicate with the platform using the SDK (API), and the server component should follow the server-side rules (SPI) documentation.
Match | After a player finds another player to play against in a certain game, the two players form a match, which will contain several phases. A match can be between two human players or between a player and a bot.
Move | Represents the player's decision how to play in the context of the game. The move contains information such as which player made the move and on which position on the board.
Message | There are two types of game messages. A player message is a message sent directly to the other player(s) in the match and is not processed by the server. A server message is a message sent by the game to the server, it's very similar to the evaluation of the moves, but skips the validation phase.
Player | A new player is generated for each match and contains data, such as a unique identifier (to distinguish the player from its opponent) and general information from the player's user profile in the platform.
Matchmaking | The phase between the time the user presses the play button and the match prepare phase. During the matchmaking phase the player is waiting to find an opponent to make a match.
Configuration phase / Game lobby | The game may need to exchange messages between the clients to agree certain parameters, before it starts sending moves. This is useful to avoid move timeouts.
Game state | From the server perspective a game state is the state of the game at a given point in time. It can be thought of as a snapshot of the game containing information about: the board, the players, nextMoveId and nextPlayerId.
Game phase | From the client perspective a game phase is a phase from the game's life-cycle (e.g. game lobby, match prepare, match start or match end).
Platform menu | A menu managed by the platform that ontains the game's options during a match.
Message / move evaluation | Means that a message or a move is processed by the server.
Move validation | Verifies if a move is valid according to the game's server-side rules.
