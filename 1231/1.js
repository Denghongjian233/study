function longestVowelSubstringWithFlaw(flaw, str) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let maxLength = 0;
  let start = 0;
  let flawCount = 0;
  for (let end = 0; end < str.length; end++) {
    if (!vowels.has(str[end])) {
      flawCount++;
    }
    while (flawCount > flaw) {
      if (!vowels.has(str[start])) {
        flawCount--;
      }
      start++;
    }
    if (flawCount <= flaw) {
      maxLength = Math.max(maxLength, end - start + 1);
    }
  }

  return maxLength;
}

console.log(longestVowelSubstringWithFlaw(2, "aeuao"));
