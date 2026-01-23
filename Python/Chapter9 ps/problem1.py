exist=-1
with open("poem.txt","r") as f:
    str1=f.read()
    
    exist=str1.find("twinkle")
    
    # print(exists)

if exist>-1:
    print("Exists")
else:
    print("Don't")
