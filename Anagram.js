const anagram = (s1, s2) => {
  let objs = {};
  if (s1.length != s2.length) return false;
  for (const ch of s1) {
    objs[ch] = (objs[ch] || 0) + 1;
  }
  for (const ch of s2) {
    if (!objs[ch]) {
      return false;
    }
    objs[ch]--;
  }
  return true;
};
console.log(anagram("Helvvlo", "vlvelHo"));
