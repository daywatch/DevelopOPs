import os
import openai
from openai import OpenAI
import backoff
import logging
import tiktoken
from typing import Dict, Any, List

# load key from environment
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
client = OpenAI(api_key=OPENAI_API_KEY)

logging.basicConfig(format='%(asctime)s - %(message)s', level=logging.INFO)

def query_prompts(query_txt: str, schema: str) -> List:
    system_prompt = f"""You are a data analyst on medical datasets. You are supposed to write simple and elegant Python pandas code on clients' queries."""
    main_prompt = f"""You are give this query for a dataframe called 'data': {query_txt}
Also here is the schema of table: {schema}
Rules: 1.The table is already known and importing is given, so don't generate anything other than simple python pandas code
Please return a json string with this format {{"Python code":CODE}}
For example, an answer can be {{"Python Code": "data.info()"}}
"""
    return system_prompt, main_prompt

class GPTModel():
    def __init__(self):
        self.encoding = tiktoken.encoding_for_model("gpt-3.5-turbo")

    def num_tokens(self, string: str) -> int:
        num_tokens = len(self.encoding.encode(string))
        return num_tokens

    @backoff.on_exception(backoff.expo, openai.RateLimitError)
    def chat_completion(self, model_name: str, system_prompt: str, main_prompt: str, temperature: int = 0) -> Dict[str, Any]:
        logging.info(f"Input prompt token length: {self.num_tokens(str(system_prompt + main_prompt))}")
        logging.info(f"GPT model: {model_name}")
        # from openai import OpenAI
        response = client.chat.completions.create(
            model = model_name,
            messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": main_prompt}],
            temperature = temperature)
        output = response.choices[0].message.content
        logging.info(f"Input prompt token length: {self.num_tokens(output)}")
        return output