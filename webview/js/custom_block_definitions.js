Blockly.Blocks.logic = {};
Blockly.Constants.Logic = {};
Blockly.defineBlocksWithJsonArray([

  // Custom Block Category:  Actions
  {
    type: "actions_pressed_space",
    message0: "press spacebar",
    output: "Boolean",
    colour: "0",
    tooltip: "Spacebar is pressed.",
    extensions: ["parent_tooltip_when_inline"]
  },
  {
    type: "actions_pressed_enter",
    message0: "press enter",
    output: "Boolean",
    colour: "0",
    tooltip: "Enter is pressed.",
    extensions: ["parent_tooltip_when_inline"]
  },
  {
    type: "actions_player_jump",
    message0: "player jump",
    previousStatement: null,
    colour: "0",
    tooltip: "Player jumps.",
    extensions: ["parent_tooltip_when_inline"]
  },
  {
    type: "actions_collect_gem",
    message0: "collect gem",
    previousStatement: null,
    colour: "0",
    tooltip: "Gem is added to player's inventory.",
    extensions: ["parent_tooltip_when_inline"]
  },
  {
    type: "actions_near_and_enter",
    message0: "near gem %1 press enter",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [["%{BKY_LOGIC_OPERATION_AND}", "AND"]]
      }
    ],
    output: "Boolean",
    colour: "0",
    tooltip: "Player is within interactable area for gem and presses enter."
  },

  // Custom Block Category:  Logic
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
  }

]);