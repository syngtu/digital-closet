import { useState } from "react";
import axios from "axios";

export const UploadClothing = () => {
    const [file, setFile] = useState(null);
    const [resultUrl, setResultUrl] = useState<string|null>(null);
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {
        if (!file) return;
        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("http://127.0.0.1:8000/remove-bg/", formData, {
                responseType: "blob",
            });
            console.log(response);
            const imageUrl = URL.createObjectURL(response.data);
            setResultUrl(imageUrl);
        } catch (error) {
            alert("Error removing background");
            console.error(error);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold mb-4">Background Remover</h1>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
                className="mb-4"
            />
            <button
                onClick={handleUpload}
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                disabled={!file || loading}
            >
                {loading ? "Processing..." : "Remove Background"}
            </button>
            {resultUrl && (
                <img src={resultUrl} alt="Result" className="mt-6 max-w-full border rounded shadow" />
            )}
        </div>
    );
}