n=int(input("Enter the number : "))

for k in range(n):
    for i in range(k,n):
        print(" ",end="")
    for j in range(0,(k*2)+1):
        print("*",end="")
    print("")