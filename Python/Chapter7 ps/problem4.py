num=int(input("Enter the number : "))
prime=True
for i in range(2,num//2):
    if num%i==0:
        prime=False
if prime:
    print("Prime number")
else:
    print("Not prime number")