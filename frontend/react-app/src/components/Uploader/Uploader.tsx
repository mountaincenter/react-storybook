import React, { useState } from 'react';
import Button from '../Button/Button';
import BaseIcon from '../Icon/BaseIcon/BaseIcon';
import { IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

interface ImageUploaderProps {
  onUpload: (images: File[]) => void;
  allowMultiple?: boolean;
  label: string;
}

const Uploader: React.FC<ImageUploaderProps> = ({
  onUpload,
  allowMultiple,
  label,
}) => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      console.log('filesArray: ', filesArray);
      setPreviewImages((prevImages) => prevImages.concat(filesArray));
      onUpload(Array.from(e.target.files));
    }
  };

  const removeImage = (indexexToRemove: number) => {
    setPreviewImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexexToRemove)
    );
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id="image-upload"
        multiple={allowMultiple}
      />
      <label htmlFor="image-upload">
        <Button component="span" label={label} />
      </label>

      <div>
        {previewImages.map((src, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              display: 'inline-block',
              margin: '5px',
            }}
          >
            <img
              key={index}
              src={src}
              alt={`Preview ${index}`}
              style={{ maxWidth: '100px', maxHeight: '100px', margin: '5px' }}
            />
            <IconButton onClick={() => removeImage(index)}>
              <BaseIcon Icon={CancelIcon} />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Uploader;
