
function maxSubArray(nums: number[]): number {

    // 初始化当前子数组和为第一个元素
    let currentSubArraySum = nums[0];
    // 初始化最大子数组和为第一个元素

    // 从第二个元素开始遍历数组
    for (let i = 1; i < nums.length; i++) {
        // 更新当前子数组和，决定是继续加上当前元素还是从当前元素重新开始
        currentSubArraySum = Math.max(nums[i], currentSubArraySum + nums[i]);
        // 更新最大子数组和
    }

    return currentSubArraySum;
}


// 跳跃游戏

function canJump(nums: number[]): boolean {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return true;
}

// 最长有效括号

function longestValidParentheses(s: string): number {
  let stack = [-1];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  }
  return max;
}
// 最长公共前缀
        
