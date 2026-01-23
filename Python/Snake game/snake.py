import random

computerChoice= random.choice(["s","w","g"])
inputChoice=input("Enter the s for snake , w for water and g for gun : ")
print("Computer choice : ",computerChoice)
print("Your choice : ",inputChoice)
if inputChoice=="s" and computerChoice=="w":
    print("You win")
elif inputChoice=="w" and computerChoice=="g":
    print("You win")
elif inputChoice=="g" and computerChoice=="s":
    print("You win")
elif inputChoice == computerChoice:
    print("Thats a draw")
else: 
    print("Computer wins")






