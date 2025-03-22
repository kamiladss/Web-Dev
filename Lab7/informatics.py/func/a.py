def min(a, b, c, d):
    minimum = a
    if minimum > b:
        minimum = b
    if minimum > c:
        minimum = c
    if minimum > d:
        minimum = d
    return minimum
a = [int(i) for i in input().split()]

print(min(a[0], a[1], a[2], a[3]))