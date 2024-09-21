# the data came from Kaggle: https://www.kaggle.com/datasets/priyamchoksi/100000-diabetes-clinical-dataset
import pandas as pd

#raw_df = pd.read_csv('dataset\diabetes_dataset.csv')

def load_and_clean(table_path: str) -> pd.DataFrame:
    df = pd.read_csv(table_path)

    column_schema = str(df.dtypes)

     # Ensure no null values
    df = df.dropna()

    # Convert string columns to lowercase
    df["location"] = df["location"].str.lower()

    # Additional cleaning steps
    # Example: Ensure 'year' is an integer
    df['year'] = df['year'].astype(int)

    # Example: Ensure 'age' is a float
    df['age'] = df['age'].astype(float)

    return df, column_schema 

