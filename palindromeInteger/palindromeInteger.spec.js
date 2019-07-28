describe('Palindrome Integer',function(){
  it('handles single digit integer',function(){
    expect(isPalindrome(1)).toEqual(true)
    expect(isPalindrome(0)).toEqual(true)
  })
  it('handles positive integer',function(){
    expect(isPalindrome(121)).toEqual(true)
    expect(isPalindrome(12321)).toEqual(true)
    expect(isPalindrome(342)).toEqual(false)
    expect(isPalindrome(21120)).toEqual(false)
    expect(isPalindrome(10)).toEqual(false)
  })
  it('handles negative integer',function(){
    expect(isPalindrome(-1)).toEqual(false)
    expect(isPalindrome(-121)).toEqual(false)
  })
});
