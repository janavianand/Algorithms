
describe('Caesar Cipher',function(){
  it('handles empty string',function(){
    expect(caesarCipher('')).toEqual('')
  })
  it('handles keys less than or equal to 26',function(){
    expect(caesarCipher('abc',0)).toEqual('abc')
    expect(caesarCipher('abc',2)).toEqual('cde')
    expect(caesarCipher('amp',4)).toEqual('eqt')
  })
  it('handles keys more than 26',function(){
    expect(caesarCipher('abc',26)).toEqual('abc')
    expect(caesarCipher('abc',54)).toEqual('cde')
    expect(caesarCipher('amp',82)).toEqual('eqt')
  })
})
