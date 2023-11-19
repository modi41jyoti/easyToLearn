import React from "react";
import { Row } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import "./document_collection.css"

export const Document_collection = (props) => {
  const {user, setUser} = props
 

const submitData = () => {
  setUser("purpose")
}
    const props_1 = {
        name: 'file',
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
      
  return (
    <div>
      <form>
        <Row>
          <label>
            <span>1.</span> 10th Marsheet<sup>*</sup>
          </label>
        </Row>
        <Row className="uploadCover">
          <Upload {...props_1}>
            <Button icon={<UploadOutlined />} >attach file upto 5kb</Button>
          </Upload>{" "}
        </Row>
        <Row>
          <label>
            <span>2.</span> 12th Marsheet<sup>*</sup>
          </label>
        </Row>
        <Row className="uploadCover">
          <Upload {...props_1}>
            <Button icon={<UploadOutlined />}>attach file upto 5kb</Button>
          </Upload>{" "}
        </Row>
        <Row>
          <label>
            <span>3.</span> Graduation Marsheet<sup>*</sup>
          </label>
        </Row>
        <Row className="uploadCover">
          <Upload {...props_1}>
            <Button icon={<UploadOutlined />}>attach file upto 5kb</Button>
          </Upload>{" "}
        </Row>
        <Row>
          <label>
            <span>4.</span> Post Graduation Marsheet
          </label>
        </Row>
        <Row className="uploadCover">
          <Upload {...props_1}>
            <Button icon={<UploadOutlined />}>attach file upto 5kb</Button>
          </Upload>{" "}
        </Row>
        <Row>
          <label>
            <span>5.</span>Offer Letter<sup>*</sup>
          </label>
        </Row>
        <Row className="uploadCover">
          <Upload {...props_1}>
            <Button icon={<UploadOutlined />}>attach file upto 5kb</Button>
          </Upload>{" "}
        </Row>
        <Row>
          <label>
            <span>6.</span>Salary Slips<sup>*</sup>
          </label>
        </Row>
        <Row className="uploadCover">
          <Upload {...props_1}>
            <Button icon={<UploadOutlined />}>attach file upto 5kb</Button>
          </Upload>{" "}
        </Row>
        <Row>
          <label>
            <span>7.</span>Bank Statment<sup>*</sup>
          </label>
        </Row>
        <Row className="uploadCover">
          <Upload {...props_1}>
            <Button icon={<UploadOutlined />}>attach file upto 5kb</Button>
          </Upload>{" "}
        </Row>
        <Row>
          <label>
            <span>8.</span>Increment Letter(if any)
          </label>
        </Row>
        <Row className="uploadCover">
          <Upload {...props_1}>
            <Button icon={<UploadOutlined />}>attach file upto 5kb</Button>
          </Upload>{" "}
        </Row>
        <Row>
          <label>
            <span>9.</span>Others(if any)
          </label>
        </Row>
        <Row className="uploadCover">
          <Upload {...props_1}>
            <Button icon={<UploadOutlined />}>attach file upto 5kb</Button>
          </Upload>{" "}
        </Row>
        <button
          type="submit"
          style={{ width: "20%", height: "40px" }}
          onClick={submitData}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
