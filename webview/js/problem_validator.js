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
      return [false, {
        color: code.substr(code.indexOf(genDict['objects_flame']) + genDict['objects_flame'].length, 7)
      }];        
    case 1002:
      for (var i = 0; i < blockList[curProb]['solutions'].length; i++)
        if (strCompare(blockList[curProb]['solutions'][i], code))
          return [true, {}];
      return [false, {}];
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
    console.error('strCompare()', 'Strings are not the same length.');
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