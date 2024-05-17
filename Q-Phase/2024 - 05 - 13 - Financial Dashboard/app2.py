import streamlit as st
import yfinance as yf
import pandas as pd
import time

# Define functions to get data
def get_crypto_data():
    # Download data from yfinance
    btc = yf.download("BTC-USD", period="1d", interval="1m")
    eth = yf.download("ETH-USD", period="1d", interval="1m")
    xmr = yf.download("XMR-USD", period="1d", interval="1m")

    # Combine data into a DataFrame
    data = pd.concat([btc, eth, xmr], axis=1)

    # Print DataFrame columns
    print("DataFrame columns:", data.columns)

    # Calculate percentage change in closing price (example)
    for ticker in ["BTC-USD", "ETH-USD", "XMR-USD"]:
        data[f"{ticker}_Preisänderung (%)"] = (data[ticker]["Close"].pct_change() * 100).fillna(0)

    return data

# Call the function to print the DataFrame columns
get_crypto_data()



def get_company_data():
    # Get company data from yfinance
    btc_data = yf.Ticker("BTC-USD").get_info()
    eth_data = yf.Ticker("ETH-USD").get_info()
    xmr_data = yf.Ticker("XMR-USD").get_info()

    # Combine data into a dictionary
    company_data = {
        "BTC": btc_data,
        "ETH": eth_data,
        "XMR": xmr_data
    }

    return company_data

# Load CSS file (assuming "style.css" is in the same directory)
with open('style.css') as f:
    st.markdown(f"""<style>{f.read()}</style>""", unsafe_allow_html=True)

# Display Header
st.markdown(f"""
<div class="header">
  <h1>Kryptowährungs-Dashboard</h1>
</div>
""", unsafe_allow_html=True)

# Display progress bar
with st.spinner("Daten werden geladen..."):
    # Get data
    data = get_crypto_data()
    company_data = get_company_data()

# Display Header with current prices
st.markdown(f"""
<div class="header">
  <h2>Aktuelle Kurse</h2>
  <p>BTC-USD: {data['Schlusskurs']['BTC-USD']:.2f}</p>
  <p>ETH-USD: {data['Schlusskurs']['ETH-USD']:.2f}</p>
  <p>XMR-USD: {data['Schlusskurs']['XMR-USD']:.2f}</p>
</div>
""", unsafe_allow_html=True)

# Display table with company data
st.markdown(f"""
<div class="table">
  <h2>Unternehmensdaten</h2>
  <table>
    <thead>
      <tr>
        <th>Kryptowährung</th>
        <th>Name</th>
        <th>KGV</th>
        <th>Marktkapitalisierung</th>
        <th>Dividende (%)</th>  <th>Preisänderung (%)</th>
      </tr>
    </thead>
    <tbody>
      {data[['Symbol', 'Name', 'P/E', 'Marktkapitalisierung', 'Dividende (%)', 'Preisänderung (%)']].to_html(index=False)}
    </tbody>
  </table>
</div>
""", unsafe_allow_html=True)

# Display line chart
st.line_chart(data[['Symbol', 'Schlusskurs']])

# Refresh dashboard every 60 seconds
time.sleep(60)
