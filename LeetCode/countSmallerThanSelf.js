/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * Tree solution
 */
class BST{
    constructor(v, s = 0){
        this.value = v;
        this.left = this.right = null;
        this.size = s;
    }
    insert(v, s = 0){
        if(v > this.value){
            if(this.right){
                return this.right.insert(v, s + this.size + 1)
            }else{
                this.right = new BST(v)
                return s + 1 + this.size
            }
        }else{
            this.size++;
            if(this.left){
                return this.left.insert(v,s);
            }else{
                this.left = new BST(v)
                return s
            }
        }

    }
}
function countSmaller(arr){

    const bst = new BST(arr[arr.length - 1]);

    const output = new Array(arr.length);

    output[output.length - 1] = 0;

    for(let i = arr.length - 2; i >= 0; i--){
        output[i] = bst.insert(arr[i])
    }

    return output

}
