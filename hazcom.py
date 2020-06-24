'''
Final year Project interface
'''
#All the libraries required for various purposes
from tkinter import *
from PIL import ImageTk, Image
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.text
from matplotlib import patches
from matplotlib.backends.backend_pdf import PdfPages
import fitz
from fitz.utils import insertImage

#importing from excel
Panel_data = pd.read_excel("D:\Ken related\HazCom_students\Project\interface\\Haz_cum.xlsm","Panel_Data")
Panel_data_headings = list(Panel_data)
Precaution = pd.read_excel("D:\Ken related\HazCom_students\Project\interface\\Haz_cum.xlsm","Precaution",index_col=0, header = 0)
Precaution_headings = list(Precaution)
Mitigation = pd.read_excel("D:\Ken related\HazCom_students\Project\interface\\Haz_cum.xlsm","Mitigation", index_col=0, header = 0)
Mitigation_headings = list(Mitigation)

def generate_report():
    name_ = ename.get()
    ename.delete(0,END)
    desg = desg_.get()
    loca_ = elocation.get()
    elocation.delete(0,END)
    risk_rating = int(Panel_data[Panel_data_headings[-1]][1])
    zone_ = zoneOfC(risk_rating)

root = Tk()
root.geometry("300x500")

#Icon of the program
root.iconbitmap("D:\Ken related\HazCom_students\Project\interface\\biohazard.ico")

#Title of the Program
root.title("HazCom for Roof falls")

#Frame for the program
frame = LabelFrame(root, text= "Enter details as suggested", padx = 20, pady = 20)
frame.pack(padx = 20, pady = 20)

#Labels and input boxes

worker_name = Label(frame, text ="Enter your name: ")
ename = Entry(frame, width = 30, borderwidth = 5)
empty1 = Label(frame, text = " ")
desg_ = StringVar()
designation = Label(frame, text ="Enter you Designation: ")
edesignation = OptionMenu(frame, desg_, "Overman", "Mining Sirdar", "Shotfirer", "Timberman", "Common Worker")
empty2 = Label(frame, text = " ")
location = Label(frame, text ="Enter the Location: ")
elocation = Entry(frame,width = 30, borderwidth = 5 )
empty3 = Label(frame, text = " ")

#Report generating button

view_button = Button(frame, text = "View the Report", command = lambda: view_report(), padx =10, pady = 10)
empty4 = Label(frame, text = " ")
report_button = Button(frame, text = "Generate Report", command= lambda: generate_report(),  padx =10, pady = 10)
empty5 = Label(frame, text = " ")
exit_buttton  = Button(frame, text = "Exit Program", command = root.quit , padx =10, pady = 10)

#Using Grid

# worker_name.grid(row=0, column = 0)
# ename.grid(row=1, column=0,columnspan = 1)
# empty1.grid(row =2 , column =0 )
# designation.grid(row=3, column = 0)
# edesignation.grid(row=4, column=0,columnspan = 1)
# # empty2.pack()
# location.grid(row=5, column = 0)
# elocation.grid(row=6, column=0,columnspan = 1)
# empty3.grid(row= 7, column =0 )
# view_button.grid(row=8 , column =0 )
# empty4.grid(row=9 , column = 0)
# report_button.grid(row= 8, column = 1)
# empty5.grid(row= 11, column =0 )
# exit_buttton.grid(row=12 , column =0 )

#Using pack
worker_name.pack()
ename.pack()
empty1.pack()
designation.pack()
edesignation.pack()
empty2.pack()
location.pack()
elocation.pack()
empty3.pack()
view_button.pack()
empty4.pack()
report_button.pack()
empty5.pack()
exit_buttton.pack()


root.mainloop()