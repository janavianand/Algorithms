
describe('Bubble Sort', function(){

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('has swap function',function(){
    expect(typeof swap).toBe('function')
  })
  it('swaps the input',function(){
    expect(swap([1,2])).toEqual([2,1])
  })
  it('sorts array',function(){
    expect(bubbleSort([1,2,3,4])).toEqual([1,2,3,4]);
    expect(bubbleSort([6,1,3,9])).toEqual([1,3,6,9]);
    expect(bubbleSort([4,2,3,1])).toEqual([1,2,3,4]);
    expect(bubbleSort([4,2,3,1,1])).toEqual([1,1,2,3,4])
  })

});
