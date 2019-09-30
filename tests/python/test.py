def insert(_str, len):
    count = 0
    flag = 0
    a = list(_str)
    for i in range(len):
        if a[i] == "#":
            count +=1
            a[i]=a[flag]
            a[flag] ="#"
            flag+=1
    print("".join(a))
    return count
print(insert("ABC###DE#F", 10))