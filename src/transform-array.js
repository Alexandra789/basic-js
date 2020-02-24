module.exports = 
function transform( arr ) {
    if (!Array.isArray(arr)) {
        throw "Error";
    }
    else if(arr[0] === 'undefined' && arr.length <=1){return [];}
    else{
        for(let i = 0; i<arr.length; i++){
        switch(arr[i]){
            case '--discard-next': arr.length <=2 ? arr = [] : arr.splice(i,2); break;
            case '--discard-prev': arr.length <=2 && arr[0] === '--discard-prev' ? arr = [] : arr.splice(i-1,2); break;
            case '--double-next' : arr.length <=2 ? arr = [] : arr[i] = arr[i+1]; break;
            case '--double-prev' : arr.length <=2 ? arr = [] : arr[i] = arr[i-1]; break;
            default: arr[i]; break;
            }
        }
    }
    return arr;
};

// console.log(transform(['--discard-next']));
//[1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]