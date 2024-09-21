import streamlit as st
from LLM import query_prompts, GPTModel
from ETL import load_and_clean
from query_execution import execute_query
import pandas as pd
import json
import logging
from utils import load_css

# Load the CSS file
load_css("styles.css")

logging.basicConfig(format='%(asctime)s - %(message)s', level=logging.INFO)

@st.cache_data
def get_cleaned_data(filepath: str) -> pd.DataFrame:
    return load_and_clean(filepath)

def main() -> None:
    st.title("LLM-based Data Query App")

    # Load and clean the data once
    data, schema = get_cleaned_data(r'dataset\diabetes_dataset.csv')

    # Create sidebar tabs
    with st.sidebar:
        selected_tab = st.radio("Select a tab", ["Data Table","Query"])

    if selected_tab == "Query":
        # Get user query
        query: str = st.text_input("What is your data question on the table?")
        
        if query:
            # Process the query using NLP
            gpt_model = GPTModel()
            system_prompt, full_query_prompt = query_prompts(query, schema)

            response = gpt_model.chat_completion(model_name="gpt-3.5-turbo", system_prompt=system_prompt, main_prompt=full_query_prompt)
            response = json.loads(response)["Python Code"]
            
            logging.info(f"code generated: {response}")

            st.write(f"Code: {response} \n\n")
            
            result = execute_query(response, data)
            
            # Display the result based on its type
            if isinstance(result, pd.DataFrame):
                st.dataframe(result)
            elif isinstance(result, pd.Series):
                st.write(result.to_frame())
            elif isinstance(result, (int, float)):
                st.write(f"Result: {result}")
            else:
                st.write(result)

    elif selected_tab == "Data Table":
        # Display the data table
        st.dataframe(data)

if __name__ == "__main__":
    main()
