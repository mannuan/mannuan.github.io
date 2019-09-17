# start = 5
# end = 9995
res = []
for i in range(0, 9996):
    if i % 13 == 5:
        res.append(i);
print(res)
print(len(res))