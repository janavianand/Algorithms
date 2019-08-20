
describe('Insertion Sort', function(){

  it('handles an empty array', function(){
    expect( insertionSort([]) ).toEqual( [] );
  });
  it('has swap function',function(){
    expect(typeof swap).toBe('function')
  })
  it('sorts array',function(){
    expect(insertionSort([1,2,3,4])).toEqual([1,2,3,4]);
    expect(insertionSort([6,1,3,9])).toEqual([1,3,6,9]);
    expect(insertionSort([4,2,3,1])).toEqual([1,2,3,4]);
    expect(insertionSort([4,2,3,1,1])).toEqual([1,1,2,3,4])
  })

});
