list1=["Sumanth","th","Aizen","athu"]

def remover(l,word):
    n=[]
    for item in l:
        if not(item == word):
            n.append(item.strip(word))
    return n
print(remover(list1,"th"))

