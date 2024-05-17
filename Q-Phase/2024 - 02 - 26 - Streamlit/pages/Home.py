import streamlit as st

st.chat_input(key="message", placeholder="Type a message...", max_chars=400)

st.text_area("Type a message...", key="message", max_chars=400, help="Type a message...")

st.text_input("Type a message...", key="message", max_chars=400, help="Type a message...")

st.text_input("Type a message...", key="message", max_chars=400, help="Type a message...")

# Path: pages/Home.py
# Compare this snippet from App.py:
# import streamlit as st
#
# st.write("# Login to continue")
#
# st.text_input("Username: ", key="username", max_chars=20, help="Enter your username")
# st.text_input("Password: ", type="password")
# st.button("Login")
import streamlit as st

st.button("Login")

st.checkbox("Remember me", value=True)

st.date_input("Date of birth", help="Date of birth")

st.file_uploader("Upload your profile picture", type="jpg")

st.number_input("Enter a number", key="number", value=0, step=1, help="Enter a number")

st.radio("Select