num1=int(input("Enter the value : "))
num2=int(input("Enter the value : "))
num3=int(input("Enter the value : "))
num4=int(input("Enter the value : "))

if num1>num2 :
    if num1>num3:
        if num1>num4:
            print(f"Greatest is {num1} ")
        else:
            print(f"Greatest is {num4}")
    else:
        if num3>num4:
            print(f"Greatest is {num3} ")
        else:
            print(f"Greatest is {num4}")
else:
    if num2>num3:
        if num2>num4:
            print(f"Greatest is {num2}")
        else:
            print(f"Greatest is {num4}")
    else:
        if num3>num4:
            print(f"Greatest is {num3} ")
        else:
            print(f"Greatest is {num4}")

        
    