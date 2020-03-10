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
    colour: "120",
    tooltip: "Enter is pressed.",
    extensions: ["parent_tooltip_when_inline"]
  },
  {
    type: "actions_player_jump",
    message0: "character jump",
    previousStatement: null,
    nextStatement: null,
    check: "Logic",
    colour: "0",
    tooltip: "Player jumps.",
    extensions: ["parent_tooltip_when_inline"]
  },
  {
    type: "actions_player_double_jump",
    message0: "mid-air boost",
    previousStatement: null,
    nextStatement: null,
    colour: "0",
    tooltip: "Player performs double jump.",
    extensions: ["parent_tooltip_when_inline"]
  },
  {
    type: "actions_is_jumping",
    message0: "character is jumping",
    output: "ActionBoolean",
    colour: "120",
    tooltip: "Play has made character jump.",
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
    message0: "walk into gem",
    output: "ActionBoolean",
    colour: "120",
    tooltip: "Player is within interactable area for gem.",
    extensions: ["parent_tooltip_when_inline"]
  },
  {
    type: "actions_space_available",
    message0: "space in inventory",
    output: "ActionBoolean",
    colour: "120",
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
  {
    type: "actions_move_left",
    message0: "Move Left %1",
    previousStatement: null,
    args0: [
      {
        type: "input_value",
        name: "NAME"
      }
    ],
    colour: "0"
  },
  {
    type: "actions_move_right",
    message0: "Move Right %1",
    previousStatement: null,
    args0: [
      {
        type: "input_value",
        name: "NAME"
      }
    ],
    colour: "0"
  },
  {
    type: "actions_move_down",
    message0: "Move Down %1",
    args0: [
      {
        type: "input_value",
        name: "NAME"
      }
    ],
    colour: "0"
  },
  {
    type: "actions_move_up",
    message0: "Move Up %1",
    args0: [
      {
        type: "input_value",
        name: "NAME"
      }
    ],
    colour: "0"
  },
  {
    type: "actions_in_green",
    message0: "beetle in green zone",
    output: "Boolean",
    colour: "0",
    tooltip: "The beetle is in the green zone.",
    extensions: ["parent_tooltip_when_inline"]
  },
  {
    type: "actions_in_blue",
    message0: "beetle in blue zone",
    output: "Boolean",
    colour: "0",
    tooltip: "The beetle is in the blue zone.",
    extensions: ["parent_tooltip_when_inline"]
  },
  {
    type: "actions_in_purple",
    message0: "beetle in purple zone",
    output: "Boolean",
    colour: "0",
    tooltip: "The beetle is in the purple zone.",
    extensions: ["parent_tooltip_when_inline"]
  },

  // Custom Block Category:  Attributes
  {
    type: "attributes_color",
    message0: "has color: %1",
    output: "AttributeString",
    args0: [
      {
        type: "field_colour",
        "name": "COLOUR",
        colour: "#DD540D"
      }
    ],
    colour: "65",
    extensions: ["set_flame_colours_extension"]
  },
  {
    type: "attributes_up",
    message0: "up",
    output: "AttributeString",
    colour: "65"
  },
  {
    type: "attributes_down",
    message0: "down",
    output: "AttributeString",
    colour: "65"
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
    style: "logic_blocks",
    tooltip: "When a value is true, then do something."
  },
  {
    type: "logic_action_and",
    message0: "%1 %2 %3",
    args0: [
      {
        type: "input_value",
        name: "A"
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
        name: "B"
      }
    ],
    output: "Boolean",
    inputsInline: true,
    tooltip: "When two actions are simultaneously occuring the statement is true.",
    style: "logic_blocks"
  },

  // Custom Block Category:  Objects
  {
    type: "objects_flame",
    message0: "Flame %1",
    args0: [{
      type: "input_value",
      "name": "FLAME_COLOUR0",
      check: "AttributeString"
    }],
    colour: "25",
    tooltip: "The flame."
  },
  {
    type: "objects_lever1",
    message0: "Lever \#1 %1",
    args0: [{
      type: "input_value",
      "name": "ORIENTATION",
      check: "AttributeString"
    }],
    colour: "25",
    tooltip: "Lever one."
  },
  {
    type: "objects_lever2",
    message0: "Lever \#2 %1",
    args0: [{
      type: "input_value",
      "name": "ORIENTATION",
      check: "AttributeString"
    }],
    colour: "25",
    tooltip: "Lever two."
  },
  {
    type: "objects_lever4",
    message0: "Lever \#4 %1",
    args0: [{
      type: "input_value",
      "name": "ORIENTATION",
      check: "AttributeString"
    }],
    colour: "25",
    tooltip: "Lever four."
  },
  {
    type: "objects_pedestal1",
    message0: "Pedestal 1 %1",
    args0: [
      {
        type: "input_value",
        name: "GEM_INPUT",
        check: "AttributeString"
      }
    ],
    colour: "355",
    tooltip: "Pedestal number n"
  },
  {
    type: "objects_pedestal2",
    message0: "Pedestal 2 %1",
    args0: [
      {
        type: "input_value",
        name: "GEM_INPUT",
        check: "AttributeString"
      }
    ],
    colour: "355",
    tooltip: "Pedestal number n"
  },
  {
    type: "objects_pedestal3",
    message0: "Pedestal 3 %1",
    args0: [
      {
        type: "input_value",
        name: "GEM_INPUT",
        check: "AttributeString"
      }
    ],
    colour: "355",
    tooltip: "Pedestal number n"
  },
  {
    type: "objects_pedestal4",
    message0: "Pedestal 4 %1",
    args0: [
      {
        type: "input_value",
        name: "GEM_INPUT",
        check: "AttributeString"
      }
    ],
    colour: "355",
    tooltip: "Pedestal number n"
  },
  {
    type: "objects_pedestal5",
    message0: "Pedestal 5 %1",
    args0: [
      {
        type: "input_value",
        name: "GEM_INPUT",
        check: "AttributeString"
      }
    ],
    colour: "355",
    tooltip: "Pedestal number n"
  },
  {
    type: "objects_gem_blue",
    message0: "blue gem",
    output: "AttributeString",
    colour: "65"
  },
  {
    type: "objects_gem_gold",
    message0: "gold gem",
    output: "AttributeString",
    colour: "65"
  },
  {
    type: "objects_gem_purple",
    message0: "purple gem",
    output: "AttributeString",
    colour: "65"
  },
  {
    type: "objects_gem_green",
    message0: "green gem",
    output: "AttributeString",
    colour: "65"
  },
  {
    type: "objects_gem_orange",
    message0: "orange gem",
    output: "AttributeString",
    colour: "65"
  }


]);


// Custom Extensions
Blockly.Extensions.register('set_flame_colours_extension',
  function() {
    var field = this.getField("COLOUR");
    field.setColours(
      ['#DD540D', '#FFFFFF', '#37FF22',
        '#FF0DA9', '#0Df3FF', '#002CAD'],
      ['Orange', 'White', 'Green',
        'Pink', 'Cyan', 'Blue']);
    field.setColumns(3);
  }
);