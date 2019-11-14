/**
 * @author lintao_alex
 * @create 2019-11-14
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums){
    let len=nums.length;
    if(len>1){
      let trg=0;
      for(let i=1; i<len; ++i){
        if(nums[i]!=nums[trg]){
          ++trg;
          nums[trg] = nums[i];
        }
      }
      ++trg;
      nums.length = trg;
      return trg;
    }else{
      return len;
    }
  }else{
    return 0;
  }
}