import { useState } from "react";
import { Row, Col } from "antd";
import "./form_selection.css";
import { Detail_collection } from "../detail_collection/detail_collection";
import { Document_collection } from "../document_collection/document_collection";
import Purpose from "../purpose/purpose";
import Interview_availability from "../interview_availability/interview_availability";

const Form_selection = () => {
  const [user, setUser] = useState("detailCollection");
  const handlePages = (name) => {
    setUser(name);
  };
  return (
    <div className="formContainer">
      <Row className="formCover">
        <Col span={8} className="formSectionSubPartWrapper">
          <Row className="newFormRow {user=='detailCollection' && newFormHeighted}">
            <Col span={6} className="newFormCol_1 formSectionSubPart"></Col>
            <Col span={17} className="newFormCol_2 formSectionSubPart">
              <p className="newFormCol_para_1">New Form</p>
              <p className="newFormCol_para_2">
                Start creating a new form with the wide options of fields
                available
              </p>
            </Col>
          </Row>
          <p className="exploreTemp">Explore the following Templates:</p>
          <Row
            className="newFormRow"
            onClick={() => handlePages("detailCollection")}
          >
            <Col span={6} className="newFormCol_1 formSectionSubPart"></Col>
            <Col span={17} className="newFormCol_2 formSectionSubPart">
              <p className="newFormCol_para_1">Details Collection</p>
              <p className="newFormCol_para_2">
                Collect information from Candidates on their education, work
                experience, contact no,etc{" "}
              </p>
            </Col>
          </Row>
          <Row
            className="newFormRow"
            onClick={() => handlePages("documentCollection")}
          >
            <Col span={6} className="newFormCol_1 formSectionSubPart"></Col>
            <Col span={17} className="newFormCol_2 formSectionSubPart">
              <p className="newFormCol_para_1">Document Collection</p>
              <p className="newFormCol_para_2">
                Save time and efforts: Explore this template to find a set of
                questions required for document collection
              </p>
            </Col>
          </Row>
          <Row className="newFormRow" onClick={() => handlePages("purpose")}>
            <Col span={6} className="newFormCol_1 formSectionSubPart"></Col>
            <Col span={17} className="newFormCol_2 formSectionSubPart">
              <p className="newFormCol_para_1">Statement of Purpose</p>
              <p className="newFormCol_para_2">
                Start creating a new form with the wide options of fields
                available
              </p>{" "}
            </Col>
          </Row>
          <Row
            className="newFormRow"
            onClick={() => handlePages("interviewAvailibilty")}
          >
            <Col span={6} className="newFormCol_1 formSectionSubPart"></Col>
            <Col span={17} className="newFormCol_2 formSectionSubPart">
              <p className="newFormCol_para_1">Interview Availability </p>
              <p className="newFormCol_para_2">
                Start creating a new form with the wide options of fields
                available{" "}
              </p>{" "}
            </Col>
          </Row>
        </Col>
        <Col span={15} className="formDetails">
          <Row>Preview</Row>
          <Row>You will be able to customize the fields in the later stage</Row>
          <Row
            style={{
              border: "1px solid grey",
              borderRadius: "5px",
              marginTop: "10px",
              display: "flex",
              flexDirection: "column",
              backgroundColor: 'white'
            }}
          >
            <div style={{ padding: "30px", background: "#1A8FE626" }}>
              <Row className="enquiryForm">Name of the Enquiry Form</Row>
              <Row className="oneLineDescription">
                One line description of the form
              </Row>
              <Row className="provideInfo">
                Provide the following information to process your application
              </Row>
            </div>
            <div style={{ margin: "80px" }}>
              {user === "detailCollection" ? (
                <Detail_collection user={user} setUser={setUser}/>
              ) : user === "documentCollection" ? (
                <Document_collection user={user} setUser={setUser}/>
              ) : user === "purpose" ? (
                <Purpose setUser={setUser}/>
              ) : user === "interviewAvailibilty" ? (
                <Interview_availability user={user} setUser={setUser}/>
              ) : (
                <Detail_collection user={user} setUser={setUser}/>
              )}
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Form_selection;
