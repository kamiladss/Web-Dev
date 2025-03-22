#1
def sleep_in(weekday, vacation):
    
    if vacation == True:
        return True
    else:
        if weekday == True:
            return False
        else:
            return True
        
#2
def diff21(n):
    if n > 21:
        return abs(n - 21) * 2
    else:
        return abs(n - 21)
#3
def near_hundred(n):
    return abs(100 - n) <= 10 or abs(200 - n) <= 10

#4
def missing_char(str, n):
    return str[:n] + str[n+1:]

#5
def monkey_trouble(a_smile, b_smile):
    
    if a_smile and b_smile:
        return True
    if not a_smile and not b_smile:
        return True
    return False

#6
def parrot_trouble(talking, hour):
    
    if talking and (hour < 7 or hour > 20):
        return True
    else: 
        return False

#7
def pos_neg(a, b, negative):
    
    if negative: 
        return a < 0 and b < 0
    else: 
        return a > 0 and b < 0 or a < 0 and b > 0
#8
def front_back(str):
    
    if len(str) <= 1:
        return str
    middle = str[1: len(str)-1]    
    return str[-1] + middle + str[0]
#9
def sum_double(a, b):
    
    if a == b:
        return (a + b) * 2  
    else:
        return a + b  
#10
def makes10(a, b):
    return a == 10 or b == 10 or a + b == 10

#11
def not_string(str):
    
    if str[0:3] == "not":
        return str
    return "not " + str

#12
def front3(str):

    front = str[:3]
    return front * 3