import React, { useState } from "react";

const FileUploader: React.FC<{ onUpload: (file: File) => void }> = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      onUpload(file);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <input type="file" accept=".txt,.pdf,.csv" onChange={handleFileChange} />
      {selectedFile && <p className="mt-2 text-sm text-gray-600">Uploaded: {selectedFile.name}</p>}
    </div>
  );
};

export default FileUploader;
