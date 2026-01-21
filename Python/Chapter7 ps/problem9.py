n=int(input("Enter the number : "))
print("*"*n)
for i in range(2,n+1):
    if i != n:
        print("*",end="")
        print(" "*(n-2),end="")
        print("*")
    else:
        print("*"*n)