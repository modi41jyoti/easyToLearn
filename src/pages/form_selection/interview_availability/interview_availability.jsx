import React from "react";
import { Row, Col } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
const Interview_availability = (props) => {
    const {user, setUser} = props

    const submitData = () => {
        setUser("interviewAvailibilty")
    };

  return (
    <div>
      <form>
        <Row>
          <label>
            <span>1.</span> Email<sup> *</sup>
          </label>
        </Row>
        <Row>
          <input
            type="email"
            required
            placeholder="Example - userid@gmail.com"
            style={{ width: "100%", marginBottom: "20px", height: "30px" }}
          />
        </Row>
        <Row>
          <label>
            <span>2.</span> Location
          </label>
        </Row>
        <Row>
          <input
            type="location"
            placeholder="Search or enter your location "
            style={{ width: "100%", marginBottom: "20px",height: "30px" }}
          />
        </Row>
        <Row>
          <label>
            <span>3.</span> Interview Date
          </label>
        </Row>
        <Row>
          <input type="date" style={{ width: "40%", marginBottom: "20px", height: "30px" }} />
        </Row>
        <Row>
          <label>
            <span>4.</span>Time time
          </label>
        </Row>
        <Row>
          <input type="time" style={{ width: "40%", marginBottom: "20px", height: "30px" }} />
        </Row>
        <Row>
          <label>
            <span>5.</span>Time Zone
          </label>
        </Row>
        <Row style={{ width: "100%", marginBottom: "20px" }}>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            style={{ border: "1px solid black" }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Row>
                  <Col>Search or Select a time zone from below</Col>
                  <Col>
                    <DownOutlined />
                  </Col>
                </Row>
              </Space>
            </a>
          </Dropdown>
        </Row>
        <Row>
          <label>
            <span>6.</span>Interview Medium
          </label>
        </Row>
        <Row>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            style={{
              border: "1px solid red",
              width: "100%",
              width: "40%",
              marginBottom: "20px",
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Search or Select a time zone from below
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
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

export default Interview_availability;
