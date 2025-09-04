import tkinter as tk
from tkinter import *
from datetime import datetime
import pandas as pd
from matplotlib import pyplot as plt
import os

FILENAME = r"C:\Users\Ruhaan Mir\Desktop\software development\Python\git-projects\expense_tracker_app\expenses.csv"


class functions:
    
 valid_date = ""

 def add_date(date):
    # Ensure date is datetime
    date = pd.to_datetime(date, dayfirst=True)

    if os.path.exists(FILENAME) and os.path.getsize(FILENAME) > 0:
        df = pd.read_csv(FILENAME, dayfirst=True)
        df["Date"] = pd.to_datetime(df["Date"], dayfirst=True)
    else:
        df = pd.DataFrame(columns=["Date", "Expenses"])

    # Only add date if it doesn't already exist
    if not (df["Date"] == date).any():
        df.loc[len(df)] = [date, None]

    # Sort by date
    df = df.sort_values(by="Date", ascending=True)

    # Save in DD/MM/YYYY format
    df["Date"] = df["Date"].dt.strftime("%d/%m/%Y")
    df.to_csv(FILENAME, index=False)


 def add_expense(date, expense, mode="add"):
    date = pd.to_datetime(date, dayfirst=True)

    if not os.path.exists(FILENAME) or os.path.getsize(FILENAME) == 0:
        df = pd.DataFrame([[date, expense]], columns=["Date", "Expenses"])
    else:
        df = pd.read_csv(FILENAME, dayfirst=True)
        df["Date"] = pd.to_datetime(df["Date"], dayfirst=True)

        mask = (df["Date"] == date)

        if mask.any():
            if mode == "replace":
                df.loc[mask, "Expenses"] = expense
            else:
                df.loc[mask, "Expenses"] = df.loc[mask, "Expenses"].fillna(0) + expense
        else:
            df.loc[len(df)] = [date, expense]

    # Sort by date
    df = df.sort_values(by="Date", ascending=True)

    # Save in DD/MM/YYYY format
    df["Date"] = df["Date"].dt.strftime("%d/%m/%Y")
    df.to_csv(FILENAME, index=False)



 def submit_date():
     date_str = di.get()
     try:
        #parse date in DD/MM/YYYY format
        functions.valid_date = datetime.strptime(date_str, "%d/%m/%Y").date()
        #elements
        dit.pack_forget()
        di.pack_forget()
        nb.pack_forget()
        et.pack()
        ee.pack()
        nb1.pack()
        db.pack()
        functions.add_date(functions.valid_date)
    
     except:
        nb.config(fg="red")


 def data_screen():
     di.delete(0, END)
     
     expense = ee.get()

     if expense.strip() != "": 
         es = int(expense)
         to = es
         functions.add_expense(functions.valid_date,to)
         to +=es

         ee.delete(0, END)

     else:
          nb1.config(fg="red")



 def final_screen():
     #final addition of expenses
     
     expense = ee.get()
     if expense.strip() != "": 
         es = int(expense)
         to = es
         functions.add_expense(functions.valid_date,to)
         to +=es

         ee.delete(0, END)

     else:
          pass

     #show new screen
     t.pack_forget()
     et.pack_forget()
     ee.pack_forget()
     nb1.pack_forget()
     db.pack_forget()
     t1.pack()
     p1.pack()
     gb.pack()
     p2.pack()
     cwb.pack()
     anvt.pack()
     anv.pack()

 def graph():
     pp = pd.read_csv(FILENAME)

     # Convert Date column to datetime (so plotting is easier)
     pp["Date"] = pd.to_datetime(pp["Date"])

     # Plot
     plt.figure(figsize=(8,5))
     plt.plot(pp["Date"], pp["Expenses"], marker="o", linestyle="-")

     plt.title("Expenses Over Time")
     plt.xlabel("Date")
     plt.ylabel("Expenses")
     plt.grid(True)
     plt.show()
 
 def add_another_value():
     t1.pack_forget()
     p1.pack_forget()
     gb.pack_forget()
     p2.pack_forget()
     cwb.pack_forget()
     anvt.pack_forget()
     anv.pack_forget()
     t.pack()
     dit.pack()
     di.pack()
     nb.pack()


root = tk.Tk()

root.state("zoomed")
root.config(bg="#848484")
root.title("Expense Tracker")

#main screen elements
t = Label(root, text="Expense Tracker", font=("Arial", 100), bg="#848484")
dit = Label(root, text="Enter Today's date (DD/MM/YYYY):- ", font=("Arial", 50), bg="#848484")
di = Entry(root, width=20, font=("Arial", 30))
nb = tk.Button(root, text="Next", font=("Arial", 25), bg="#848484", command= functions.submit_date)
#data screen
et = Label(root, text="Money spent:- ", font=("Arial", 50), bg="#848484")
ee = Entry(root, width=20, font=("Arial", 30))
nb1 = tk.Button(root, text="Next", font=("Arial", 25), bg="#848484", command= functions.data_screen)
db = tk.Button(root, text="Done", font=("Arial", 25), bg="#848484", command= functions.final_screen)
#final screen
t1 = Label(root, text="!Your done!", font=("Arial", 100), bg="#848484")
p1 = Label(root, text="To see a graph of spendings of this month check here:- ", font=("Arial", 25), bg="#848484")
gb = tk.Button(root, text="Show Graph", font=("Arial", 25), bg="#848484",command=functions.graph)
p2 = Label(root, text="Close Window", font=("Arial", 25), bg="#848484")
cwb = tk.Button(root, text="Close Window", font=("Arial", 25), bg="#848484", command= root.destroy)
anvt = Label(root, text="Add values for another date", font=("Arial", 25), bg="#848484")
anv = tk.Button(root, text="Add Values for another day", font=("Arial", 25), bg="#848484", command= functions.add_another_value)
#main screen pack
t.pack()
dit.pack(pady=10)
di.pack(pady=10)
nb.pack(pady=10)
root.mainloop()