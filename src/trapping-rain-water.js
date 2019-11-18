/**
 * @author lintao_alex
 * @create 2019-11-18
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let count = 0;
  let left=0, right=height.length-1;
  let leftMax=0, rightMax=0;
  let curLeft = height[left], curRight = height[right];
  while(left<right){
    if(curLeft<curRight){
      if(curLeft<leftMax){
        count+=leftMax-curLeft
      }else{
        leftMax = curLeft;
      }
      ++left;
      curLeft = height[left];
    }else{
      if(curRight<rightMax){
        count+=rightMax-curRight
      }else{
        rightMax = curRight;
      }
      --right;
      curRight = height[right]
    }
  }
  return count;
};