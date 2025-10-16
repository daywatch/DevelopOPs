from flask import Flask, request

app = Flask(__name__)

# store data in a list
stores = [{"name": "My Store", "items": [{"name": "my item", "price": 15.99}]}]

# endpoint: /store | function: get_stores
@app.get("/store")
def get_stores():
    return {"stores": stores}
# use: http://127.0.0.1:5000/store on browser

# get a spec store
@app.get("/store/<string:name>")
def get_store(name):
    for store in stores:
        if store["name"] == name:
            return store
    return {"message": "there is no such store"}, 404

# get items from a spec store
@app.get("/store/<string:name>/item")
def get_store_items(name):
    for store in stores:
        if store["name"] == name:
            return {"items": store["items"]}
    return {"message": "store items not found"}, 404

@app.post("/store")
def create_stores():
    request_data = request.get_json()
    new_store = {"name":request_data["name"],"items":[]}
    stores.append(new_store)
    return new_store,201 #define the output and code

# add a spec store
@app.post("/store/<string:name>/item")
def ceate_item(name):
    request_data = request.get_json()
    for store in stores:
        if store["name"] == name:
            new_item = {"name": request_data["name"],"price":request_data["price"]}
            store["items"].append(new_item)
            return new_item, 201
    return {"message": "the store your put is not found"},404

@app.route('/')
def home():
    return "Hello, Flask!"

