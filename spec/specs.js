describe('toDecimal', function() {
  it("converts decimal into binary", function() {
    expect(toDecimal(10101, 2)).to.equal(21);
  });
  it("converts decimal into trinary", function() {
    expect(toDecimal(210, 3)).to.equal(21);
  });
});
