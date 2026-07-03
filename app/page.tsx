"use client";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    try {
      // This sends the uploaded file to the local Python server brain we built!
      const res = await fetch("http://127.0.0.1:8000/api/analyze", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      setData(json);
    } catch (err) {
      alert("Error: Cannot connect to your Python brain server. Make sure main.py is running!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-8 max-w-4xl mx-auto space-y-6 font-sans">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold text-gray-900">Freelancer Contract Auditor</h1>
        <p className="text-gray-500">Upload any contract PDF to verify your safety ranking instantly.</p>
      </div>

      {/* 1. Drag and Drop Input Box */}
      <div className="border-4 border-dashed border-gray-200 rounded-2xl p-12 text-center bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer">
        <input type="file" accept=".pdf" onChange={handleFileUpload} className="mx-auto block cursor-pointer" />
        <p className="mt-2 text-sm text-gray-400">Click to pick your contract (PDF format only)</p>
      </div>

      {/* 2. Loading State */}
      {loading && (
        <div className="p-4 bg-blue-50 border border-blue-200 text-blue-700 rounded-xl text-center font-semibold animate-pulse">
          🔄 Google Gemini is reading your contract pages now... Please hold on...
        </div>
      )}

      {/* 3. The Report View Dashboard */}
      {data && (
        <div className="space-y-6">
          <div className="p-6 bg-white shadow-md rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800">Safety Score: {data.overall_score}/100</h2>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">{data.summary}</p>
          </div>

          <div className="grid gap-4">
            {data.risks?.map((risk: any, i: number) => (
              <div key={i} className={`p-5 rounded-2xl border-l-8 shadow-sm ${
                risk.severity === "HIGH" ? "border-red-500 bg-red-50" : "border-amber-500 bg-amber-50"
              }`}>
                <div className="flex justify-between items-start">
                  <h4 className="text-lg font-bold text-gray-800">{risk.clause_title}</h4>
                  <span className={`text-xs px-2.5 py-1 font-bold rounded-full ${
                    risk.severity === "HIGH" ? "bg-red-200 text-red-800" : "bg-amber-200 text-amber-800"
                  }`}>{risk.severity} RISK</span>
                </div>
                <p className="text-xs text-gray-500 italic bg-white p-3 rounded-lg border mt-2">"{risk.original_text}"</p>
                <p className="text-sm text-gray-700 mt-3"><strong>Why it's bad:</strong> {risk.explanation}</p>
                <p className="text-sm text-emerald-800 mt-1.5 bg-emerald-50 p-2.5 rounded-lg"><strong>Suggested Fix:</strong> {risk.suggestion}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}