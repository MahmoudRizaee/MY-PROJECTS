import random

lower = "abcdefghijklmnopqrstuvwxyz"
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
numberes = "0123456789"
symbols = "[]{}()*;/,._~"

all = lower + upper + numberes + symbols
length = 16
password = "".join(random.sample(all, length))
print(password)

