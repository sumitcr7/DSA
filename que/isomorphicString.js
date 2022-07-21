// You have been given two strings, ‘str1’ and ‘str2’.
// Your task is to check whether the two given strings are isomorphic to each other
// Note :
// Two strings are isomorphic if a one-to-one mapping is possible for every character of the first string ‘str1’ to every character of the second string ‘str2’ while preserving the order of the characters.
// All occurrences of every character in the first string ‘str1’ should map to the same character in the second string, ‘str2’.

// For Example :
// If str1 = “aab” and str2 = “xxy” then the output will be 1. ‘a’ maps to ‘x’ and ‘b’ maps to ‘y’.
// If str1 = “aab” and str2 = “xyz” then the output will be 0. There are two different characters in str1, while there are three different characters in str2. So there won't be one to one mapping between str1 and str2.

function isIsomorphic(str) {
  if (!str) return 0;
  const [str1, str2] = str.split(" ");
  const lookup = {};
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    const char1 = str1[i];
    const char2 = str2[j];

    if (lookup[char2] && lookup[char2] !== char1) {
      return 0;
    } else {
      lookup[char2] = char1;
      i++;
      j++;
    }
  }

  return 1;
}

console.log(isIsomorphic("ofiecgmxqkg yhqzsrbckthycf"));
console.log(isIsomorphic("hmallfxics ueynndfrvc"));
console.log(isIsomorphic("mubvozhnqc weivzzhvwzcxckb"));
console.log(isIsomorphic("sticfamixmg cnldkvevwumdnqb"));
console.log(isIsomorphic("aqczedsaexb yciycckthfvuesb"));
console.log(isIsomorphic("ofuekuaedae ckgveaxkdnteqb"));
console.log(isIsomorphic("ffovrkpegx nnzstjrpgr"));
console.log(isIsomorphic("aiwrsymrsad gvpoogdsbkvefi"));
console.log(isIsomorphic("wzkdqfcoah ooglbhafvexrbkb"));
console.log(isIsomorphic("ymympndlgsh uwmgnoeiypwcpb"));
console.log(isIsomorphic("yyycpvkfmn sssqeiefzi"));
console.log(isIsomorphic("kavsezyxxt kswrnkcffl"));
console.log(isIsomorphic("gpfdoexboe ysapofzcof"));
console.log(isIsomorphic("ofcpjgloemg mjiiqrtumbpwktb"));
console.log(isIsomorphic("qsztrmeemfi aplvjvuweqoldnb"));
console.log(isIsomorphic("cvbtecqttee korthvwpwkqjaxc"));
console.log(isIsomorphic("pelpbpljri oyfonofvvp"));
console.log(isIsomorphic("ayhqqrpxjl mewnnqmujo"));
console.log(isIsomorphic("vouwmnbckf awxhscxosz"));
console.log(isIsomorphic("vtdnyyhijw axkljjfxsn"));
