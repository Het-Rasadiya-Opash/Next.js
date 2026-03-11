"use client";
import { useEffect, useState } from "react";
import Loading from "../datafetch/Load";

const RandomJokes = () => {
  const [joke, setJoke] = useState(null);
  const [showPunchline, setShowPunchline] = useState(false);

  const URL = "https://official-joke-api.appspot.com/random_joke";

  const fetchRandomJoke = async () => {
    setShowPunchline(false);
    const res = await fetch(URL);
    const data = await res.json();
    setJoke(data);
  };

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  if (!joke) return <Loading/>

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm text-center border border-orange-100">
        <div className="text-4xl mb-4">☕</div>

        <h1 className="text-xl font-bold text-gray-800 mb-6">
          Random Jokes Generator
        </h1>

        <p className="text-gray-600 mb-8 min-h-12">{joke.setup}</p>

        {showPunchline && (
          <h2 className="text-lg font-semibold text-orange-600 mb-6 animate-bounce">
            {joke.punchline}
          </h2>
        )}

        <div className="space-y-3">
          <button
            onClick={() => setShowPunchline(!showPunchline)}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            {showPunchline ? "Hide Punch Line" : "Show Punch Line"}
          </button>

          <button
            onClick={fetchRandomJoke}
            className="w-full bg-orange-50 hover:bg-orange-100 text-orange-700 font-medium py-2 px-4 rounded-lg border border-orange-200 transition-colors"
          >
            Next
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-6 uppercase tracking-widest">
          Joke ID: {joke.id}
        </p>
      </div>
    </div>
  );
};

export default RandomJokes;
