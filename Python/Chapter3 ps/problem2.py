name=input("Enter your name : ")
date= input("Enter the date : ")

letter=f'''
Dear <|name|>
You are selected 
<|date|>
'''

print(letter.replace("<|name|>",name).replace("<|date|>",date))