// XML Toolbar categories
var categories = [
  {
    dom: undefined,
    id: 'actions',
    name: 'Actions',
    colour: '0'
  },
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
    colour: '50'
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
function createToolboxCategory(object) {S
  if (object['dom'] != undefined)
    return;
  var category = document.createElement('category');
  category.setAttribute('id', object['id']);
  category.setAttribute('name', object['name']);
  category.setAttribute('colour', object['colour']);
  if (object['custom'] != null)
    category.setAttribute('custom', object['custom']);
  object['dom'] = category;
  toolbox.appendChild(category);
}

// Creates the XML Toolbar block in a category
function createToolboxBlock(type) {
  console.log('createToolboxBlock(' + type + ')')
  var type = type;
  if (type.split('_')[0] != 'createvar' && type.split('_')[0] != 'createfun') {
    var block = document.createElement('block');
    block.setAttribute('type', type);
    category = type.split('_')[0];
    createToolboxCategory(categories.find(item => {
      return item.id == category
    }));
    document.getElementById(category).appendChild(block);
  }
  // Handling variables
  else if (type.split('_')[0] == 'createvar') {
    createToolboxCategory(categories.find(item => {
      return item.id == 'variables'
    }));
    return type;
  }
  // Handling functions
  else if (type.split('_')[0] == 'createfun') {
    createToolboxCategory(categories.find(item => {
      return item.id == 'functions'
    }));
    return type;
  }
  else
    console.error('createToolboxBlock()', 'Unknown Block ID: ' + type);
  return null;
}

// Creates the variables in the toolbar
function createToolboxVariable(workspace, id, currentProblem) {
  var variable = workspace.createVariable(id.split('_')[1], null, id+'_'+currentProblem);
  console.log('all', workspace.getAllVariables());
}

// Creates the functions in the toolbar
function createToolboxFunction(workspace, id) {

}

// Creates the blocks in the workspace
function createWorkspaceBlock(workspace, json) {
  var type = json['type'];
  if (type.split('_')[0] != 'createvar' && type.split('_')[0] != 'createfun') {
    var block = workspace.newBlock(type, json['id']);
    block.initSvg();
    block.render();
    block.moveBy(json['x'], json['y'])
  }
  // Handling variables
  else if (type.split('_')[0] == 'createvar') {
    return type;
  }
  // Handling functions
  else if (type.split('_')[0] == 'createfun') {
    return type;
  }
  else
    console.error('createToolboxBlock()', 'Unknown Block ID: ' + type);
}

// Creates the variables in the toolbar
function createWorkspaceVariable(workspace, json) {
  var variable = workspace.createVariable(id.split('_')[1]);
  variable.initSvg();
  variable.render();
}

// Creates the functions in the toolbar
function createWorkspaceFunction(workspace, id) {

}