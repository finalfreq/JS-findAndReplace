var findAndReplace = function(phrase, wordToReplace, replacementWord) {
  var words = phrase.split(' ')
  var newSentence = []
  for (var i = 0; i < words.length; i++) {
    if (words[i] === wordToReplace) {
      newSentence.push(replacementWord);
    } else {
      newSentence.push(words[i])
    }
  }
  return newSentence.join(" ")
};
