var findAndReplace = function(phrase, wordToReplace, replacementWord) {
  var words = phrase.toLowerCase().replace(/\W+/g, " ").split(' ')
  for (var i = 0; i < words.length; i++) {
    if (words[i] === wordToReplace) {
      words[i] = replacementWord;
    }
  }
  return words.join(" ")
};

$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    $("#result").show();
    var phrase = $("input#phrase").val();
    var word = $("input#word").val();
    var replacement = $("input#replacementword").val();
    var newPhrase = findAndReplace(phrase, word, replacement)
    debugger;
    $(".result").text(newPhrase);

    event.preventDefault();

  });
});
