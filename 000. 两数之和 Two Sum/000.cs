public class Solution
        {
            public int[] TwoSum(int[] nums, int target)
            {
                for (var i = 0; i < nums.Length; i++)
                    for (var j = i + 1; j < nums.Length; j++)
                    {
                        if (nums[i] + nums[j] == target)
                        {
                            var ans = new int[2] { i, j };
                            return ans;
                        }
                    }
                throw new Exception("No two sum solution");
            }
        }