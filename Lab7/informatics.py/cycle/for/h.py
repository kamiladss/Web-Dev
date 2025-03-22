x = int(input())
d = ""
for i in range(1, x + 1):
    if x % i == 0:
        d += str(i) + " "

print(d)