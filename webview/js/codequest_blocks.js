function generateBlock(id) {
  console.log('generateBlock():', id);
  var block_entry = null;
  for (entry in BLOCK_LIST)
    if (BLOCK_LIST[entry]['id'] == id)
      block_entry = BLOCK_LIST[entry];
  if (block_entry != null) {

    var mutations = block_entry['mutations'].split(';');
    var block = document.createElement('block');
    if (mutations[0] != '') {
      console.log(mutations[0])
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

    // var values = block_entry['values'].split(';');
    // for (var i = 0; i < values.length; i++) {
    //   var value_cascade = value[i].split('>');
    //   var value = document.createElement('value');
    //   value.setAttribute('name', value_cascade[0]);
    //   block.appendChild(value);
    //   if (value_cascade[1] != '') {
    //     var shadow = document.createElement('shadow');
    //     shadow.setAttribute('type', value_cascade[1]);
    //     value.appendChild(shadow);
    //     if (value_cascade[2] != '') {
    //       var field = document.createElement('field');
    //       field.setAttribute('name', value_cascade[2]);
    //       if (value_cascade[3] != '')
    //         field.innerHTML = value_cascade[3];
    //       shadow.appendChild(field);
    //     }
    //   }
    // }

    document.getElementById(block_entry['id'].split('_')[0]).appendChild(block);
  }
}

function createCategory(name) {
  var category = document.createElement('category');
  category.setAttribute('id', 'cat_' + name.toLowerCase());
  category.setAttribute('name', name);
  toolbox.appendChild(category);
}
