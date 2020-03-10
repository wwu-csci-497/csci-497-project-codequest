var hexcolor = /^#[A-Fa-f0-9]*/;

function testAnswer(curProb, code) {
  if (code == null)
    return [false, {}];
  switch(parseInt(curProb)) {
    case 0000:
      for (var i = 0; i < blockList[curProb]['solutions'].length; i++)
        if (strCompare(blockList[curProb]['solutions'][i], code))
          return [true, {}];
      return [false, {}];
    case 0001:
      for (var i = 0; i < blockList[curProb]['solutions'].length; i++)
        if (strCompare(blockList[curProb]['solutions'][i], code))
          return [true, {}];
      return [false, {}];
    case 1000:
      for (var i = 0; i < blockList[curProb]['solutions'].length; i++)
        if (strCompare(blockList[curProb]['solutions'][i], code))
          return [true, {}];
      return [false, {}];
    case 1001:
      // Checks if it is correct solution and sends the color
      for (var i = 0; i < blockList[curProb]['solutions'].length; i++)
        if (strCompare(blockList[curProb]['solutions'][i], code))
          return [true, {
            color: code.substr(code.indexOf(genDict['objects_flame']) + genDict['objects_flame'].length, 7)
          }];
      // Finds the first objects_flame and checks to see if there is a hex code after it, then it will send that color to Unity
      if (code.substr((code.indexOf(genDict['objects_flame']) + genDict['objects_flame'].length, 15), 7).match(hexcolor))
        return [false, {
          color: code.substr(code.indexOf(genDict['objects_flame']) + genDict['objects_flame'].length, 7)
        }];  
      // If there is no objects_flame or color after an objects_flame, the flame will reset to orange
      return [false, {
        color: '#DD540D'
      }];       
    case 1002:
      return [true, {'dirs': beetleParse(code)}];
    case 1003:
      for (var i = 0; i < blockList[curProb]['solutions'].length; i++)
        if (strCompare(blockList[curProb]['solutions'][i], code))
          return [true, {}];
      return [false, {}];
    case 1004:
      for (var i = 0; i < blockList[curProb]['solutions'].length; i++)
        if (strCompare(blockList[curProb]['solutions'][i], code))
          return [true, {}];
      return [false, {}];
    default:
      return [false, {}];
  }
}

function strCompare(s1, s2) {
  if (s1 == null || s2 == null) {
    console.error('strCompare()', 'One of the two strings are null');
    return false
  }
  if (s1.length != s2.length) {
    console.error('strCompare()', 'Strings are not the same length -- s1: ' + s1.length + ' s2: ' + s2.length);
    return false;
  }
  for (var i = 0; i < s1.length; i++) {
    if (s1[i] != s2[i]) {
      console.error('strCompare()', 's1[' + i + ']: ' + s1[i] + '\ns2[' + i + ']: ' + s2[i])
      return false;
    }
  }
  console.error('strCompare()', 'true')
  return true;
}

function beetleParse(newcode) {
  console.log('code', newcode);
  var data = [0, 0, 0];
  var i = newcode.indexOf('if (');
  var c = 0;
  while (i >= 0) {
    if (c == 50)
      break;
    var color = '';
    i+=4;
    if (i > newcode.length-1)
      return data;
    while (newcode[i] != ')') {
      color += newcode[i++];
      if (i > newcode.length-1)
        return data;
    }
    i+=6;
    if (i > newcode.length-1)
      return data;
    var dir = '';
    while (newcode[i] != ' ') {
      dir += newcode[i++];
      if (i > newcode.length-1)
        return data;
    }
    i+=3;
    if (i > newcode.length-1)
      return data;
    var num = '';
    while (newcode[i] != ';') {
      num += newcode[i++];
      if (i > newcode.length-1)
         data;
    }
    num = parseInt(num);

    if (dir == 'move_left_count')
      num*=-1;

    if (strCompare(color, 'green'))
      data[0] = num;
    else if (strCompare(color, 'blue'))
      data[1] = num;
    else if (strCompare(color, 'purple'))
      data[2] = num;
    else
      console.error('beetleParse()', 'Not a valid color: ' + color);

    i = newcode.indexOf('if (', i);
    c++;
  }
  return data;
}