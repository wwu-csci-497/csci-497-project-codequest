# CodeQuest | https://3dot.io/csci497r/

Web app videogame to help beginners learn basic coding fundamentals.

## Mission Statement
We want to create a game that teaches basic coding concepts and logic to kids. To do this, we do not want the kids to write code, instead, we want them to solve Google Blockly puzzles that we create to progress them through the game. This will provide kids who's typing skills tend to be elementary or non-existant to still learn programming. 

## Teaching Strategy
Our teaching strategy is tailored to teaching Google Blockly and coding concepts at the same time. We want to focus on repetition of coding cocepts i.e. setting variables, creating strings, comparing numbers, etc., but not too repetitive as to take away from the immersion of the game. This will be a tough line to walk, but will get stronger with testing.

## Overview
### Game Features
- Techology: Unity + Blockly
- POV: Side-scrolling platformer
- Character Artwork: Pixel
- Animation: Flipbook
- Music: 
- Controls: Keyboard + Mouse

### Art Assets
- Temple
- Temple Door 
- Temple Props (Torches, Chest, Key)
- Indoor temple background

### Concepts Taught
- Variables
- Booleans
- Condition Statements
- Loops

## Level Descriptions (New Concept Introductions)
#### Tutorial - Outdoors: Jungle
- Setting Pre-made Variables
- Setting Strings
- Setting Integers
#### Level 1 - Temple:
- Setting Booleans
#### Level 2 - Temple:
- Creating Variables
#### Level 3 - Temple:
- Number Comparisons

## Data Collection
- Attempt to get age of user (too easy to fake if we ask -- maybe register accounts? <- then we could add saving states of game?)
- Store data of user by session/account
- Get region of user by IP (state/province - country)
- Store number of problem successes/failures per puzzle per user

---
### User Account Table
#
| id | username | creationDate | birthday | iso3166_2 | logins |
| --- | --- | --- | --- | --- | --- |
| 1 | username1234 | 2020-02-12 | 2010-09-08 | US-WA | 23 |

#### Use Case:
1. Register Account -> Create table entry (**username** = *username*, **creationDate** = *[current date]*, **birthday** = *[as entered]*, **iso3166_2** = *[translated by IP]*, **logins** = *0*)\
  1.1 Login -> Update (**logins** += *1*)

### Puzzle 0000 Data
#
| id | username | attempt | failures | success |
| --- | --- | --- | --- | --- |
| 1 | username1234 | 1 | 3 | true |
| 2 | username1234 | 2 | 0 | true |

#### Use Case:
1. Puzzle open
2. Successfully solves puzzle -> Create table entry (**attempt** = *#*, **failures** = *0*, **success** = *true*)\
  2.1 1st Fail -> Create table entry (**attempt** = *#*, **failures** = *1*, **success** = *false*)\
  2.2 2nd+ Fail -> Update (**failures** += *1*)\
  2.3 Successfully solves puzzle -> Update (**success** = *true*)


## Unity -> Blockly Communication Standards
### Standard Response From REQUEST
##### [HTTP Status Codes](https://restfulapi.net/http-status-codes/)
```javascript
setId(id);
function = {
  name: 'unityResponse',
  params: {
    statusCode: 'int: Standard Restful API Status Code',
    functionName: 'string: Name of the function this is a response from',
    errorCode: 'int: Error code if there is an error | if (statusCode is 4xx or 5xx)',
    errorMessage: 'string: Error message if there is an error | if (statusCode is 4xx or 5xx)'
  },
  description: 'The standard response after Blockly sends a message to the BlocklyManager Object'
}
```
### Load Blockly Problem
```javascript
function = {
  name: 'setId',
  params: {
    id: 'int: The problem ID'
  },
  description: 'Sets and loads the problem ID, then shows Blockly'
}
```


## Blockly -> Unity Communication Standards
### General
```javascript
unityInstance.SendMessage('BlocklyManager', 'BlocklyReturn', JSON.stringify(body));
body = {
  method: 'GET | POST',
  ['other fields stated in subsections']
}
```
### Cancel + Submit Buttons
```javascript
body = {
  method: 'POST',
  functionName: 'blocklyCancel | blocklySubmit',
  problemId: 'int: The problem id'
}
```

