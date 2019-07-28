describe('palindrome',function(){
  it('handles empty string',function(){
    expect(palindrome('')).toEqual(true);
  });
  it('Checks if string is plaindrom',function(){
    expect(palindrome('d')).toEqual(true);
    expect(palindrome('ad')).toEqual(false);
    expect(palindrome('agfdfga')).toEqual(true);
    expect(palindrome('asdffdsa')).toEqual(true);
    expect(palindrome('asdfgfhgfgfdsa')).toEqual(false);
  })
})
