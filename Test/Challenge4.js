function getJsBasicsKeywordMeaning(term) {
  // write your code here
  if (typeof term !== 'string') return "unknown";
  const nt = term.trim().toLowerCase();
  const lkmap = {
    "node": "runtime",
    "v8": "engine",
    "npm": "package-manager",
    "not-a-topic": "unknown"
  };
  return lkmap[nt] || "unknown";
}