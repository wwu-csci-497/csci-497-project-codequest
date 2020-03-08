// Generator Category:  Actions
Blockly.JavaScript.actions_pressed_e = function(a) {
    return ["true", Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript.actions_pressed_space = function(a) {
    return ["true", Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript.actions_near_gem = function(a) {
    return ["true", Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript.actions_player_jump = function(a) {
    return "player_jump = true;\n";
};
Blockly.JavaScript.actions_collect_gem = function(a) {
    return "collect_gem = true;\n";
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
Blockly.JavaScript.logic_collected_gem = function(a) {
    return "gem_0_in_inventory == true;\n";
};

// Generator Cateogry:  Color
Blockly.JavaScript.colour_flame = function(a) {
    return a.getFieldValue('COLOUR');
};

// Generator Category:  Object
Blockly.JavaScript.objects_flame = function(a) {
    return "flame_colour = ";
}