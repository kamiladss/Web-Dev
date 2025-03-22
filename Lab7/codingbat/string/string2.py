#1
def cat_dog(str):
    return str.count("cat") == str.count("dog")

#2
def count_code(str):

    count = 0

    for i in range(len(str) - 3):
        if str[i:i+2] == "co" and str[i+3] == "e":
            count += 1
    return count

#3
def count_hi(str):

    sum = 0
    for i in range(len(str)-1):
        if str[i:i+2] == 'hi':
            sum += 1
    return sum

#4
def double_char(str):

    str1 = ""

    for c in str:
        str1 += c * 2
    return str1

#5
def end_other(a, b):
    a = a.lower()
    b = b.lower()

    return a.endswith(b) or b.endswith(a)

#6
def xyz_there(str):
    return "xyz" in str and not str.startswith("x")

def xyz_there(str):
    return 'xyz' in str.replace('.xyz', '')