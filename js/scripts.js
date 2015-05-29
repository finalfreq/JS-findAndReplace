var findAndReplace = function(phrase, wordToReplace, replacementWord) {
  words = phrase.split('')

  for (var i = 0; i < words.length; i++) {
    if (words[i] === wordToReplace) {
      wordToReplace = replacementWord;
    }
  }
  words.join(' ')
};
