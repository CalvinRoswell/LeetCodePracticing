<<<<<<< HEAD
public class Solution {
    public int RemoveDuplicates(int[] nums) {
     if (nums.Length==0) return 0;
     int length=0;
        for(int i=1;i<nums.Length;i++){
            if(nums[i]!=nums[length]){
                nums[++length]=nums[i];
            }
        }
        return ++length;   
    }
=======
public class Solution {
    public int RemoveDuplicates(int[] nums) {
     if (nums.Length==0) return 0;
     int length=0;
        for(int i=1;i<nums.Length;i++){
            if(nums[i]!=nums[length]){
                nums[++length]=nums[i];
            }
        }
        return ++length;   
    }
>>>>>>> 89f709a1ed67f322bd9b0ae462cfe34ffaebd882
}