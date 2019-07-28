
describe('Missing Number',function(){
  it('checks missing number',function(){
    expect(missingNumber([1,2,5,3])).toEqual(4)
    expect(missingNumber([9,6,4,5,2,3,7,8])).toEqual(1)
    expect(missingNumber([10,7,8,6,5,3,4,2,1])).toEqual(9)
  })
  it('returns next max number if no missing number',function(){
    expect(missingNumber([4,3,1,2])).toEqual(5)
    expect(missingNumber([1,2,3,4,5,6])).toEqual(7)
    expect(missingNumber([10,7,8,6,5,3,4,2,1,9])).toEqual(11)
  })
})
