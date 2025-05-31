# -------------------Lesson3------------------- #
# ---------Number---------- #
import random
'''
# Rundom Numbers
    We can generate random numbers, it means we can make a range between 1 - 10 or 1 - 100 or ...
Rules of randoms numbers.
    1:- Import random at the top of the page.
    2:- You can use random in variables.
    3:- Don't forget to set a range.
        Example:
            x = random.randrange(1,10)
            print(x)
'''
# a = 120
# b = 80
# c = 100
# d = random.randrange(1,10)
# e = random.randrange(10 , 20)
# print(a , b , c , d , e)
# print(a + b + c + d)
# print(a + b + c * d)
# print(d + e)

# S = 10 + 2 - 50 * 2 / 2
# print(S)  # Answer is -38

# r = input('Enter a number')
# print(r)

# --------String--------- #
'''
# String must be in single cotation or double cotation
    1:- ''
    2:- ""
# Why we use Tree Single Cotation or Tree Double Cotation.
Thers is difference between Tree Cotation and One Cotation.

# The difference between Single Cotation and Double Cotation:
    Example:
        a = "Mahmoud is 'Clover' man. 😎"
        print(a)

# Formating of Strings:
# If you want call a variable in String line use Formating like exmaple below:
NOTE: There is two way to use formating.
Example:
    my_name = 'Mahmoud'
    Names = f"My Name is {my_name}"
    print(Names)

Example2:
    array = [
        ["Navid", "Omid", "Shoja", "Mahdi"],
        ["JavaScript Developer", " Python Developer", "C++ Developers", "Php Developers"],
        [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        ]
    r = f"""
        Name: {array[0][0]}
        Job: {array[1][0]}
        Age: {array[2][6]}
    """
    print(r)

# Second way of using formating:
    var1 = 18
    print(var2)
    var2 = "I'm {} years old.".format(var1)


# ---------Boolean-------- #
# Boolean have two value:
    1:- True
    2:- False
NOTE: Boolean has no type like number or Charcter.
# We can generate boolean by these symbols: [ == >= <= != > < and or not  ]
'''
# r = 10 != 90
# t = 10 == 10
# y = 10 <= 55
# u = 11 >= 10
# num = 20 or 10
# print(num)

a = "Python"
b = 'javaScript'
c = f"I Love {b} and {a}."
db = f"{b} and {a} are both fun. spicially when you create backend with {a} and create frontend by {b}.😜"
print(db)

n = "THIS IS A EXAMPLE OF FORMATING IN PYTHON."
print(n)

