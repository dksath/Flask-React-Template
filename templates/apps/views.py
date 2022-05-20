from flask import render_template, Blueprint
import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle


app_blueprint = Blueprint('app',__name__)
model = pickle.load(open("model.pkl", "rb"))

@app_blueprint.route('/')
def Home():
    return render_template("index.html")

@app_blueprint.route("/predict", methods = ["POST"])
def predict():
    float_features = [float(x) for x in request.form.values()]
    features = [np.array(float_features)]
    prediction = model.predict(features)
    return render_template("index.html", prediction_text = "The flower species is {}".format(prediction))

