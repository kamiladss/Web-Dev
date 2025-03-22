#1
def count_evens(nums):

    sum = 0
    for i in nums:
        if i % 2 == 0:
            sum += 1
    return sum

#2
def sum13(nums):
    total = 0
    i = 0
    while i < len(nums):
        if nums[i] == 13:
            i += 1
        else:
            total += nums[i]
        i += 1
    return total

#3
def big_diff(nums):
    return max(nums) - min(nums)

#4
def sum67(nums):
    total = 0
    skip = False
    for i in range(len(nums)):
        if nums[i] == 6:
            skip = True
        if not skip:
            total += nums[i]
        if nums[i] == 7 and skip:
            skip = False
    return total

#5
def centered_average(nums):
    nums.sort()
    centered = nums[1:-1]
    return sum(centered) // len(centered)

#6
def has22(nums):
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i + 1] == 2:
            return True

    return False