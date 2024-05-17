import streamlit as st
import pandas as pd
import yfinance as yf

# Set Streamlit page title and favicon
st.set_page_config(page_title="Personal Finance Dashboard", page_icon=":chart_with_upwards_trend:")

# Define Streamlit app title and introduction
st.title('My Personal Finance Dashboard')
st.write("""
Welcome to the Personal Finance Dashboard! Analyze your favorite assets and compare their returns.
""")

# User input section
# st.multiselect
asset = st.text_input('Pick your first asset (e.g., MSFT)', key='asset')
second_asset = st.text_input('Pick your second asset (e.g., AAPL)', key='second_asset')
asset_color = st.color_picker('Pick color for first asset', '#1f77b4')
second_asset_color = st.color_picker('Pick color for second asset', '#ff7f0e')

# Display company names
if asset:
    st.write(f"Returns of {asset}")
if second_asset:
    st.write(f"Returns of {second_asset}")

# Define time periods for comparison
time_periods = {
    'Last 24h': '24h',
    'Year-to-date': 'ytd',
    'Last year': '1y',
    'Last 3 years': '3y',
    'Since listed': 'max',
    'Custom': 'custom'
}

# Allow user to select time period
selected_time_period = st.radio('Select time period for comparison', list(time_periods.keys()), index=0)

date = None
enddate = None
interval = '1d'  # Default interval

# Define start and end dates based on the selected time period
if selected_time_period == 'Year-to-date':
    date = pd.Timestamp.today().strftime('%Y-01-01')
    enddate = pd.Timestamp.today()
    interval = '1h'  # Use every hour for the year-to-date
elif selected_time_period == 'Last year':
    date = (pd.Timestamp.today() - pd.DateOffset(years=1)).strftime('%Y-%m-%d')
    enddate = pd.Timestamp.today()
    interval = '1h'  # Use every hour for the last year
elif selected_time_period == 'Last 3 years':
    date = (pd.Timestamp.today() - pd.DateOffset(years=3)).strftime('%Y-%m-%d')
    enddate = pd.Timestamp.today()
    interval = '1d'  # Use daily values for the last 3 years
elif selected_time_period == 'Since listed':
    date = '2000-01-01'
    enddate = pd.Timestamp.today()
    interval = '1d'  # Use daily values since listed
elif selected_time_period == 'Custom':
    date = st.date_input('Start date', key='date')
    enddate = st.date_input('End date', key='enddate')
elif selected_time_period == '24h':
    date = pd.Timestamp.today() - pd.Timedelta(days=1)
    enddate = pd.Timestamp.today()
    interval = '1m'  # Use every minute for the last 24h

st.markdown('---')
st.markdown('## Returns of ')

# Fetching data for the first asset
if asset:
    asset_ticker = yf.Ticker(asset)
    asset_data = asset_ticker.history(start=date, end=enddate, interval=interval)

# Fetching data for the second asset
if second_asset:
    second_asset_ticker = yf.Ticker(second_asset)
    second_asset_data = second_asset_ticker.history(start=date, end=enddate, interval=interval)

# Combine dataframes
if asset and second_asset:
    combined_data = pd.concat([asset_data['Close'], second_asset_data['Close']], axis=1)
    combined_data.columns = [asset, second_asset]

    # Calculate cumulative return
    cumulative_return_data = combined_data.pct_change().add(1).cumprod()

    # Display line chart for both assets
    st.line_chart(cumulative_return_data, use_container_width=True, color=[asset_color, second_asset_color])

# Add footer
st.markdown("---")
st.write("Created with Streamlit - Powered by Python and yfinance")
