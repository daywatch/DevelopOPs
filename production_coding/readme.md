# Building a production-ready python code
The task of this repo is to convert a ML notebook on logistic regression for classification to a python repo/package. 

## Task 1: packaging the code as library

Here is how to use the package:
1. Install build:  ```py -m pip install --upgrade build``` 
2. Call build: ```py -m build```
3. After that you will see a distribution folder and .egg_info for further [archive uploading](https://packaging.python.org/en/latest/tutorials/packaging-projects/) 

## Task 2: testing the code for production
First, install tox ```pip install tox```

There are three commands in the tox.ini file
- ```tox run train```
This initiates the training of logistic regression model and model saving
- ```tox run test_package```
This is about unit tests on features and model prediction
- ```tox run checks```
This checks three things:  
    - PEP8 (flake8) 
    - isort (formatting of import)
    - black (style consistency)
    - type checking (mypy)