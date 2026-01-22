
num1=int(input("Enter the number : "))
num2=int(input("Enter the number : "))
num3=int(input("Enter the number : "))

def greatest(a,b,c):
    if a>b and a>c:
        print(f"{a} is the greatest number ")
    elif a<b and b>c:
        print(f"{b} is the greatest number ")
    else:
        print(f"{c} is the greatest number ")

greatest(num1,num2,num3)