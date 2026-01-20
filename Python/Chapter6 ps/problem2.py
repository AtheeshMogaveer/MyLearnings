mark1=int(input("Enter the mark : "))
mark2=int(input("Enter the mark : "))
mark3=int(input("Enter the mark : "))

if ((mark1+mark2+mark3)/300) *100 >40:
    if mark1>33 or mark2>33 or mark3>33:
        print("pass")
    else:
        print("fail")
else:
    print('fail')