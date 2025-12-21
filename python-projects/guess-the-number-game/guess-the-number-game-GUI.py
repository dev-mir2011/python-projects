import tkinter as tk
from tkinter import *
import random as rand

number_to_guess = 0


def play_button_action():
    end_range = int(game_final_range.get())

    global number_to_guess
    number_to_guess = rand.randint(0, end_range)

    main_title.pack_forget()
    rules_text.pack_forget()
    game_final_range.pack_forget()
    play_button.pack_forget()

    game_title.pack(pady=padding_y)
    guessed_number.pack(pady=padding_y)
    guess_button.pack(pady=padding_y)


def guess():
    guessed_number_value = int(guessed_number.get())
    global number_to_guess

    if guessed_number_value == number_to_guess:
        for widgit in root.winfo_children():
            widgit.pack_forget()

        won_title.pack(pady=padding_y)
        play_again_button.pack(pady=padding_y)
        quit_button.pack(pady=padding_y)
    else:
        for widgit in root.winfo_children():
            widgit.pack_forget()

        lost_title.pack(pady=padding_y)
        play_again_button.pack(pady=padding_y)
        quit_button.pack(pady=padding_y)


def play_again():
    for widgit in root.winfo_children():
        widgit.pack_forget()

    main_title.pack(pady=padding_y)
    rules_text.pack(pady=padding_y)
    game_final_range.pack(pady=padding_y)
    play_button.pack(pady=padding_y)


foreground_color = "#ffffff"
background_color = "#000000"
font_size = 50
font_family = "Courier"
padding_y = 10

root = tk.Tk()
root.title("Guess The Number")
root.configure(bg=background_color)

main_title = Label(
    root,
    text="Guess The Number Game",
    fg=foreground_color,
    bg=background_color,
    font=(font_family, font_size),
)

rules_text = Label(
    root,
    text="How to play:\n Enter the game range's last number\n for example the game start's\n from 0 so a game\n from 0-10 you would enter 10",
    fg=foreground_color,
    bg=background_color,
    font=(font_family, font_size),
)

game_final_range = Entry(
    root,
    width=30,
    justify=tk.CENTER,
    font=(font_family, font_size),
    fg=foreground_color,
    bg=background_color,
)

play_button = Button(
    root,
    text="Play",
    font=(font_family, font_size),
    fg=foreground_color,
    bg=background_color,
    command=play_button_action,
)


game_title = Label(
    root,
    text="Guess The Number: ",
    fg=foreground_color,
    bg=background_color,
    font=(font_family, font_size),
)


guessed_number = Entry(
    root,
    width=30,
    justify=tk.CENTER,
    font=(font_family, font_size),
    fg=foreground_color,
    bg=background_color,
)


guess_button = Button(
    root,
    text="Guess",
    font=(font_family, font_size),
    fg=foreground_color,
    bg=background_color,
    command=guess,
)


won_title = Label(
    root,
    text="You Won!",
    fg=foreground_color,
    bg=background_color,
    font=(font_family, font_size),
)

lost_title = Label(
    root,
    text="You Lost!, Better Luck Next Time.",
    fg=foreground_color,
    bg=background_color,
    font=(font_family, font_size),
)


play_again_button = Button(
    root,
    text="Play Again",
    font=(font_family, font_size),
    fg=foreground_color,
    bg=background_color,
    command=play_again,
)

quit_button = Button(
    root,
    text="Quit",
    font=(font_family, font_size),
    fg=foreground_color,
    bg=background_color,
    command=lambda: root.quit(),
)


main_title.pack(pady=padding_y)
rules_text.pack(pady=padding_y)
game_final_range.pack(pady=padding_y)
play_button.pack(pady=padding_y)

root.mainloop()
