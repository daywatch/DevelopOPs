import streamlit as st
import os

def load_css(file_path: str) -> None:
    if os.path.exists(file_path):
        with open(file_path) as f:
            st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)
    else:
        st.error(f"CSS file not found: {file_path}")
