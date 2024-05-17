import streamlit as st
import pandas as pd

# Create an empty DataFrame to store user input
data = {}

# Add input fields for each data variable
st.subheader("Daten eingeben:")

data["Fixkosten/Monat"] = st.number_input("Fixkosten/Monat:", min_value=0.0)
data["Stromkosten"] = st.number_input("Stromkosten:", min_value=0.0)
data["Kosten Pc neu"] = st.number_input("Kosten neuer Pc:", min_value=0.0)
data["Stromverbrauch neuer Pc"] = st.number_input("Stromverbrauch neuer Pc (Watt):", min_value=0.0)
data["Verbrauch neuer PC in kWh"] = st.number_input("Verbrauch neuer Pc/Monat in kWh:", min_value=0.0)
data["Stromverbrauch alter PC"] = st.number_input("Stromverbrauch alter PC (Watt):", min_value=0.0)
data["Verbrauch alter PC in kWh"] = st.number_input("Verbrauch alter PC/Monat in kWh:", min_value=0.0)
data["Tägliche Nutzung (in h)"] = st.number_input("Tägliche Nutzung (in h):", min_value=0.0)

data = {
    "Fixkosten/Monat": [data["Fixkosten/Monat"]],
    "Stromkosten": [data["Stromkosten"]],
    "Kosten Pc neu": [data["Kosten Pc neu"]],
    "Stromverbrauch neuer Pc": [data["Stromverbrauch neuer Pc"]],
    "Verbrauch neuer PC in kWh": [data["Verbrauch neuer PC in kWh"]],
    "Stromverbrauch alter PC": [data["Stromverbrauch alter PC"]],
    "Verbrauch alter PC in kWh": [data["Verbrauch alter PC in kWh"]],
    "Tägliche Nutzung (in h)": [data["Tägliche Nutzung (in h)"]],
}

# Create the DataFrame (no need to specify index here)
df = pd.DataFrame(data)

# Display the input data
st.subheader("Eingabedaten:")
st.write(df)

# Calculate the daily energy consumption of the new PC at different usage times
daily_consumption_new_pc = df["Stromverbrauch neuer Pc"] * df["Tägliche Nutzung (in h)"] / 1000
df["Verbrauch neuer Pc/Tag in kWh"] = daily_consumption_new_pc

# Calculate the daily energy consumption of the old PC at different usage times
daily_consumption_old_pc = df["Stromverbrauch alter PC"] * df["Tägliche Nutzung (in h)"] / 1000
df["Verbrauch alter Pc/Tag in kWh"] = daily_consumption_old_pc

# Display the daily energy consumption of the new PC at different usage times
st.subheader("Verbrauch neuer Pc/Tag in kWh:")
st.line_chart(df[["Tägliche Nutzung (in h)", "Verbrauch neuer Pc/Tag in kWh"]], x="Tägliche Nutzung (in h)")

# Display the daily energy consumption of the old PC at different usage times
st.subheader("Verbrauch alter PC/Tag in kWh:")
st.line_chart(df[["Tägliche Nutzung (in h)", "Verbrauch alter Pc/Tag in kWh"]], x="Tägliche Nutzung (in h)")

# Uncomment either Option 1 or Option 2 to create the DataFrame as desired.
# Option 1 provides an explicit index, while Option 2 lets Pandas create an index automatically.
