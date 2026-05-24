function normalizeJsBasicsLabel(inputstr) {
  // write your code here
  let cleaned = inputstr.trim().toLowerCase();
 cleaned = cleaned.replace(/[^a-z0-9]+/g, '-');
 cleaned = cleaned.replace(/^-+|-+$/g, '');
  //cleaned = cleaned.replace("--", "-");
  if (! cleaned) {
    return "js-basic";
  
 }
  return "js-basic-" + cleaned;
}
