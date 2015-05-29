var findAndReplace = function(phrase, wordToReplace, replacementWord) {
  var words = phrase.toLowerCase().split(' ')
  var newSentence = []
  for (var i = 0; i < words.length; i++) {
    if (words[i] === wordToReplace) {
      words[i] = replacementWord;
    }
  }
  return words.join(" ")
};
