# First number
n1 = int(input("enter first number ---> "))
# Second number
n2 = int(input("enter second number --->"))
# Operation selection
o = input("select operator (add, sub, division, multiplication, remainder(div), \n exponention(first no. to the power second no.)) options(a ,s ,d ,m ,rd ,e)")
op = o.lower()
# logic
def cal(x,y,z):
    if z == "a":
        a = x + y
        print(f"Sum of {x} and {y} is {a}")

    elif z == "s":
        s = x-y
        print(f"Diffrence of {x} and {y} is {s}")

    
    elif z == "d":
        d = x/y
        print(f"Quotient of {x} and {y} is {d}")


    elif z == "m":
        m = x*y
        print(f"Product of {x} and {y} is {m}")


    elif z == "rd":
        rd = x%y
        print(f"Remainder of {x} and {y} is {rd}")

    elif z == "e":
        e = x**y
        print(f"Power of {x} and {y} is {e}")



cal(n1,n2,op)