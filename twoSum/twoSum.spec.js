describe('Two Sum',function(){
  it('handles empty array',function(){
    expect(twoSum([],23)).toEqual([])
  })
  it('outputs any two numbers sums to equal target',function(){
    expect(twoSum([1,2],3)).toEqual([1,2]);
    expect(twoSum([1,2],4)).toEqual([]);
    expect(twoSum([1,5,7,9,12],10)).toEqual([1,9]);
    expect(twoSum([1,5,7,9,12],7)).toEqual([]);
    expect(twoSum([1,2,4,5,7,9,12],9)).toEqual([2,4,5,7]);
  })
})
