// Creates the XML Toolbar object by given ID denoted in Google Sheets
function generateBlock(id) {
  console.log('generateBlock()', id)
  var block_entry = null;
  for (entry in blockList)
    if (blockList[entry]['id'].trim() == id.trim())
      block_entry = blockList[entry];

  if (block_entry != null) {
    var mutations = block_entry['mutations'].split(';');
    var block = document.createElement('block');
    if (mutations[0] != '') {
      block.setAttribute('type', id.split('-')[0])
      for (var i = 0; i < mutations.length; i++) {
        var attribute = mutations[i].split('=');
        var mutation = document.createElement('mutation');
        mutation.setAttribute(attribute[0], attribute[1].replace(/\"/g, ''));
        block.appendChild(mutation);
      }
    }
    else
      block.setAttribute('type', id);

    var values = block_entry['values'].split(';');
    for (var i = 0; i < values.length; i++) {
      var value_cascade = values[i].split('>');
      if (value_cascade[0] != undefined) {
        var value = document.createElement('value');
        value.setAttribute('name', value_cascade[0]);
        block.appendChild(value);
        if (value_cascade[1] != undefined) {
          var shadow = document.createElement('shadow');
          shadow.setAttribute('type', value_cascade[1]);
          value.appendChild(shadow);
          if (value_cascade[2] != undefined) {
            var field = document.createElement('field');
            field.setAttribute('name', value_cascade[2]);
            if (value_cascade[3] != undefined)
              field.innerHTML = value_cascade[3];
            shadow.appendChild(field);
          }
        }
      }
    }

    if (block_entry['id'].trim().indexOf('_') > 0)
      document.getElementById(block_entry['id'].trim().split('_')[0]).appendChild(block);
    else
      document.getElementById(block_entry['id'].trim()).appendChild(block);
  }
}
