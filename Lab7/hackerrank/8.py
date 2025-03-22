# lists

if __name__ == '__main__':

    n = int(input())
    array = []
    for i in range(n):

        command = input().split(" ")

        if (command[0] == "insert"):
            i = int(command[1])
            e = int(command[2])
            array.insert(i, e)
        elif (command[0] == "print"):
            print(array)
        elif (command[0] == "remove"):
            e = int(command[1])
            array.remove(e)
        elif (command[0] == "append"):
            e = int(command[1])
            array.append(e)
        elif (command[0] == "sort"):
            array.sort()
        elif (command[0] == "pop"):
            array.pop()
        elif (command[0] == "reverse"):
            array.reverse()