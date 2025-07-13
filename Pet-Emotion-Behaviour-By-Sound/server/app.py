from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import librosa
import numpy as np
import joblib
import soundfile as sf

# Setup
app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "server/uploads"
MODEL_PATH = "server/model/dog_emotion_model.pkl"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Load model once at startup
model = joblib.load(MODEL_PATH)

@app.route('/')
def home():
    return 'Flask backend is running.', 200

@app.route('/analyze', methods=['POST'])
def analyze_audio():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    # Save file
    filepath = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(filepath)

    try:
        # Load and process audio
        y, sr = librosa.load(filepath, sr=16000)
        mfcc = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=13)
        mfcc_mean = np.mean(mfcc.T, axis=0)

        # Predict
        prediction = model.predict([mfcc_mean])[0]
        proba = model.predict_proba([mfcc_mean])[0]
        label_index = list(model.classes_).index(prediction)
        confidence = float(proba[label_index])

        return jsonify({
            'emotion': prediction,
            'confidence': round(confidence, 4)
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

    finally:
        # Clean up uploaded file
        if os.path.exists(filepath):
            os.remove(filepath)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
