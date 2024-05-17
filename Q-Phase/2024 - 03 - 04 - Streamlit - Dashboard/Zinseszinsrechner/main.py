import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import math

st.title('Zinseszinsrechner')
st.subheader('Eingabe')

st.sidebar()
K0 = st.number_input('Kapital', min_value=0, value=1000, step=100)
n = st.number_input('Jahre', min_value=0, value=10)
p = st.number_input('Zinsen', value=8.0, step=0.5)
78wh
money = []
Ki = K0

for i in range(0, n):
    Ki = Ki*(1+p/100)
    money.append([i, Ki])

df = pd.DataFrame(money, columns=['Jahr', 'Kapital'])

st.line_chart(money)
st.write(money)