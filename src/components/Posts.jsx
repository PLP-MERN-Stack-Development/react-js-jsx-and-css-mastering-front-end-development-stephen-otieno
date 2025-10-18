import React, { useState, useEffect } from "react";

// Fetch a batch of random words
async function fetchRandomWords(count = 20) {
  // Use the Vercel-hosted random word API which is more reliable than the old heroku host
  const res = await fetch(`https://random-word-api.vercel.app/api?words=${count}`);
  if (!res.ok) throw new Error("Failed to load words");
  return await res.json();
}

// Helper: return the first sentence from a block of text
function firstSentence(text) {
  if (!text) return text;
  const parts = text.split(/(?<=[.!?])\s+/);
  return parts[0];
}

// Fetch a single word's definition using Datamuse (md=d returns definitions when available)
// Returns either null or { word, definitions: string[], brief: string }
async function fetchDefinition(word) {
  if (!word) return null;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6000);
  try {
    // Datamuse: sp (spelling), md=d to include definitions, max=1 to keep response small
    const url = `https://api.datamuse.com/words?sp=${encodeURIComponent(word)}&md=d&max=1`;
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return null;
    const entry = data[0];
    if (!entry.defs || !Array.isArray(entry.defs) || entry.defs.length === 0) return null;

    // defs are strings like "n\tdefinition text" — format them into readable text
    const formatted = entry.defs.map((d) => {
      const parts = d.split('\t');
      const pos = parts[0] || '';
      const text = parts.slice(1).join('\t') || d;
      return pos ? `${pos}: ${text}` : text;
    });

    const brief = formatted.length ? firstSentence(formatted[0]) : null;

    return { word: entry.word || word, definitions: formatted, brief };
  } catch (err) {
    console.warn('Datamuse lookup failed for', word, err);
    return null;
  }
}

export default function Posts() {
  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState("");
  const [showFull, setShowFull] = useState(false);
  const [definitionEntry, setDefinitionEntry] = useState(null); // { word, definitions:[], brief }
  const [loadingWords, setLoadingWords] = useState(false);
  const [loadingDef, setLoadingDef] = useState(false);
  const [error, setError] = useState("");

  // Load random words on mount
  useEffect(() => {
    (async () => {
      try {
        setLoadingWords(true);
        const randomWords = await fetchRandomWords();
        setWords(randomWords);
      } catch {
        setError("❌ Failed to load words. Try reloading.");
      } finally {
        setLoadingWords(false);
      }
    })();
  }, []);

  // Handle clicking a word
  const handleWordClick = async (word) => {
    setSelectedWord(word);
    setDefinitionEntry(null);
    setLoadingDef(true);
    const def = await fetchDefinition(word);
    setDefinitionEntry(def);
    setLoadingDef(false);
  };

  // Reload new words
  const reloadWords = async () => {
    setError("");
    setWords([]);
    setSelectedWord("");
    setDefinition("");
    setLoadingWords(true);
    try {
      const randomWords = await fetchRandomWords();
      setWords(randomWords);
    } catch {
      setError("❌ Failed to reload words. Check your internet connection.");
    } finally {
      setLoadingWords(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">📘 Word Explorer</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
        onClick={reloadWords}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        🔄 Reload Words
      </button>

      {loadingWords ? (
        <p>Loading random words...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-3">
          {words.map((word) => (
            <button
              key={word}
              onClick={() => handleWordClick(word)}
              className="px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg shadow transition"
            >
              {word}
            </button>
          ))}
        </div>
      )}

      {selectedWord && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">{selectedWord}</h2>
          {loadingDef ? (
            <p className="text-gray-500">Fetching definition...</p>
          ) : (
                <div>
                  <h3 className="text-xl font-semibold mb-2">{definitionEntry.word}</h3>
                  {(!showFull && definitionEntry.brief) ? (
                    <div>
                      <p className="mb-2 text-gray-800">{definitionEntry.brief}</p>
                      {definitionEntry.definitions.length > 0 && (
                        <button className="text-sm text-indigo-600" onClick={() => setShowFull(true)}>Show more</button>
                      )}
                    </div>
                  ) : (
                    <div>
                      {definitionEntry.definitions.map((d, i) => (
                        <p key={i} className="mb-2 text-gray-800 whitespace-pre-line">{d}</p>
                      ))}
                      {definitionEntry.definitions.length > 0 && (
                        <button className="text-sm text-indigo-600" onClick={() => setShowFull(false)}>Show less</button>
                      )}
                    </div>
                  )}
                </div>
          )}
        </div>
      )}
    </div>
  );
}
