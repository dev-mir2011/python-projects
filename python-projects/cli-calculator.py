first_number = int(input("Enter The first Number: "))
operator = input("The operator i.e(+, -, *, /, **, //, %): ").strip()
second_number = int(input("Enter The second Number: "))

if operator == "+":
    print(first_number + second_number)

elif operator == "-":
    print(first_number - second_number)

elif operator == "*":
    print(first_number * second_number)

elif operator == "/":
    print(first_number / second_number)

elif operator == "**":
    print(first_number**second_number)

elif operator == "//":
    print(first_number // second_number)

elif operator == "%":
    print(first_number % second_number)

else:
    print("This is not a vaild operator")
