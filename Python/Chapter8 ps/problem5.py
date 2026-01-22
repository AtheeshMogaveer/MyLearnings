n=int(input("Enter the value : "))

def star(n):
    if n>=1:
        print("*"*n)
        
        star(n-1)
star(n)