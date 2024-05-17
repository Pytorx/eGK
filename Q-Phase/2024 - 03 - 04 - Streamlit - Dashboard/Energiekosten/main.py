import streamlit as st
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

st.set_option('deprecation.showPyplotGlobalUse', False)

def calculate_energy_cost(power, hours_per_day, days_per_month, cost_per_kwh):
    energy_consumption = power * hours_per_day * days_per_month
    energy_cost = energy_consumption * cost_per_kwh
    return energy_cost

def main():
    st.title("Mini PC vs Normal PC Energy Cost Calculator")

    st.sidebar.header("Input Parameters")
    mini_pc_power = st.sidebar.number_input("Mini PC Power Consumption (W)", min_value=1, step=1, value=10)
    normal_pc_power = st.sidebar.number_input("Normal PC Power Consumption (W)", min_value=1, step=1, value=50)
    hours_per_day = st.sidebar.number_input("Hours of Usage per Day", min_value=1, step=1, value=8)
    days_per_month = st.sidebar.number_input("Days of Usage per Month", min_value=1, step=1, value=30)
    cost_per_kwh = st.sidebar.number_input("Cost per kWh ($)", min_value=0.01, step=0.01, value=0.36)

    mini_pc_cost = calculate_energy_cost(mini_pc_power, hours_per_day, days_per_month, cost_per_kwh)
    normal_pc_cost = calculate_energy_cost(normal_pc_power, hours_per_day, days_per_month, cost_per_kwh)

    st.subheader("Energy Cost Comparison")
    st.write("Energy cost for Mini PC: ", round(mini_pc_cost, 2), "€")
    st.write("Energy cost for Normal PC: ", round(normal_pc_cost, 2), "€")

    break_even_hours = (normal_pc_cost - mini_pc_cost) / (normal_pc_power - mini_pc_power) / days_per_month
    st.subheader("Break Even Point")
    if break_even_hours > 0:
        st.write(f"The break-even point is approximately {round(break_even_hours, 2)} hours of usage per day.")
    else:
        st.write("The Mini PC is always cheaper to run.")

    st.subheader("Energy Cost Comparison Chart")
    hours_range = np.linspace(1, 24, 100)
    mini_pc_costs = calculate_energy_cost(mini_pc_power, hours_range, days_per_month, cost_per_kwh)
    normal_pc_costs = calculate_energy_cost(normal_pc_power, hours_range, days_per_month, cost_per_kwh)

    chart_data = {
        'Hours of Usage per Day': hours_range,
        'Mini PC Energy Cost (€)': mini_pc_costs,
        'Normal PC Energy Cost (€)': normal_pc_costs
    }
    chart_df = pd.DataFrame(chart_data)
    st.bar_chart(chart_df.set_index('Hours of Usage per Day'))

    st.subheader("Energy Cost Comparison Table")
    st.write(chart_df)

    st.subheader("Energy Cost Comparison Line Chart")
    plt.plot(hours_range, mini_pc_costs, label="Mini PC")
    plt.plot(hours_range, normal_pc_costs, label="Normal PC")
    plt.xlabel("Hours of Usage per Day")
    plt.ylabel("Energy Cost (€)")
    plt.title("Energy Cost Comparison")
    plt.legend()
    st.pyplot()

    st.subheader("Energy Cost Comparison Pie Chart")
    plt.pie([mini_pc_cost, normal_pc_cost], labels=["Mini PC", "Normal PC"], autopct='%1.1f%%')
    plt.title("Energy Cost Comparison")
    st.pyplot()

    color = st.color_picker("Pick a color")
    st.markdown(f"<background color='{color}'>", unsafe_allow_html=True)

if __name__ == "__main__":
    main()
