#1
def string_times(str, n):
    return str * n

#2
def string_splosion(str):

    result = ""
    for i in range(len(str) + 1):
        result += str[:i]
    return result

#3
def array_front9(nums):
    
    for i in range(4):
        if i + 1 > len(nums):
            return False
        if (nums[i] == 9):
            return True
    return False

#4
def front_times(str, n):
    return str[:3] * n

#5
def last2(str):
    
    if (len(str)) < 2:
        return 0
    count = 0
    for i in range(len(str)):
        count += str[i:i+2] == str[-2:]
    return count - 1

#6
def array123(nums):

    one, two, three = False, False, False
    for i in nums:
        if i == 1:
            one = True
        if i == 2:
            two = True
        if i == 3:
            three = True
    return one and two and three

#7
def string_bits(str):
    return str[::2]

#8
def array_count9(nums):
    return nums.count(9)

#9
def string_match(a, b):
    count = 0
    for i in range(len(a) - 1):
        if i < len(b) - 1 and a[i:i+2] == b[i:i+2]:
            count += 1

    return count