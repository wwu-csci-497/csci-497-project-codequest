function testAnswer(curProb, code) {
  // return [true, {}];
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
      for (var i = 0; i < blockList[curProb]['solutions'].length; i++)
        if (strCompare(blockList[curProb]['solutions'][i], code))
          return [true, {
            color: code.substr(code.indexOf(genDict['objects_flame']) + genDict['objects_flame'].length, 7)
          }];
      if (code.substr((code.indexOf(genDict['objects_flame']) + genDict['objects_flame'].length, 15), 7).length == 7)
        return [false, {
          color: '#DD540D'
        }]; 
      return [false, {
        color: code.substr(code.indexOf(genDict['objects_flame']) + genDict['objects_flame'].length, 7)
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
        var s1 = blockList[curProb]['solutions'][i];
        var s2 = code;
        if (s1 == null || s2 == null) {
          console.error('strCompare()', 'One of the two strings are null');
          return [false, []];
        }
        if (s1.length != s2.length) {
          console.error('strCompare()', 'Strings are not the same length -- s1: ' + s1.length + ' s2: ' + s2.length);
          return [false, []];
        }

        if (gemsParse(code))
          return [true, ["Yellow", "Purple", "Blue", "Orange", "Green"]];
      return [false, {}];
    default:
      return [false, {}];
  }
}

function strCompare(s1, s2) {
  if (s1 == null || s2 == null) {
    console.error('strCompare()', 'One of the two strings are null');
    return false;
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
    if (c == 5)
      break;
    var color = '';
    i+=4;
    while (newcode[i] != ')')
      color += newcode[i++];
    i+=6;
    var dir = '';
    while (newcode[i] != ' ')
      dir += newcode[i++];
    i+=3;
    var num = '';
    while (newcode[i] != ';')
      num += newcode[i++];
    num = parseInt(num);

    if (dir == 'move_left_count')
      num*=-1;

    console.log(color, dir, num);

    if (strCompare(color, 'green'))
      data[0] = num;
    else if (strCompare(color, 'blue'))
      data[1] = num;
    else if (strCompare(color, 'purple'))
      data[2] = num;
    else
      console.error('beetleParse()', 'Not a valid color: ' + color);

    console.log(i);
    i = newcode.indexOf('if (', i);
    console.log(i);
    c++;
  }
  return data;
}

function gemsParse(code) {
  var i = 0;
  var c = 0;
  while (i >= 0) {
    if (c == 5)
      break;
    var color = '';
    i+=4;
    while (newcode[i] != ')')
      color += newcode[i++];
    i+=6;
    var dir = '';
    while (newcode[i] != ' ')
      dir += newcode[i++];
    i+=3;
    var num = '';
    while (newcode[i] != ';')
      num += newcode[i++];
    num = parseInt(num);

    if (dir == 'move_left_count')
      num*=-1;

    console.log(color, dir, num);

    if (strCompare(color, 'green'))
      data[0] = num;
    else if (strCompare(color, 'blue'))
      data[1] = num;
    else if (strCompare(color, 'purple'))
      data[2] = num;
    else
      console.error('beetleParse()', 'Not a valid color: ' + color);

    console.log(i);
    i = newcode.indexOf('if (', i);
    console.log(i);
    c++;
  }
}