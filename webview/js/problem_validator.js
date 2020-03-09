function testAnswer(curProb, code) {
  // return [true, {}];
  switch(parseInt(curProb)) {
    case 0000:
      blockList[curProb]['solutions'].forEach(element => {
        if (strCompare(element, code))
          return [true, {}];
      });
      return [false, {}];
    case 0001:
      blockList[curProb]['solutions'].forEach(element => {
        if (element == code)
          return [true, {}];
      });
      return [false, {}];
    case 1000:
      blockList[curProb]['solutions'].forEach(element => {
        if (element == code)
          return [true, {}];
      });
      return [false, {}];
    case 1001:
      blockList[curProb]['solutions'].forEach(element => {
        if (element == code)
          return [true, {
            color: code.substr(code.indexOf(genDict['objects_flame']) + genDict['objects_flame'].length, 7)
          }];
      });
      return [false, {
        color: code.substr(code.indexOf(genDict['objects_flame']) + genDict['objects_flame'].length, 7)
      }];        
    case 1002:
      blockList[curProb]['solutions'].forEach(element => {
        if (element == code)
          return [true, {}];
      });
      return [false, {}];
    case 1003:
      blockList[curProb]['solutions'].forEach(element => {
        if (element == code)
          return [true, {}];
      });
      return [false, {}];
    case 1004:
      blockList[curProb]['solutions'].forEach(element => {
        if (element == code)
          return [true, {}];
      });
      return [false, {}];
    default:
      return [false, {}];
  }
}

function strCompare(s1, s2) {
  if (s1.length != s2.length)
    return false;
  for (var i = 0; i < s1.length; i++) {
    if (s1[i] != s2[i]) {
      console.log('s1[' + i + ']: ' + s1[i] + '\ns2[' + i + ']: ' + s2[i])
      return false;
    }
  }
  return true;
}