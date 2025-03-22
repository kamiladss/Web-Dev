#1
def alarm_clock(day, vacation):
    
    if vacation:
        if 1 <= day <= 5:
            return '10:00'
        else:
            return 'off'
    else:
        if 1 <= day <= 5:
            return '7:00'  
        else:
            return '10:00'

#2
def caught_speeding(speed, is_birthday):
    
    if is_birthday:
        if speed <= 65:
            return 0
        elif 66 <= speed <= 85:
            return 1
        else:
            return 2         
    else:
        if speed <= 60:
            return 0
        elif 61 <= speed <= 80:
            return 1
        else:
            return 2
        
#3
def cigar_party(cigars, is_weekend):
     
    if is_weekend:
        return cigars >= 40
    return 40 <= cigars <= 60

#4
def date_fashion(you, date):
    
    if you <= 2 or date <= 2:
        return 0
    if you >= 8 or date >= 8:
        return 2
    
    return 1

#5
def in1to10(n, outside_mode):
    
    if outside_mode:
        return n <= 1 or n >= 10
    else:
        return 1 <= n <= 10
#6
def love6(a, b):
    return a == 6 or b == 6 or a + b == 6 or abs(a - b) == 6

#7
def near_ten(num):
    return (num % 10) <= 2 or (num % 10 ) >= 8

#8
def sorta_sum(a, b):

    total_sum = a + b
    if 10 <= total_sum <= 19:
        return 20
    
    return total_sum

#9
def squirrel_play(temp, is_summer):
    
    if is_summer:
        return 60 <= temp <= 100
    return 60 <= temp <= 90
