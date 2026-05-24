function isValidJsBasicsIdentifier(name) {
  // write your code here
  if (typeof name !== 'string') return false;
  const trm = name.trim();
  if (trm === '') return false;
  const reswd = ['let', 'const', 'var', 'return', 'class', 'function', 'return'];
  if (reswd.includes(trm)) return false;
  const idre = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return idre.test(trm);
  
}