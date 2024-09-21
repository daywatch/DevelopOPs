## Docker notes
[common CLIs](https://github.com/daywatch/DevelopOPs/blob/main/docker_and_kubernetes/docker_commands_notes.txt)
<br>

## Docker process sample 1: BERT

<br>

 I built an masked token generation function using BERT-uncased; then I used FastAPI and Uvicorn to load to a local portal
 Then I used the dockerfile to create an image of the function based on a huggingface image and pushed to a container - it passed a simple test in test.py
 The container is called “tl5971/bert:latest” on my docker hub. After pulling, you should be able to see the function if you use "localhost:8080/docs" in your browser
 
<br>

## Docker process sample 2: LLM code generation PoC

In the docker2 repo, I built a naive Chatgpt bot that can answer data query questions on the [Kaggle diabetes dataset](https://www.kaggle.com/datasets/priyamchoksi/100000-diabetes-clinical-dataset). To run the app locally, you need:
- build docker image ```docker build -t my-app```
- push the docker image to dockerhub 
	- ```docker login```
	- ```docker tag my-app username/my-app```
	- ```docker push username/my-app```
- pull the image ```docker pull username/my-app```
- run locally ```docker run -p 8501:8501 username/my-app```

<br>

## Kubernetes process sample
 I provided a yaml template of a replicaset for the same docker container, which can be used for scaled up production
 Also I included study notes on Kubernetes, including basics (pods, deployments, RS and RC, services) and cloud adaptations, see [here](https://docs.google.com/document/d/1PUr68kKitIOHTpxrclEiyfXixcb6UkvMbwZH4hF5W7E/edit?usp=sharing)