import tkinter as tk
from tkinter import *
from datetime import datetime
import pandas as pd
from matplotlib import pyplot as plt
import os

df = pd.DataFrame(columns=["Date", "Expenses"])
FILENAME = r"C:\Users\Ruhaan Mir\Desktop\software development\Python\git-projects\expense_tracker_app\expenses.csv"
vd = ""


def add_date(date):
    # if file exists, load it
    if os.path.exists(FILENAME):
        df = pd.read_csv(FILENAME)
    else:
        df = pd.DataFrame(columns=["Date", "Expenses"])

    # add new row with empty expenses
    df = pd.concat([df, pd.DataFrame([[date, None]], columns=["Date", "Expenses"])], ignore_index=True)
    df.to_csv(FILENAME, index=False)

def add_expense(date, expense):
    # must load file
    if not os.path.exists(FILENAME):
        print("No file found.")
        return
    
    df = pd.read_csv(FILENAME)

    # find first row with that date and empty expense
    mask = (df["Date"] == date) & (df["Expenses"].isna())
    if mask.any():
        df.loc[mask, "Expenses"] = expense
    else:
        # if no empty row found, append new row
        df = pd.concat([df, pd.DataFrame([[date, expense]], columns=["Date", "Expenses"])], ignore_index=True)

    df.to_csv(FILENAME, index=False)


def submit_date():
    date_str = di.get()
    try:
        # Parse date in DD/MM/YYYY format
        valid_date = datetime.strptime(date_str, "%d/%m/%Y").date()
        valid_date = vd
        #elements
        dit.pack_forget()
        di.pack_forget()
        nb.pack_forget()
        et.pack()
        ee.pack()
        nb1.pack()
        db.pack()
        add_date(valid_date)
    
    except:
        nb.config(fg="red")


def data_screen():
    expense = ee.get()
    es = int(expense)
    add_expense(vd,es)



def final_screen():
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
    



root = tk.Tk()

root.state("zoomed")
root.config(bg="#848484")
root.title("Expense Tracker")

#main screen elements
t = Label(root, text="Expense Tracker", font=("Arial", 100), bg="#848484")
dit = Label(root, text="Enter Today's date:- ", font=("Arial", 50), bg="#848484")
di = Entry(root, width=20, font=("Arial", 30))
nb = tk.Button(root, text="Next", font=("Arial", 25), bg="#848484", command= submit_date)
#data screen
et = Label(root, text="Money spent:- ", font=("Arial", 50), bg="#848484")
ee = Entry(root, width=20, font=("Arial", 30))
nb1 = tk.Button(root, text="Next", font=("Arial", 25), bg="#848484", command= data_screen)
db = tk.Button(root, text="Done", font=("Arial", 25), bg="#848484", command= final_screen)
#final screen
t1 = Label(root, text="!Your done!", font=("Arial", 100), bg="#848484")
p1 = Label(root, text="To see a graph of spendings of this month check here:- ", font=("Arial", 25), bg="#848484")
gb = tk.Button(root, text="Show Graph", font=("Arial", 25), bg="#848484")
p2 = Label(root, text="Close Window", font=("Arial", 25), bg="#848484")
cwb = tk.Button(root, text="Close Window", font=("Arial", 25), bg="#848484")
#main screen pack
t.pack()
dit.pack(pady=10)
di.pack(pady=10)
nb.pack(pady=10)
root.mainloop()