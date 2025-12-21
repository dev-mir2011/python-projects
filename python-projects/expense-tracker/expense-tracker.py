import tkinter as tk
from tkinter import ttk, messagebox
import csv
import os
from datetime import date

FILE_NAME = "expenses.csv"


class ExpenseTracker:
    def __init__(self, root):
        self.root = root
        self.root.title("Expense Tracker")
        self.root.geometry("700x450")
        self.root.resizable(False, False)

        self.create_widgets()
        self.load_expenses()

    def create_widgets(self):
        # ---------- Input Frame ----------
        input_frame = tk.Frame(self.root, padx=10, pady=10)
        input_frame.pack(fill="x")

        tk.Label(input_frame, text="Date").grid(row=0, column=0)
        tk.Label(input_frame, text="Category").grid(row=0, column=1)
        tk.Label(input_frame, text="Description").grid(row=0, column=2)
        tk.Label(input_frame, text="Amount").grid(row=0, column=3)

        self.date_entry = tk.Entry(input_frame, width=12)
        self.date_entry.grid(row=1, column=0, padx=5)
        self.date_entry.insert(0, date.today().isoformat())

        self.category_entry = tk.Entry(input_frame, width=15)
        self.category_entry.grid(row=1, column=1, padx=5)

        self.desc_entry = tk.Entry(input_frame, width=25)
        self.desc_entry.grid(row=1, column=2, padx=5)

        self.amount_entry = tk.Entry(input_frame, width=10)
        self.amount_entry.grid(row=1, column=3, padx=5)

        add_btn = tk.Button(
            input_frame,
            text="Add Expense",
            command=self.add_expense,
            bg="#4CAF50",
            fg="white",
        )
        add_btn.grid(row=1, column=4, padx=10)

        # ---------- Table ----------
        columns = ("date", "category", "description", "amount")
        self.tree = ttk.Treeview(self.root, columns=columns, show="headings")

        self.tree.heading("date", text="Date")
        self.tree.heading("category", text="Category")
        self.tree.heading("description", text="Description")
        self.tree.heading("amount", text="Amount")

        self.tree.column("date", width=90)
        self.tree.column("category", width=120)
        self.tree.column("description", width=280)
        self.tree.column("amount", width=90)

        self.tree.pack(fill="both", expand=True, padx=10, pady=10)

    def add_expense(self):
        date_val = self.date_entry.get()
        category = self.category_entry.get()
        description = self.desc_entry.get()
        amount = self.amount_entry.get()

        if not date_val or not category or not amount:
            messagebox.showerror("Error", "Date, Category and Amount are required")
            return

        try:
            amount = float(amount)
        except ValueError:
            messagebox.showerror("Error", "Amount must be a number")
            return

        self.tree.insert("", "end", values=(date_val, category, description, amount))
        self.save_expense(date_val, category, description, amount)

        self.category_entry.delete(0, tk.END)
        self.desc_entry.delete(0, tk.END)
        self.amount_entry.delete(0, tk.END)

    def save_expense(self, date_val, category, description, amount):
        file_exists = os.path.isfile(FILE_NAME)

        with open(FILE_NAME, "a", newline="") as file:
            writer = csv.writer(file)
            if not file_exists:
                writer.writerow(["Date", "Category", "Description", "Amount"])
            writer.writerow([date_val, category, description, amount])

    def load_expenses(self):
        if not os.path.isfile(FILE_NAME):
            return

        with open(FILE_NAME, "r") as file:
            reader = csv.reader(file)
            next(reader)  # skip header
            for row in reader:
                self.tree.insert("", "end", values=row)


if __name__ == "__main__":
    root = tk.Tk()
    app = ExpenseTracker(root)
    root.mainloop()
