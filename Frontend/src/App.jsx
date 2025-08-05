import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            React + Vite + Tailwind
          </h1>
          <p className="text-gray-600 mb-8">
            Your modern development stack is ready!
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-lg font-semibold text-gray-700">
                Count: {count}
              </p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setCount(count + 1)}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Increment
              </button>
              <button
                onClick={() => setCount(count - 1)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Decrement
              </button>
            </div>

            <button
              onClick={() => setCount(0)}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Reset
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>✨ Hot reload enabled</p>
            <p>🎨 Tailwind CSS configured</p>
            <p>⚡ Vite for fast development</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
