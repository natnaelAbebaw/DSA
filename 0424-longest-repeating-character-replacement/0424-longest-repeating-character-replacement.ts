function characterReplacement(s: string, k: number): number {
  const freq = new Map<string, number>();
  let l = 0, maxFreq = 0, best = 0;

  for (let r = 0; r < s.length; r++) {
    const ch = s[r];
    const cur = (freq.get(ch) ?? 0) + 1;
    freq.set(ch, cur);
    maxFreq = Math.max(maxFreq, cur);

    while ((r - l + 1) - maxFreq > k) {
      const leftCh = s[l];
      freq.set(leftCh, (freq.get(leftCh) ?? 1) - 1);
      l++;
    }
    best = Math.max(best, r - l + 1);
  }
  return best;
}
