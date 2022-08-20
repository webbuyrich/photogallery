import React, { useState } from 'react';
import ImageGrid from './comps/imageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';


function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      <Modal selectedImg={selectedImg}/>
    </div>
  );
}

export default App;