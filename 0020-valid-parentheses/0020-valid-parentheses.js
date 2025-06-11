/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    const map = {
        ")": "(",
        "}": "{",
        "]": "[",
    }
    const stack = [];

    for(let i=0; i<s.length;i++){
        const par = s[i];
        if(!map[par]){
            stack.push(par);
        }else if(map[par] !== stack.pop()) return false;
    }

    return stack.length === 0;


};