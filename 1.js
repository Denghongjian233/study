// 最长递增子序列

function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    const dp = new Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
}

// 另外解法

function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    const dp = new Array(nums.length).fill(1);
    let result = 1;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        result = Math.max(result, dp[i]);
    }
    return result;
}

// 两个数组的交集

function intersection(nums1, nums2) {
    
    return nums1.filter(x => nums2.includes(x));

}

// 用set写

function intersection(nums1, nums2) {
    
    const s1 = new Set(nums1);
    const s2 = new Set(nums2);
    const res = new Set();
    for (const num of s1) {
        if (s2.has(num)) {
            res.add(num);
        }
    }
    return [...res];
}

// 最大子数组和

function maxSubArray(nums) {
    
    if (nums.length === 0) return 0;
    let result = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(nums[i], max + nums[i]);
        result = Math.max(result, max);
    }
    return result;

}

// 跳跃游戏

function canJump(nums) {
    
    let rightmost = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i <= rightmost) {
            rightmost = Math.max(rightmost, i + nums[i]);
            if (rightmost >= nums.length - 1) {
                return true;
            }
        }
    }
    return false;

}

// 最大子数组和

function maxSubArray(nums) {
    if (nums.length === 0) return 0;
    let result = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(nums[i], max + nums[i]);
        result = Math.max(result, max);
    }
    return result;
}