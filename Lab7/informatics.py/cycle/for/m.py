n = int(input())
zeros = 0
for i in range(0, n):
    z = int(input())
    if z == 0:
        zeros += 1

print(zeros)