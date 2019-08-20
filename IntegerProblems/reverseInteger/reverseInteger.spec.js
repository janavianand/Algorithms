
describe('reverseInteger',function(){
  it('handles positive integers',function(){
    expect(reverse(1)).toEqual(1)
    expect(reverse(24)).toEqual(42)
    expect(reverse(56743)).toEqual(34765)
  })
  it('handles out of bound values',function(){
    expect(reverse(87363489897)).toEqual(0)
  })
  it('handles negative integers',function(){
    expect(reverse(-1)).toEqual(-1)
    expect(reverse(-24)).toEqual(-42)
    expect(reverse(-56743)).toEqual(-34765)
  })
  it('handles negative out of bound values',function(){
    expect(reverse(87363489897)).toEqual(0)
  })
})
