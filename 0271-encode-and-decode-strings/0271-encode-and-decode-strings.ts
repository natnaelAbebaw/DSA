/**
 * Encodes a list of strings to a single string.
 */
function encode(strs: string[]): string {
   return strs.join("§")	
};

/**
 * Decodes a single string to a list of strings.
 */
function decode(s: string): string[] {
  return s.split("§")
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */