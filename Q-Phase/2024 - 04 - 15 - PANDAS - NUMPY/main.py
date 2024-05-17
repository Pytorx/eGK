import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Daten laden
data = pd.read_csv("https://raw.githubusercontent.com/dataprofessor/population-dashboard/master/data/population.csv")

# Dashboard-Layout definieren
st.set_page_config(layout="wide")

# Sidebar definieren
sidebar = st.sidebar()

# Informationen im Kombinationsfeld definieren
information_options = ["Gesamtbevölkerung", "Bevölkerungsdichte", "Wachstumsrate"]

# Kombinationsfeld in der Sidebar hinzufügen
selected_information = sidebar.selectbox("Informationen anzeigen", information_options)

# Daten filtern
filtered_data = data.copy()

# Informationen anzeigen
if selected_information == "Gesamtbevölkerung":
    # Diagramm der Gesamtbevölkerung erstellen
    plt.figure(figsize=(10, 6))
    plt.plot(data["Jahr"], data["Gesamtbevölkerung"])
    plt.xlabel("Jahr")
    plt.ylabel("Gesamtbevölkerung")
    plt.title("Gesamtbevölkerung nach Jahr")
    st.pyplot(plt.show())

elif selected_information == "Bevölkerungsdichte":
    # Diagramm der Bevölkerungsdichte erstellen
    plt.figure(figsize=(10, 6))
    plt.plot(data["Jahr"], data["Bevölkerungsdichte"])
    plt.xlabel("Jahr")
    plt.ylabel("Bevölkerungsdichte")
    plt.title("Bevölkerungsdichte nach Jahr")
    st.pyplot(plt.show())

elif selected_information == "Wachstumsrate":
    # Diagramm der Wachstumsrate erstellen
    plt.figure(figsize=(10, 6))
    plt.plot(data["Jahr"], data["Wachstumsrate"])
    plt.xlabel("Jahr")
    plt.ylabel("Wachstumsrate")
    plt.title("Wachstumsrate nach Jahr")
    st.pyplot(plt.show())

# CSS-Anpassung
st.markdown("""
body {
    background-image: url('https://cdn.pixabay.com/photo/2016/02/19/09/30/world-map-1088814_960_720.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

h1, h2, h3, h4, h5, h6 {
    color: #ffffff;
}

.sidebar {
    background-color: rgba(0, 0, 0, 0.5);
    color: #ffffff;
}

.streamlit-container {
    padding-left: 20px;
    padding-right: 20px;
}
""")

