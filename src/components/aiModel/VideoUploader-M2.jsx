import React, { useState } from "react";
import { Upload, Loader } from "lucide-react";
const VideoUploaderByAiM2 = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [processedVideo, setProcessedVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a video file first!");
      return;
    }

    setLoading(true);
    setError(null);
    setProcessedVideo(null);

    const formData = new FormData();
    formData.append("file", selectedFile);
    const api = process.env.REACT_APP_AI_MODEL_API_M1;
    console.log(api);
    try {
      // No need for responseType: "blob" if you're returning JSON
      // Remove mode: "no-cors" and fix response handling
      const res = await fetch(`${api}/predict`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      if (!data.videoUrl) {
        throw new Error("Video URL is missing in the response");
      }

      setProcessedVideo(data.videoUrl);
    } catch (err) {
      console.error("Error processing video:", err);
      setError("Failed to process video. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={styles.container}
      className="flex justify-evenly my-5 bg-black rounded-md h-[300px]"
    >
      <div className="flex flex-col justify-between">
        <h2 className="mb-10 text-white">DETECT FIELD KEYPOINTS</h2>
        <div className="text-haki">
          {loading ? (
            <p>Be patient result will be displayed in few minutes...</p>
          ) : (
            <p>
              Select a video file to upload: <br />
              The result will be shown at right side after processing. <br />
              It will take some time to process. Please be patient.
            </p>
          )}
        </div>
        <div>
          <label className="cursor-pointer flex justify-between items-center text-white space-x-2 border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black">
            <span>{selectedFile ? selectedFile.name : "Choose File"}</span>
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <Upload className="w-5 h-5" />
          </label>
          <button
            onClick={handleUpload}
            style={styles.button}
            disabled={loading}
          >
            {loading ? (
              <p className="flex gap-3">
                Processing... <Loader />
              </p>
            ) : (
              "Upload & Process"
            )}
          </button>
          {error && <p style={styles.error}>{error}</p>}
          {processedVideo && (
            <p className="text-green">results are displayed</p>
          )}
        </div>
      </div>
      <div>
        {processedVideo ? (
          <div>
            <h2 className="mb-3 text-white">Processed Video</h2>
            {/* Since it's a Cloudinary URL, we can embed directly */}
            <iframe
              title="Processed Video"
              src={`https://player.cloudinary.com/embed/?public_id=${processedVideo}&cloud_name=dximtsuzo&profile=cld-default`}
              width="500"
              height="220"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <h2 className="text-white">No Video Processed yet.</h2>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    marginTop: "10px",
    padding: "10px 15px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#111",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  video: {
    width: "80%",
    maxWidth: "600px",
    marginTop: "20px",
  },
};

export default VideoUploaderByAiM2;
