import tkinter as tk
from tkinter import *
from datetime import datetime
import pandas as pd
from matplotlib import pyplot as plt

df = pd.read_csv("expenses.csv")

def submit_date():
    date_str = di.get()
    try:
        # Parse date in DD/MM/YYYY format
        valid_date = datetime.strptime(date_str, "%d/%m/%Y")
        #elements
    
    except:
        root.config(bg='grey')


def data_screen():
    expense = ee.get()
    



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
nb1 = tk.Button(root, text="Next", font=("Arial", 25), bg="#848484")
db = tk.Button(root, text="Done", font=("Arial", 25), bg="#848484")
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