// XML Toolbar categories
var categories = [
  {
    dom: undefined,
    id: 'controls',
    name: 'Controls',
    colour: '120'
  },
  {
    dom: undefined,
    id: 'logic',
    name: 'Logic',
    colour: '210'
  },
  {
    dom: undefined,
    id: 'math',
    name: 'Math',
    colour: '230'
  },
  {
    dom: undefined,
    id: 'text',
    name: 'Text',
    colour: '160'
  },
  {
    dom: undefined,
    id: 'lists',
    name: 'Lists',
    colour: '260'
  },
  {
    dom: undefined,
    id: 'colour',
    name: 'Colour',
    colour: '20'
  },
  {
    dom: undefined,
    id: 'variables',
    name: 'Variables',
    colour: '330',
    custom: 'VARIABLE'
  },
  {
    dom: undefined,
    id: 'functions',
    name: 'Functions',
    colour: '290',
    custom: 'PROCEDURE'
  }
];

// Creates the XML <category> in the Toolbar
function createToolboxCategory(object) {
  if (object['dom'] != undefined)
    return;

  console.log('Creating Toolbox Category: ' + object['id'])
  var category = document.createElement('category');
  category.setAttribute('id', object['id']);
  category.setAttribute('name', object['name']);
  category.setAttribute('colour', object['colour']);
  if (object['custom'] != null)
    category.setAttribute('custom', object['custom']);
  object['dom'] = category;
  toolbox.appendChild(category);
}

// Creates the XML Toolbar object by given ID denoted in Google Sheets
function generateBlock(id) {
  console.log('generateBlock()', id)
  // Finds block in 
  if (id.split('_')[0] != 'createvar' && id.split('_')[0] != 'createfun') {
    var block_entry = null;
    for (entry in blockList) {
      if (blockList[entry]['id'].trim() == id) {
        block_entry = blockList[entry];
        block_entry['id'] = block_entry['id'].trim();
        break;
      }
    }

    if (block_entry != null) {
      
      if (block_entry['id'].trim().indexOf('_') > 0) {
        createToolboxCategory(categories.find(item => {
          return item.id == block_entry['id'].trim().split('_')[0]
        }));
        document.getElementById(block_entry['id'].trim().split('_')[0]).appendChild(block);
      }
      else {
        createToolboxCategory(categories.find(item => {
          return item.id == block_entry['id'].trim()
        }));
        document.getElementById(block_entry['id'].trim()).appendChild(block);
      }
    }
  }
  else if (id.split('_')[0] == 'createvar') {
    createToolboxCategory(categories.find(item => {
      return item.id == 'variables'
    }));
    return id;
  }
  else if (id.split('_')[0] == 'createfun') {
    createToolboxCategory(categories.find(item => {
      return item.id == 'functions'
    }));
    return id;
  }
  else
    console.error('generateBlock()', 'Unknown Block ID: ' + id);
  return null;
}

function createWorkspaceVariable(workspace, id) {
  console.log('createVariables()', id)
  if (id.split('_')[0] == 'createvar')
    if (id.split('_').length > 0)
      workspace.createVariable(id.split('_')[1].trim());
}

function createWorkspaceFunction(workspace, id) {

}
