# ----------------------------Lesson6-------------------------- #
'''
# --------------Strings-------------- #
# Strings is Data which is very important.
# The diffrences between double and single cotation.
    Example:
        a = "I love 'Python'🫦."
        print(a)

# --------Multiline-------- #
# For creating Multiline Strings, put it three single or double cotation.

# --------Looping String-------- #
for x in "banana is a fruite.":
    print(x)

# --------String Length-------- #
To get the length of a string, use the len() function.
    slen = "Mahmoud Naeebi"
    print(len(slen))

# --------Check String-------- #
To check if a certain phrase or character is present in a string, we can use the keyword in.
Example1:
    txt = "Try more to achive the best things."
    print("Try" in txt)
Example2: Using if and else conditions.
    if "achives" in txt:
        print("Yes, 'achive' is in the sentences.")
    else:
        print("NO, I'm sorry there is not!")

# --------Check if Not-------- #
To check if a certain phrase or character is NOT present in a string, we can use the keyword not in.
    n = [1,3,4,5,6,576,8,78,75,3,34,42,5,6478,6,86,8,754,432,423,3]
    if 6478 not in n:
        print("Yeah, there isn't a number like this.")
    else:
        print("Sorry, there is that number.")

# --------------Slicing-------------- #
Slice Form the Start:
    s = "Hello, world!"
    print(s[:10]) # Hello,wor
    print(b[:-1]) # print except the last index ! => hello,world

Slice To the End:
    s = "Hello, world!"
    print(s[8:])
    b = 'hello, world!'
    print(b[2:]) # print except index 0,1 => llo, world!

Negative Indexing:
    b = "Hello, World!"
    print(b[-5:-2])

Spacific Charcter:
    print(b[0]) # print only index 0 => h

# --------------Python-Modify Strings-------------- #
# -------Upper Case-------- #
# It makes your text Bigger letters.
    u = "mahmoud naeebi"
    print(u.upper())

# -------Lower Case-------- #
# It returns string to lowerCase
    l = "MAHMOUD NAEEBI"
    print(l.lower())

# ------Remove WhiteSpace------ #
# The strip() method removes any whitespace from the beginning or the end:
    s = '       I want become a professional in Programming      '
    print(s.strip())

# ------Replace String------ #
# The replace() method replaces a string with another string:
    a = "I love JavaScript and Python.❤️"
    print(a.replace("JavaScript", "ReactJS"))

# ------Split String------ #
# The split() method splits the string into substrings if it finds instances of the separator:
    a = "12,346,6,7,78,9,5,3,32543,64,57,68,79,7,89,"
    print(len(a))
    print(a.split(","))


# ---------Example of Modify strings--------- #
s = "       let's come bit eachother like a man, although i let you to beat me again but this time is not like past, don't show me this kids"
s = s.strip()
s = s.upper()
s = s.replace("LET'S" , "Come")
# s = s.lower()[5:9]
s = s.split(",")
print(s)

# ------Loop------ #
bnb = "let's put that things away and think more about yourself"
for i in bnb:
    print(bnb)

# --------------Python-StringConcatenation-------------- #
# To concatenate, or combine, two strings you can use the + operator.
# Concatenation is like joining to strings with eachothers.
    c = "Hello"
    d = "Python"
    e = c + " " + d
    v = e.upper()
    print(v)

# ---------------String Format--------------- #
As we learned in the Python Variables chapter, we cannot combine strings and numbers like this:
ERROR:
    age = 36
    txt = "My name is John, I am " + age
    print(txt)
Sulotion is Useing Format string:
    age = 19
    sen = f"I am {age} years old."
    print(sen)
    # /////////////// #
    Item_NO = 110032
    Model = "BMW"
    Number = 1
    contry = "'USA' United State Amarica"
    my_order = f"""
    I want a Car, it must be {Model}. I'm from {contry} , last day i saw a product of your company in internet i know just the Item-No and number which are {Item_NO}and {Number}.
    """
    print(my_order)
    # /////////////// #
    ii = "Mahdi"
    oo = "{} is my Friend.".format(ii)
    print(oo)

# ---------------Escape Character--------------- #
# To insert charcters that are illegal in string, use an escape charcter.
# An escape charcter is a backslash \ followed by the charcter you want to insert.
    Example
        # txt = "We are the legends of\" sadness \"that call us Afghans."
        # print(txt)
# Other escape characters used in Python:

# 1:-    \'	    Single Quote
# 2:-    \\	    Backslash
# 3:-    \n	    New Line
# 4:-    \r	    Carriage Return
# 5:-    \t	    Tab
# 6:-    \b	    Backspace
# 7:-    \f	    Form Feed
# 8:-    \ooo	    Octal value
# 9:-    \xhh	    Hex value

# ---------------String Methods--------------- #

'''

























