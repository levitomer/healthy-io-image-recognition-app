import React, { useState } from 'react';
import { Upload, message } from 'antd';
import UploadButton from './UploadButton';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    return isJpgOrPng;
}

export default function ImageEditor(props) {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImage] = useState(null);

    function handleChange(info){
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (imageUrl) => {
                props.onImageUpload(imageUrl);
                setImage(imageUrl);
                setLoading(false);
            });
        }
    };

    return (
        <Upload
            name="image"
            listType="picture-card"
            className="image-editor"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
            disabled={imageUrl}
        >
            {imageUrl ? (
                <img src={imageUrl} alt="upload" className="ImageViewer" />
            ) : (
                <UploadButton loading={loading} />
            )}
        </Upload>
    );
}
