import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold font-mono text-center mb-8 text-blue-600">
          Pet Emotion Behaviour By Sound
        </h1>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Upload Pet Sound</label>
          <input
            type="file"
            accept="audio/*"
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100
              cursor-pointer"
          />
          <button
            className="w-full py-2 px-4 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Analyze
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
