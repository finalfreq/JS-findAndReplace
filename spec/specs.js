describe('findAndReplace', function() {
  it("Will find one word and replace it with another word in a phrase", function() {
    expect(findAndReplace("the dog is good", "dog", "cat")).to.equal("the cat is good")
  });

});
