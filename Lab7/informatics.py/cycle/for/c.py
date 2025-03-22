import math

a = int(input())
b = int(input())
nums = ""
for i in range(a, b + 1):
    if i % math.sqrt(i) == 0:
        nums += str(i) + " "

print(nums)