from tkinter import *
import tkinter as tk
import requests


def get_weather_data():
    get_weather_data_button.pack_forget()

    ip_res = requests.get("https://ipinfo.io")
    ip_data = ip_res.json()
    lat, lon = ip_data["loc"].split(",")

    API_KEY = ""
    url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric"

    res = requests.get(url)
    weather = res.json()

    city.configure(text=f"City: {weather["name"]}")
    city.pack(pady=y_padding)

    temprature.configure(text=f"Temprature: {weather["main"]["temp"]}°C")
    temprature.pack(pady=y_padding)

    humidity.configure(text=f"Humidity {weather["main"]["humidity"]}%")
    humidity.pack(pady=y_padding)

    get_weather_data_button.pack(pady=y_padding)


background_color = "#064789"
forground_color = "#B1DDF1"
font_size = 60
y_padding = 10

root = tk.Tk()
root.title("Weather App")
root.configure(bg=background_color)

top_title = Label(
    root,
    text="Weather App",
    font=("Arial", font_size),
    bg=background_color,
    fg=forground_color,
)
temprature = Label(
    root, text="", font=("Arial", font_size), bg=background_color, fg=forground_color
)
humidity = Label(
    root, text="", font=("Arial", font_size), bg=background_color, fg=forground_color
)
city = Label(
    root, text="", font=("Arial", font_size), bg=background_color, fg=forground_color
)
get_weather_data_button = Button(
    root,
    text="Get Weather Information",
    font=("Arial", font_size),
    command=get_weather_data,
    bg=background_color,
    fg=forground_color,
)

top_title.pack(pady=y_padding)
get_weather_data_button.pack(pady=y_padding)
root.mainloop()
