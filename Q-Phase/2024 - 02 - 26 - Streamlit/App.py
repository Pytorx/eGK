import streamlit as st

st.write("# Login to continue")

st.text_input("Username: ", key="username", max_chars=20, help="Enter your username")
st.text_input("Password: ", type="password")
st.button("Login")