function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  const n = nums.length;
  if (n < 3) return res;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    // skip duplicate anchors
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // pruning: if the smallest possible sum > 0, we can stop
    const minSum = nums[i] + nums[i + 1] + nums[i + 2];
    if (minSum > 0) break;

    // pruning: if the largest possible sum < 0, move i forward
    const maxSum = nums[i] + nums[n - 2] + nums[n - 1];
    if (maxSum < 0) continue;

    let l = i + 1;
    let r = n - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        // move past duplicates on both sides
        const leftVal = nums[l], rightVal = nums[r];
        while (l < r && nums[l] === leftVal) l++;
        while (l < r && nums[r] === rightVal) r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }

  return res;
}
