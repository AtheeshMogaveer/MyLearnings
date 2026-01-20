p1="make a lot of money"
p2="buy now"
p3="subscribe this"
p4= "click this"

str1=input("Enter the striing : ")
if p1 in str1 or p2 in str1 or p3 in str1 or p4 in str1:
    print("Spammer")
else: 
    print("Good to Go")