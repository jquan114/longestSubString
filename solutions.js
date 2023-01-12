Given a string s, find the length of the longest 
substring
 without repeating characters.
 
 function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let charIndexes = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (charIndexes[char] >= start) {
      start = charIndexes[char] + 1;
    }

    charIndexes[char] = i;
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}


