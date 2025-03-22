#1
def lone_sum(a, b, c):

    sum = 0

    if a != b and a != c:
        sum += a
    if b != a and b != c:
        sum += b
    if c != a and c != b:
        sum += c
        
    return sum
#2
def lucky_sum(a, b, c):
    
    if a == 13:
        return 0
    elif b == 13:
        return a
    elif c == 13:
        return a + b
    else:
        return a + b + c
    
#3
def make_bricks(small, big, goal):
    
    if goal >= big * 5:
        remainder = goal - (big * 5)
    else:
        remainder = goal % 5

    if small >= remainder:
        return True
        
    return False

#4
def make_chocolate(small, big, goal):
    
    if goal >= big * 5:
        remainder = goal - big * 5
    else:
        remainder = goal % 5

    if remainder <= small:
        return remainder
    else:
        return -1
    
#5
def no_teen_sum(a, b, c):
    
    def fix_teen(n):
        if 13 <= n <= 19 and n != 15 and n != 16:
            return 0
        return n
    
    return fix_teen(a) + fix_teen(b) + fix_teen(c)

#6
def round_sum(a, b, c):
    return round10(a) + round10(b) + round10(c)
  
def round10(n):

    if n % 10 >= 5:
        return n + (10 - n % 10)
    else:
        return n - (n % 10)
