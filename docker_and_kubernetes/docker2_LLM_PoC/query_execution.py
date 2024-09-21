import pandas as pd
import logging

logging.basicConfig(format='%(asctime)s - %(message)s', level=logging.INFO)

import pandas as pd
import logging

def execute_query(processed_query: str, data: pd.DataFrame):
    logging.info(f"Executing query on the table with shape: {data.shape}")
    try:
        # Evaluate the processed query
        result = eval(processed_query, {'data': data, 'pd': pd})
        
        # Check if result is still None
        if result is None:
            raise ValueError("The processed query did not set the result.")
        
        # Check the type of result and return accordingly
        return result
    
    except Exception as e:
        # Return a warning message if the query fails
        return f"Query failed: {str(e)}. Please retry your query with correct syntax."