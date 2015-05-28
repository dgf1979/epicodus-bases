describe('toDecimal', function() {
  it("converts binary into decimal", function() {
    expect(toDecimal(10101, 2)).to.equal(21);
  });

  it("converts trinary into decimal", function() {
    expect(toDecimal(210, 3)).to.equal(21);
  });

  it("converts hex into decimal", function() {
    expect(toDecimal(0xD2, 16)).to.equal(210);
  });

  it("converts base 36 into decimal", function() {
    expect(toDecimal("1MC", 36)).to.equal(2100);
  });
});
