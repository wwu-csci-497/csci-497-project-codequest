function generateBlock(name) {
  console.log('generateBlock():', name);
  if (name == 'controls_if' || name == 'controls_repeat_ext') {
    // if (document.getElementById('cat_control') == undefined)
    //   createCategory('Control');
    var block = document.createElement('block');
    block.setAttribute('type', name);
    console.log(block);
    // document.getElementById('cat_control').appendChild(block);
    document.getElementById('toolbox').appendChild(block);
  }
  else if (name == 'string_length') {
    Blockly.Blocks[name] = {
      init: function() {
        this.jsonInit({
          "message0": 'length of %1',
          "args0": [
            {
              "type": "input_value",
              "name": "VALUE",
              "check": "String"
            }
          ],
          "output": "Number",
          "colour": 160,
          "tooltip": "Returns number of letters in the provided text.",
          "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
        });
      }
    };

    Blockly.JavaScript[name] = function(block) {
      var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
          Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
      return [argument0 + '.length', Blockly.JavaScript.ORDER_MEMBER];
    };

    // if (document.getElementById('cat_other') == undefined)
    //   createCategory('Other');
    var block = document.createElement('block');
    block.setAttribute('type', name);
    console.log(block);
    // document.getElementById('cat_other').appendChild(block);
    document.getElementById('toolbox').appendChild(block);
  }
  else {
    // if (document.getElementById('cat_other') == undefined)
    //   createCategory('Other');
    var block = document.createElement('block');
    block.setAttribute('type', name);
    console.log(block);
    // document.getElementById('cat_other').appendChild(block);
    document.getElementById('toolbox').appendChild(block);
  }
}

function createCategory(name) {
  var category = document.createElement('category');
  category.setAttribute('id', 'cat_' + name.toLowerCase());
  category.setAttribute('name', name);
  toolbox.appendChild(category);
}
