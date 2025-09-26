import React, { useState } from 'react';
import Image from 'next/image';

const ImageUpload = ({ onImageUpload, currentImage, label = "Upload Image" }) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentImage || '');
  const [error, setError] = useState('');

  // Handle file select
 const handleFileSelect = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    setError("Please select a valid image file");
    return;
  }

  if (file.size > 10 * 1024 * 1024) {
    setError("Image size should be less than 10MB");
    return;
  }

  setUploading(true);
  setError("");

  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:8080/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text || "Upload failed");
    }

    const data = await response.json();
    setPreview(data.url);
    onImageUpload(data.url);
  } catch (err) {
    setError(`Upload failed: ${err.message}`);
  } finally {
    setUploading(false);
  }
};


  // Remove image
  const handleRemoveImage = () => {
    setPreview('');
    onImageUpload('');
    setError('');
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      {/* Upload Section */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
        {preview ? (
          <div className="space-y-4">
            <div className="relative w-full max-w-sm mx-auto h-48 border border-gray-200 rounded-lg overflow-hidden">
              <img
                src={preview}
                alt="Preview"
                fill
                className="object-cover"
                onError={() => setError("Failed to load image preview")}
              />
            </div>
            
            <div className="flex justify-center space-x-4">
              <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
                {uploading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Uploading...
                  </span>
                ) : "Change Image"}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  disabled={uploading}
                />
              </label>
              
              <button
                type="button"
                onClick={handleRemoveImage}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                disabled={uploading}
              >
                Remove
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-gray-500">
              <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Click to upload an image</p>
              <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
            </div>
            
            <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-block">
              {uploading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Uploading...
                </span>
              ) : (
                "Choose Image"
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                disabled={uploading}
              />
            </label>
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
          {error}
        </div>
      )}

      {/* Image URL Display */}
      {preview && (
        <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
          <p className="text-xs text-gray-600 font-medium mb-1">Image URL:</p>
          <p className="text-xs text-gray-800 break-all font-mono bg-white px-2 py-1 rounded border">
            {preview}
          </p>
        </div>
      )}

      {/* Manual URL Input */}
      {/* <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Or enter image URL manually:
        </label>
        <input
          type="url"
          value={preview}
          onChange={(e) => {
            setPreview(e.target.value);
            onImageUpload(e.target.value);
            setError('');
          }}
          placeholder="https://example.com/image.jpg"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
      </div> */}
    </div>
  );
};

export default ImageUpload;
