class Solution(object):
    def twoSum(self, nums, target):
        arr=[]
        for i in range(0,len(nums)):
            print(i)
            for j in range(i+1,len(nums)):
                print("J",j)
                if nums[i]+nums[j]==target:
                    arr.append(i)
                    arr.append(j)
        return list(set(arr))
s=Solution()                
print(s.twoSum(nums = [2,7,11,15], target = 9))
print(s.twoSum(nums = [3,2,4], target = 6))
print(s.twoSum(nums = [3,3], target = 6))     