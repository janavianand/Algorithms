var canConvert = function(str1, str2) {
    let map = new Map()

    if(str1 === str2) return true

    for(let pointer = 0;pointer<str1.length;pointer++){
        if(map.has(str1[pointer])){
            if(map.get(str1[pointer]) !== str2[pointer]){
                return false
            }
        }else{
            map.set(str1[pointer],str2[pointer])
        }
    }

    /* # 2. There should be spare chars to be able to facilitate transformation in order to avoid cycles.
#str1 = "aabcc" str2 = "ccdaa" : a->c; b->d; c->a. Here a->c->a is a cycle.
[#But](https://leetcode.com/problems/distribute-candies) since str2 hasn't used many chars in a-z we can do something like a->c; b->d; c->z; z->a.
#So, we need to make sure str2 is not using all the char from a-z. */


    return new Set(str2).size < 26
};
