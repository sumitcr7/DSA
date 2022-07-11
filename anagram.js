function getCharCount(str) {
  const count = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    count[char] = (count[char] || 0) + 1;
  }

  return count;
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const charCount1 = getCharCount(str1);
  const charCount2 = getCharCount(str2);

  for (let key in charCount1) {
    if (!(key in charCount2) || charCount1[key] !== charCount2[key]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("cat", "act"));
