def max_end3(nums):
    
    if nums[0] > nums[2]:
        return [nums[0], nums[0], nums[0]]
    else:
        return [nums[2], nums[2], nums[2]]
    

def max_end3(nums):

    max_val = max(nums[0], nums[2])

    return [max_val, max_val, max_val]
   