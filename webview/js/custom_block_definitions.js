Blockly.Blocks.logic = {};
Blockly.Constants.Logic = {};
Blockly.defineBlocksWithJsonArray([

  // Custom Block Category:  Actions
  {
    type: "actions_pressed_space",
    message0: "press spacebar",
    // Special case action block outputs Boolean
    output: "Boolean",
    colour: "0",
    tooltip: "Spacebar is pressed.",
    extensions: ["parent_tooltip_when_inline"]
  },
  {
    type: "actions_pressed_e",
    message0: "press \"E\"",
    output: "ActionBoolean",
    colour: "0",
    tooltip: "Enter is pressed.",
    extensions: ["parent_tooltip_when_inline"]
  },
  {
    type: "actions_player_jump",
    message0: "player jump",
    previousStatement: null,
    nextStatement: null,
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
    type: "actions_near_gem",
    message0: "near gem",
    output: "ActionBoolean",
    colour: "0",
    tooltip: "Player is within interactable area for gem.",
    extensions: ["parent_tooltip_when_inline"]
  },
  {
    type: "actions_on_ground",
    message0: "on ground",
    output: "ActionBoolean",
    colour: "0",
    tooltip: "Player is on the ground.",
    extensions: ["parent_tooltip_when_inline"]
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
  },
  {
    type: "logic_action_and",
    message0: "%1 %2 %3",
    args0: [
      {
        type: "input_value",
        name: "A",
        check: "ActionBoolean"
      },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_LOGIC_OPERATION_AND}", "AND"]
        ]
      },
      {
        type: "input_value",
        name: "B",
        check: "ActionBoolean"
      }
    ],
    output: "Boolean",
    inputsInline: true,
    tooltip: "When two actions are simultaneously occuring the statement is true.",
    style: "logic_blocks"
  },

]);