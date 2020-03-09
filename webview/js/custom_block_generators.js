var genDict = {
    // Actions
    actions_move_left: "move_left_count = ",
    actions_move_right: "move_right_count = ",
    actions_move_down: "move_down_count = ",
    actions_move_up: "move_up_count = ",
    actions_pressed_e: ["true", Blockly.JavaScript.ORDER_ATOMIC],
    actions_pressed_space: ["true", Blockly.JavaScript.ORDER_ATOMIC],
    actions_near_gem: ["true", Blockly.JavaScript.ORDER_ATOMIC],
    actions_space_available: ["true", Blockly.JavaScript.ORDER_ATOMIC],
    actions_player_jump: "player_jump = true;",
    actions_player_double_jump: "player_double_jump = true;", 
    actions_collect_gem: "collect_gem = true;",

    // Attributes
    attributes_color: Blockly.JavaScript.attributes_color,

    // Logic
    logic_when_do: Blockly.JavaScript.logic_when_do,
    logic_action_and: Blockly.JavaScript.logic_action_and,

    // Color
    colour_flame: Blockly.JavaScript.colour_flame,

    // Object
    objects_flame: "flame_colour = ",
    objects_pedestal1: "1 =",
    objects_pedestal2: "2 =",
    objects_pedestal3: "3 =",
    objects_pedestal4: "4 =",
    objects_pedestal5: "5 =",
    objects_gem_blue: "blue gem",
    objects_gem_red: "red gem",
    objects_gem_gold: "gold gem",
    objects_gem_green: "green gem",
    objects_gem_white: "white gem",
    objects_lever4: "bottom right "
};

var genDict2 = {
    "player_double_jump=true;": "actions_player_double_jump",
    "player_jump=true;": "actions_player_jump",
    "collect_gem=true;": "actions_collect_gem",
    "if": "logic_when_do",
    "false&&false": "logic_action_and",
    "flame_colour=": "objects_flame",
    "true": "something_good",
    "false": "something_bad",
    "true&&false": "something_better",
    "false&&true": "something_better",
    "true&&true": "something_good"
};

// Generator Category:  Actions
Blockly.JavaScript.actions_pressed_e = function(a) {
    return genDict["actions_pressed_e"];
};
Blockly.JavaScript.actions_pressed_space = function(a) {
    return genDict["actions_pressed_space"];
};
Blockly.JavaScript.actions_near_gem = function(a) {
    return genDict["actions_near_gem"];
};
Blockly.JavaScript.actions_space_available = function(a) {
    return genDict["actions_space_available"];
};
Blockly.JavaScript.actions_player_jump = function(a) {
    return genDict["actions_player_jump"];
};
Blockly.JavaScript.actions_collect_gem = function(a) {
    return genDict["actions_collect_gem"];
};
Blockly.JavaScript.actions_player_double_jump = function(a) {
    return genDict["actions_player_double_jump"];
};
Blockly.JavaScript.actions_move_down = function(a) {
    return genDict["actions_move_down"];
};
Blockly.JavaScript.actions_move_up = function(a) {
    return genDict["actions_move_up"];
};
Blockly.JavaScript.actions_move_left = function(a) {
    return genDict["actions_move_left"];
};
Blockly.JavaScript.actions_move_right = function(a) {
    return genDict["actions_move_right"];
};

// Generator Category:  Logic
Blockly.JavaScript.logic_when_do = function(a) {
    var b = 0,
        c = "";
    Blockly.JavaScript.STATEMENT_PREFIX && (c += Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_PREFIX, a));
    do {
        var d = Blockly.JavaScript.valueToCode(a, "WHEN" + b, Blockly.JavaScript.ORDER_NONE) || "false";
        var e = Blockly.JavaScript.statementToCode(a, "DO" + b);
        Blockly.JavaScript.STATEMENT_SUFFIX && (e = Blockly.JavaScript.prefixLines(Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, a), Blockly.JavaScript.INDENT) + e);
        c += (0 < b ? " else " : "") + "if (" +
            d + ") {\n" + e + "}";
        ++b
    } while (a.getInput("WHEN" + b));
    if (a.getInput("ELSE") || Blockly.JavaScript.STATEMENT_SUFFIX) e = Blockly.JavaScript.statementToCode(a, "ELSE"), Blockly.JavaScript.STATEMENT_SUFFIX && (e = Blockly.JavaScript.prefixLines(Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, a), Blockly.JavaScript.INDENT) + e), c += " else {\n" + e + "}";
    return c + "\n";
};
Blockly.JavaScript.logic_action_and = function(a) {
        
    var argument0 = Blockly.JavaScript.valueToCode(a, "A", Blockly.JavaScript.ORDER_LOGICAL_AND);
    var argument1 = Blockly.JavaScript.valueToCode(a, "B", Blockly.JavaScript.ORDER_LOGICAL_AND);
    if (!argument0 && !argument1) {
        // If there are no arguments, then the return value is false.
        argument0 = "false";
        argument1 = "false";
      } else {
        var defaultArgument = "false";
        if (!argument0) {
          argument0 = defaultArgument;
        }
        if (!argument1) {
          argument1 = defaultArgument;
        }
      }
      var code = argument0 + " " + "&&" + " " + argument1;
      return [code,  Blockly.JavaScript.ORDER_LOGICAL_AND];
};

// Generator Cateogry:  Attributes
Blockly.JavaScript.attributes_color = function(a) {
    return a.getFieldValue('COLOUR');
};

// Generator Category:  Object
Blockly.JavaScript.objects_flame = function(a) {
    return genDict["objects_flame"];
}
Blockly.JavaScript.objects_pedestal1 = function(a) {
    return genDict["objects_pedestal1"];
}
Blockly.JavaScript.objects_pedestal2 = function(a) {
    return genDict["objects_pedestal2"];
}
Blockly.JavaScript.objects_pedestal3 = function(a) {
    return genDict["objects_pedestal3"];
}
Blockly.JavaScript.objects_pedestal4 = function(a) {
    return genDict["objects_pedestal4"];
}
Blockly.JavaScript.objects_pedestal5 = function(a) {
    return genDict["objects_pedestal5"];
}
Blockly.JavaScript.objects_gem_blue = function(a) {
    return genDict["objects_gem_blue"];
}
Blockly.JavaScript.objects_gem_gold = function(a) {
    return genDict["objects_gem_gold"];
}
Blockly.JavaScript.objects_gem_red = function(a) {
    return genDict["objects_gem_red"];
}
Blockly.JavaScript.objects_gem_green = function(a) {
    return genDict["objects_gem_green"];
}
Blockly.JavaScript.objects_gem_white = function(a) {
    return genDict["objects_gem_white"];
}

