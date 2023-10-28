import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
// import Slider from '@material-ui/core/Slider';
import getCroppedImg from './cropImage';
import { Button,Slider } from '@mui/material/Button';
// import { Button } from '@material-ui/core';

const ImageUploader = () => {
  const [imageSrc, setImageSrc] = useState();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isCropping, setIsCropping] = useState(false);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setImageSrc(reader.result));
      reader.readAsDataURL(file);
    }
  };

  const startCropping = () => {
    setIsCropping(true);
  };

  const cancelCropping = () => {
    setIsCropping(false);
  };

  const showCroppedResult = useCallback(async () => {
    try {
      const croppedImageResult = await getCroppedImg(
        imageSrc,
        croppedAreaPixels
      );
      setImageSrc(croppedImageResult);
      setIsCropping(false);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels]);

  return (
    <section>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imageSrc && <img src={imageSrc} alt="Uploaded" style={{ width: '300px',maxHeight:'300px' }} />}
      {imageSrc && !isCropping && (
        <Button onClick={startCropping} variant="contained" color="primary" style={{ marginTop: '1rem' }}>
          Crop Image
        </Button>
      )}
      {isCropping && imageSrc && (
        <div>
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
          <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e, zoom) => setZoom(zoom)}
            style={{ marginTop: '1rem' }}
          />
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <Button onClick={showCroppedResult} variant="contained" color="primary">
              Apply Crop
            </Button>
            <Button onClick={cancelCropping} variant="contained" color="secondary">
              Cancel
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageUploader;
