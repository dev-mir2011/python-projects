import tkinter as tk
from tkinter import *
import random as r

class game:
    num = 0
    def gst():
        # Hide main screen elements
        t1.pack_forget()
        grl.pack_forget()
        gri.pack_forget()
        pb.pack_forget()
        # Show play Screen elements
        t2.pack()
        ge.pack()
        go.pack()
        eb.pack(pady=10)
        # Define random number to guess from input
        gr = int(gri.get("1.0", "end-1c"))
        game.num = r.randint(1,gr)

    
    def guess():
        # Guess we entered
        gs = int(ge.get("1.0", "end-1c"))
        # Logic
        if gs == game.num:
            print("you won")
            go.config(text=f"You won the number was {game.num}")

        else:
            print("you lost")
            go.config(text=f"You Lost the number was {game.num}")

# Defining window
root = tk.Tk()
root.state("zoomed")
root.config(bg="black")
root.title("Guess-The-Number")
# Front screen elements
t1 = Label(root, text="Guess the number", font=("Arial",50), fg="white", bg="black")
grl = Label(root, text="Enter your Guess Range", font=("Arial",25), fg="white", bg="black")
gri = Text(root, font=("Arial", 20), height=1, width=10)
pb = tk.Button(root, text="Play!", font=("Arial", 30), command= game.gst)
# Game screen elements
t2 = Label(root, text="Guess", font=("Arial",50), fg="white", bg="black")
ge = Text(root, font=("Arial", 20), height=1, width=10)
go = Label(root, text="----", font=("Arial",25), fg="white", bg="black")
eb = tk.Button(root, text="Guess", font=("Arial", 30), command= game.guess)

# Dislpaying main screen elements
t1.pack()
grl.pack()
gri.pack()
pb.pack(pady=10)
# Running Tkinter window
root.mainloop()