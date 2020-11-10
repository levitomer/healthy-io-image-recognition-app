import { LoadingOutlined } from '@ant-design/icons';

const UploadButton = (props) => (
    <div className="upload-button">
        {props.loading ? (
            <LoadingOutlined style={{ fontSize: 40 }} />
        ) : (
            <div className="upload-text">Click Here to upload an image</div>
        )}
    </div>
);

export default UploadButton;