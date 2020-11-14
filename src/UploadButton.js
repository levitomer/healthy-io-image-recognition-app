import { LoadingOutlined } from '@ant-design/icons';

export default function UploadButton(props) {
    return (
        <div className="upload-button">
            {props.loading ? (
                <LoadingOutlined style={{ fontSize: 40 }} />
            ) : (
                <div className="upload-text">Click Here to upload an image</div>
            )}
        </div>
    );
}
