# Pet Emotion Behaviour By Sound

A web application that analyzes pet sounds to determine their emotional state using machine learning.

## Project Structure

```
├── src/               # React frontend
│   ├── App.jsx       # Main application component
│   └── index.css     # Tailwind CSS styles
└── server/           # Flask backend
    ├── app.py        # Flask server
    └── requirements.txt # Python dependencies
```

## Setup

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

### Backend Setup

1. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
```

2. Install dependencies:
```bash
cd server
pip install -r requirements.txt
```

3. Start the Flask server:
```bash
python app.py
```

## Usage

1. Open your browser and navigate to the frontend URL (default: http://localhost:5173)
2. Upload an audio file of your pet's sound
3. Click "Analyze Pet Sound"
4. View the analysis results showing the detected emotion and confidence level

## Features

- Audio file upload and preview
- Real-time audio analysis
- Emotion detection with confidence scoring
- Modern, responsive UI with Tailwind CSS

## Technical Stack

- Frontend: React + Vite + Tailwind CSS
- Backend: Flask + Python
- API: REST with CORS support

## Development Notes

This project was bootstrapped with Vite and uses the following official plugins:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) for Fast Refresh using Babel
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) for Fast Refresh using SWC
