import React, { useState, useContext } from 'react';
import ImageUploading from 'react-images-uploading';
import Modal from '../modal/Modal';
import styled from 'styled-components';
import {
  AddMain,
  AddNav,
  AddWrap,
  Button,
  ButtonPrimary,
} from '../../styles/DefaultStyles';
import Close from '../excerpt/Close';
import { SocketContext } from '../../context/socket';

const UploadAvatar = ({ close }) => {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const maxNumber = 1;
  const socket = useContext(SocketContext);

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const handleUpload = () => {
    const avatar = images[0].data_url;
    const imgData = new FormData();
    imgData.append('file', avatar);
    imgData.append('upload_preset', 'xpend_avatar');
    imgData.append('cloud_name', 'dwhg0s0hw');
    setUploading(true);

    fetch('https://api.cloudinary.com/v1_1/dwhg0s0hw/upload', {
      method: 'POST',
      body: imgData,
    })
      .then((res) => res.json())
      .then((data) => {
        saveImage(data.url);
      })
      .catch((err) => console.log(err));
  };

  const saveImage = (url) => {
    socket.emit('uploadAvatar', url);
    setUploading(false);
    close();
  };

  return (
    <Modal visible={true} close={close}>
      <UploadAvatarWrap>
        <AddWrap>
          <AddNav>
            <div>Edit profile image</div>
            <Close close={close} />
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
                      <div className="image-item__btn-wrapper btn-wrap">
                        <Button onClick={() => onImageUpdate(index)}>
                          Update
                        </Button>
                        <Button onClick={() => onImageRemove(index)}>
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
            <ButtonPrimary
              className={uploading ? 'btn-disabled' : ''}
              onClick={handleUpload}
            >
              {uploading ? 'Uploading' : 'Upload'}
            </ButtonPrimary>
          </AddMain>
        </AddWrap>
      </UploadAvatarWrap>
    </Modal>
  );
};

const UploadAvatarWrap = styled.div`
  .drag-area {
    width: 100%;
    height: 200px;
    border: 2px dashed ${(props) => props.theme.colors.border_color1};
    border-radius: ${(props) => props.theme.reset.border_radius};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
    cursor: pointer;
  }

  .image-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      margin-bottom: 10px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      object-position: top;
    }
  }

  .btn-wrap {
    display: flex;

    button {
      margin: 0 10px;
    }
  }
`;

export default UploadAvatar;
