/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
   this.map = new Map()
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(this.map.has(key)){
        let elem = this.map.get(key)
        elem.push({time:timestamp,value:value})
        this.map.set(key,elem)
    }else{
        let elem = [{time:timestamp,value:value}]
        this.map.set(key,elem)
    }
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let elem = this.map.get(key)
    if(!this.map.has(key) || elem[0].time > timestamp){
        return ''
    }else{
        return binarySearch(timestamp,0,elem.length-1,elem)
    }
};

function binarySearch(timestamp,start,end,arr){
    if(start === end || start === end-1){
        if(arr[end].time === timestamp || arr[end].time<timestamp){
            return arr[end].value
        }
        else if(arr[start].time === timestamp || arr[start].time < timestamp){
            return arr[start].value
        }
    }
    let mid = Math.floor((start+end)/2)
    if(arr[mid].time === timestamp){
        return arr[mid].value
    }else if(arr[mid].time > timestamp){
        return binarySearch(timestamp,start,mid-1,arr)
    }else{
        return binarySearch(timestamp,mid+1,end,arr)
    }
}
/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
