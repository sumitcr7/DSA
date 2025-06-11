/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const str = s.toLowerCase();
    const regx = /[a-z0-9]$/;
    let normal = "";
    let rev = "";
    for (let i = 0, j = str.length - 1; i < str.length && j >= 0; i++, j--) {
        if (regx.test(str[i])) {
            normal += str[i];
        }
        if (regx.test(str[j])) {
            rev += str[j]
        }
    }

console.log(normal, rev)

    return normal === rev;

};