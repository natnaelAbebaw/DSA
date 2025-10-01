// === Number-only modular toolkit (no BigInt) ===
const MOD = 1_000_000_007;

// safe (a * b) % MOD without precision loss
function mulMod(a: number, b: number): number {
  a %= MOD; if (a < 0) a += MOD;
  b %= MOD; if (b < 0) b += MOD;
  let res = 0;
  while (b > 0) {
    if (b & 1) {
      res += a;
      if (res >= MOD) res -= MOD;
    }
    a <<= 1;
    if (a >= MOD) a -= MOD;
    b = (b / 2) | 0;
  }
  return res;
}

// fast power a^e % MOD using mulMod
function powMod(a: number, e: number): number {
  let base = ((a % MOD) + MOD) % MOD;
  let res = 1;
  while (e > 0) {
    if (e & 1) res = mulMod(res, base);
    base = mulMod(base, base);
    e = (e / 2) | 0;
  }
  return res;
}

// modular inverse (MOD is prime)
const invMod = (x: number) => powMod(x, MOD - 2);

// Precompute factorials and inverse factorials up to maxN
function precomputeFacts(maxN: number) {
  const fact = new Array<number>(maxN + 1);
  const invFact = new Array<number>(maxN + 1);
  fact[0] = 1;
  for (let i = 1; i <= maxN; i++) fact[i] = mulMod(fact[i - 1], i);
  invFact[maxN] = invMod(fact[maxN]);
  for (let i = maxN; i >= 1; i--) invFact[i - 1] = mulMod(invFact[i], i);
  return { fact, invFact };
}

// === Solution ===
export function countAnagrams(s: string): number {
  const words = s.split(' ');
  let maxLen = 0;
  for (const w of words) if (w.length > maxLen) maxLen = w.length;

  const { fact, invFact } = precomputeFacts(maxLen);

  let ans = 1;
  for (const word of words) {
    // Count character frequencies
    const freq: Record<string, number> = {};
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      freq[ch] = (freq[ch] ?? 0) + 1;
    }

    // ways = len! * Π invFact[count[ch]]
    let ways = fact[word.length];
    for (const c of Object.values(freq)) {
      ways = mulMod(ways, invFact[c]);
    }

    ans = mulMod(ans, ways);
  }
  return ans; // plain number
}