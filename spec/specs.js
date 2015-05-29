describe('findAndReplace', function() {

  it("Will find one word and replace it with another word in a phrase", function() {
    expect(findAndReplace("the dog is good", "dog", "cat")).to.equal("the cat is good")
  });

  it("Will find multiple instances of one words and replace it with another word in a phrase", function() {
    expect(findAndReplace("the dog is good to the dog", "dog", "cat")).to.equal("the cat is good to the cat")
  });

});
