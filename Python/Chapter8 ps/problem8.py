n=int(input("Enter the number : "))
def multTable(n):
    for i in range(1,11):
        print(f"{i} X {n} = {i*n}")
multTable(n)