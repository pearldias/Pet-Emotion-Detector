import { useState } from 'react'
import './App.css'

function App() {
  const [file, setFile] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleAnalyze = async () => {
    if (!file) return alert("Please upload a sound file!")

    const formData = new FormData()
    formData.append("file", file)

    try {
      setLoading(true)
      const res = await fetch('/analyze', {
        method: 'POST',
        body: formData
      })

      const data = await res.json()
      setResult(data)
    } catch (err) {
      alert("Error analyzing sound")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>Pet Emotion Behaviour By Sound</h1>

      <label htmlFor="file">Upload Pet Sound</label>
      <input
        type="file"
        id="file"
        accept="audio/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleAnalyze} disabled={loading}>
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>

      {result && (
        <div className="result-box">
          <p><strong>Detected Emotion:</strong> {result.emotion}</p>
          <p><strong>Confidence:</strong> {(result.confidence * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  )
}

export default App
