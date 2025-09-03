import tkinter as tk
from tkinter import *
import requests

ip_res = requests.get("https://ipinfo.io")
ip_data = ip_res.json()
lat, lon = ip_data["loc"].split(",")

API_KEY = "ecec60d27fc9fcc3311206990005b8d1"
city = "London"
url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric"

def we():

 response = requests.get(url)
 data = response.json()

 if response.status_code == 200:
    print(f"City: {data['name']}")
    c.config(text=f"City- {data['name']}")
    print(f"Temperature: {data['main']['temp']}°C")
    tm.config(text=f"Temprature- {data['main']['temp']}°C")
    print(f"Weather: {data['weather'][0]['description']}")
    w.config(text=f"Weather- {data['weather'][0]['description']}")
    print(f"Humidity: {data['main']['humidity']}%")
    h.config(text=f"Humidity- {data['main']['humidity']}%")
 else:
    print("Error:", data["message"])



root = tk.Tk()
root.state("zoomed")
root.config(bg="#dbdbdb")
root.title("Weather App")

t = Label(root, text="Weather",font=("Arial", 100), fg="black", bg="#dbdbdb")
b = tk.Button(root, text="Get Weather", font=("Arial", 30), fg="black", bg="#2168db",command=we)
c =  Label(root, text="City- ",font=("Arial", 50), fg="black", bg="#dbdbdb")
tm =  Label(root, text="Temprature- ",font=("Arial", 50), fg="black", bg="#dbdbdb")
w =  Label(root, text="Weather- ",font=("Arial", 50), fg="black", bg="#dbdbdb")
h =  Label(root, text="Humidity- ",font=("Arial", 50), fg="black", bg="#dbdbdb")

t.pack()
b.pack()
c.pack()
tm.pack()
w.pack()
h.pack()

root.mainloop()

