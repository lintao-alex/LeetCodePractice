/**
 * @author lintao_alex
 * @create 2019-11-14
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  nums.splice(0,0, ...nums.splice(-k,k));
}
