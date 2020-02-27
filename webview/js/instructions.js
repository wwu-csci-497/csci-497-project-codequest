function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

function showInstruction(n) {
  currentInstruction = n;
  if (n > instructions.children.length || n <= 0) {
    console.error('Trying to show an instruction that doesn\'t exist. show=' + n + ', instructions=' + instructions.children.length);
    return false;
  }
  var c = instructions.children;
  for (var i = 0; i < n; i++) {
    c[i].className = ''
    c[i].style.display = '';
  }
  c[n-1].className = 'hide-instruction'
  for (var i = n; i < c.length; i++) {
    c[i].className = ''
    c[i].style.display = 'none';
  }
  c[n-1].className = 'show-instruction'
  instructions.style.display = '';
  return true;
}

function showNextInstruction() {
  showInstruction(++currentInstruction);
}

function receiveMessage(event) {
  data = JSON.parse(event['data']);
  if (data['function'] == 'showInstruction')
    showInstruction(data['params'][0]);
  else if (data['function'] == 'showNextInstruction')
    showNextInstruction();
}
window.addEventListener("message", receiveMessage, false);

window.onload = function() {
  if (urlVars['show'] == null)
    console.error('There is no parameter "show" in the URL. This is used to show the instructions.')
  else
    this.showInstruction(urlVars['show']);
}

var urlVars = getUrlVars();
var currentInstruction = 0;