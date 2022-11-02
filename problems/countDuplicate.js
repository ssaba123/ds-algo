function duplicateCount(text){
    const charMap = {}
    let duplicates = 0
    let count = 0;
    for(char of text){
      charMap[char] = count ++ || 1   
    }
    for(char in charMap){
        if(charMap[char] > 1){
            duplicates ++
        }
    }

    return duplicates
  }

  console.log(duplicateCount('heloooo'))