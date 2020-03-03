Blockly.Blocks.logic = {};
Blockly.Constants.Logic = {};
Blockly.defineBlocksWithJsonArray([
  {
    type: "logic_when_do",
    message0: "when %1",
    args0: [{
        type: "input_value",
        name: "WHEN0",
        check: "Boolean"
    }],
    message1: "do %1",
    args1: [{
        type: "input_statement",
        name: "DO0"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "logic_blocks",
    tooltip: "When a value is true, then do something."
  },
  {
    type: "logic_pressedSpace",
    message0: "press spacebar",
    output: "Boolean",
    colour: "0",
    tooltip: "Spacebar is pressed.",
    extensions: ["parent_tooltip_when_inline"]
  },
  {
    type: "logic_playerJump",
    message0: "player jump",
    previousStatement: null,
    colour: "240",
    tooltip: "Player jumps.",
    extensions: ["parent_tooltip_when_inline"]
  }
]);