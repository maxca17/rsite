import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


const App = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const onFileChange1 = (event) => {
    setFile1(event.target.files[0]);
  };

  const onFileChange2 = (event) => {
    setFile2(event.target.files[0]);
  };

  const onFilesUpload = async () => {
    const formData = new FormData();

    // append the files to formData
    formData.append("file1", file1);
    formData.append("file2", file2);

    console.log(file1, file2);

    // Make a post request to the API endpoint
    const response = await axios.post("http://localhost:8000/upload", formData);
    console.log(response.data);
  };

  return (
    <div>
      <h1>File Upload</h1>
      <div className="format-image">
      <img src="path/to/your/image.jpg" alt="Resume Format" />
      </div>
        <h2>Upload your current resume information in a word document in the format provided below</h2>
        <div className='button'>
        <input type="file" onChange={onFileChange1} />
      </div>
      <div>
        <input className='button' type="file" onChange={onFileChange2} />
      </div>
      <button onClick={onFilesUpload}>Upload Files!</button>
    </div>
  );
};

export default App;
