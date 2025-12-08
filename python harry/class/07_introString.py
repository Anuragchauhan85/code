#String 

name='Anurag'        #single quoted string            it is immutable =means not able to change 
name="Anurag "       #double quoted string            string indexing from front 01234  , from back -1-2-3-4
name='''Anurag'''    #triple quoted string



#String slicing      to get the small part of string

name="Anurag "
name_short=name[0:3]
print(name_short)
char1=name[1]
print(char1)

print(name[-4:-1])     #in negative indexing put positive indexing then try to solve for easy 
print(name[1:4])

print(name[:4])        #same as print(name[0:4])
print(name[1:])        #same as print(name[1:5]) 
print(name[1:5])


#Slicing with strings
word="amazing"
print(word[1:6:2])    #1 is starting index, 6 is ending index, 2 is how many times have to skip

alphabets="abcdefghijklmnopqrstuvwxyz"
print(alphabets[1:25:5])


#string function

print(len(name))                #to find the length of string
print(name.endswith("rag"))     #to find string ends with given char it give true or false
print(name.startswith("Anu"))   #to find string starts with given char it give true or false   also use A or a same otherwise it give error
print(word.capitalize())          #to make first letter capital