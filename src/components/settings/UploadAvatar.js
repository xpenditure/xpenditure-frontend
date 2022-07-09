import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import Modal from '../modal/Modal';
import styled from 'styled-components';
import { AddMain, AddNav, AddWrap } from '../../styles/DefaultStyles';
import Close from '../excerpt/Close';

const UploadAvatar = ({ close }) => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <Modal visible={true} close={close}>
      <UploadAvatarWrap>
        <AddWrap>
          <AddNav>
            <div>Edit profile image</div>
            <Close cose={close} />
          </AddNav>
          <AddMain>
            <ImageUploading
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                <div>
                  <div
                    className="drag-area"
                    style={isDragging ? { borderColor: 'red' } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </div>
                  &nbsp;
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image['data_url']} alt="" width="100" />
                      <div className="image-item__btn-wrapper">
                        <button onClick={() => onImageUpdate(index)}>
                          Update
                        </button>
                        <button onClick={() => onImageRemove(index)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </AddMain>
        </AddWrap>
      </UploadAvatarWrap>
    </Modal>
  );
};

const UploadAvatarWrap = styled.div``;

export default UploadAvatar;
