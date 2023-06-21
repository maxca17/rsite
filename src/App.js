import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import resumeImg from './resume.png';


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
    <img src={resumeImg} alt="Resume Format" />
  </div>
  <h2>Upload your current resume information in a word document in the format provided below</h2>
  <div className='button'>
    <input type="file" id="file1" onChange={onFileChange1} hidden />
    <label htmlFor="file1" className="custom-file-upload">Select Resume File</label>
  </div>
  <div className='button'>
    <input type="file" id="file2" onChange={onFileChange2} hidden />
    <label htmlFor="file2" className="custom-file-upload">Select Additional File</label>
  </div>
  <div className="input-wrapper">
    <input type="text" className="secret-number" placeholder="Enter Secret Value" />
  </div>
  <div className="button">
    <button onClick={onFilesUpload}>Upload Files!</button>
  </div>
</div>

  );
};

export default App;
