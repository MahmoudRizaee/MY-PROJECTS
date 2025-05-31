import random
# -----------------------Lesson5-------------------------- #
'''
# Variables
x = 10

We can store every type of values, like: Chercter, Number, Boolean

# Multiple Values:
    We can store multiple values in a variable.
Example:
    x, y, z = 90, 80, 10
    print(x)
    print(y)
    print(z)
    # or
    print(x,y,z)

NOTE: You can't string + number

# Global Variable:
# Global => When we set a global it's very easy for us to call it even out of the function.
Global Variables:
    Variables that are created outside of a function (as in all of the examples above) are known as global variables.
    Global variables can be used by everyone, both inside of functions and outside.
    Examples:
        x = '2Pac Shokur'
        def my_func():
            global x
            x = "XXX Tentation"
        my_func()
        print(x)
        # ----------------------- #
        x = "awesome"
        def myfunc():
            x = "fantastic"
            print("Python is " + x)
        myfunc()
        print("Python is " + x)
        # ----------------------- #
        def memo():
            global x
            x = "Hi there, I'm seriouce now"
        memo()
        print(x)

# DataType:
    Text Type:          String
    Numberic Types:     Intiger, Float, Complex
    Sequence Types:     List, Tuple, Range
    Mapping Type:       Dictionary
    Set Type:           Set, Forzenset
    Boolean Type:       Boolean
    Binary Types        Bytes, Bytearray, Memoryview

# Text Type:
    String
        x = "Hello Python '13.3.1' version."

# Numberic Types:
    Intiger:
        x = 1 2 3 4 5 6 7 8 9 10 .....

    Float:
        x = 1.1, 2.11 , 3.14, 15.2,.....
NOTE: When you put e at the end of a number, the result is float. e means => eoylar

    Complex:
        Every number get "j" at the end that complex.
        x = 2j
NOTE: In + and - the result is the seem, but in * and / is the result is true.
    Example:
        x = 2/5j
        print(x)
        y = 2 * 4j
        print(y)

        g = 2 + 3j
        print(g)
        j = 3 - 10j
        print(j)

# Sequence Type:
    List
        x = ["HTMl", "CSS", "BOOTSTRAP", "JAVASCRIPT", "REACT", "NEXTJS", "PYTHON"]

    Tuple
        x = ("Apple", "Banana", "Cherry")

    Range
        x = range(6)
    Example:
        xx = range(1, 101)
        for i in xx:
            print(i)
    Example2:
        print(random.randrange(100, 201))

# Casting python:
    Datatype => Int, Str , Float, bool ...complex

NOTE: You can't to change str to int. In a state this is acceptable.
    when you have only a number or numbers in string.
    Str to Int:
        c = "3384"
        print(c) # as str
        print(type(c)) # String
        c = int(c) # casting...
        print(c) # as int
        print(type(c)) # Inteejer

    Int to Str:
        c = 1234 # 1234 Varible
        print(c) # Show 1234 as inteejer
        c = str(c) # "1234" Variable as string
        print(type(c)) # Show the type as second variable
        print(c) # Show only result of variable.

    Int to Bool:
        c = 1234
        print(c) # 1234 as int
        print(type(c)) # Inteejer

        c = bool(c)
        print(c) # true
        print(type(c)) # Boolean

        c = 0
        print(c) # as inteejer
        print(type(c))
        c = bool(c)
        print(c) # false
        print(type(c)) # Boolean

    Bool to Int:
        c = True
        print(c) # as bool
        print(type(c)) # Boolean
        c = int(c)
        print(c) # 1 as int
        print(type(c)) # Inteejer
    Reverse:
        c = False
        print(c)
        print(type(c))
        c = int(c)
        print(c)
        print(type(c))

    Bool to Str:
        c = False
        print(c) # as bool
        print(type(c)) # Boolean
        c = str(c)
        print(c) # as str
        print(type(c)) # String

    Str to Bool:
        c = "Hello Python Users"
        print(c) # as str
        print(type(c)) # String
        c = bool(c)
        print(c) # as bool
        print(type(c)) # Boolean
    Reverse:
        c = ""
        print(c) # as string
        print(type(c)) # String
        c = bool(c)
        print(c) # as bool
        print(type(c)) # Boolean

    Float to String and Number ans Bool:
        c = 0.12
        print(c)
        c = int(c)
        print(c)
        print(type(c))

        c = 0.12
        print(c)
        c = bool(c)
        print(c)
        print(type(c))

        c = 0.12
        print(c)
        c = str(c)
        print(c)
        print(type(c))

        c = "232"
        print(c)
        c = float(c)
        print(c)
        print(type(c))

    Str => bool and bool => int and int => str and again str to bool
        mc = "Mixed casting"
        mc = bool(mc)
        mc = int(mc)
        mc = str(mc)
        # "1"
        print(mc)
        print(type(mc))

        mcs = bool(mc)
        print(mcs)
'''
x = "Hello Guys Hope you doing well i am here to teach you some things about python loops"
for x in range(0,11):
    for y in range(0, 11):
        print(x, "x", y, " = " , x*y)
