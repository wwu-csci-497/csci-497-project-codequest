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
Blockly.JavaScript.logic_pressedSpace = function(a) {
    return ["true", Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript.logic_playerJump = function(a) {
    return "player_jump = true;";
};