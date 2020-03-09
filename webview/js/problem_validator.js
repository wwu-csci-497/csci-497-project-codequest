function testAnswer(curProb, code) {
  return [true, {}];
  switch(parseInt(curProb)) {
    case 0000:
      problems[curProb]['solutions'].forEach(element => {
        if (element == code)
          return [true, {}];
      });
      return [false, {}];
    case 0001:
      problems[curProb]['solutions'].forEach(element => {
        if (element == code)
          return [true, {}];
      });
      return [false, {}];
    case 1000:
      problems[curProb]['solutions'].forEach(element => {
        if (element == code)
          return [true, {}];
      });
      return [false, {}];
    case 1001:
      problems[curProb]['solutions'].forEach(element => {
        if (element == code)
          return [true, {
            color: code.substr(code.indexOf(genDict['objects_flame']) + genDict['objects_flame'].length, 7)
          }];
      });
      return [false, {
        color: code.substr(code.indexOf(genDict['objects_flame']) + genDict['objects_flame'].length, 7)
      }];        
    case 1002:
      problems[curProb]['solutions'].forEach(element => {
        if (element == code)
          return [true, {}];
      });
      return [false, {}];
    case 1003:
      problems[curProb]['solutions'].forEach(element => {
        if (element == code)
          return [true, {}];
      });
      return [false, {}];
    case 1004:
      problems[curProb]['solutions'].forEach(element => {
        if (element == code)
          return [true, {}];
      });
      return [false, {}];
    default:
      return [false, {}];
  }
}