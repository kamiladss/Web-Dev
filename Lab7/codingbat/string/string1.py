#1
def combo_string(a, b):
    if len(a) > len(b):
        return b + a + b
    else:
        return a + b + a
    
#2
def extra_end(str):
    return str[-2:] * 3
#3
def first_half(str):
    return str[:len(str)//2]

#4
def first_two(str):
    return str[:2]
#5
def hello_name(name):
        
    s = "Hello " + name + "!"
    return s

#6
def left2(str):
    return str[2:] + str[:2]

#7
def make_abba(a, b):
    return a + b * 2 + a

#8
def make_out_word(out, word):
    return out[:2] + word + out[2:]

#9
def make_tags(tag, word):
    return "<" + tag + ">" + word + "</" + tag + ">"

#10
def non_start(a, b):
    return a[1:] + b[1:]

#11
def without_end(str):
    return str[1 : -1]