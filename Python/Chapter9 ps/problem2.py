def game():
    high_score=int(input("Enter the input : "))
    with open("Hi-score.txt","a+") as f:
        f.seek(0)
        content=f.read()
        f.seek(0)
        
        print("Content : ",content)
        if content=="":
            f.write(str(high_score))
        else:
            prev_score=int(content)
            if prev_score<high_score:
                f.truncate()
                f.write(str(high_score))
        
game()