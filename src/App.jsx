import React, { useState } from "react";
import { Button, Modal, message, Steps, theme } from "antd";
import Form_selection from "./pages/form_selection/form_selection/form_selection";
import "./App.css"
const steps = [
  {
    title: "Form-Selection",
    content: <Form_selection/>,
  },
  {
    title: "Set-up",
    content: "Set-up",
  },
  {
    title: "Form-creation",
    content: "Form-creation",
  },
  {
    title: "Review",
    content: "Review",
  },
];
const App = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    marginTop: 0,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () =>  {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <Button type="primary" onClick={()=>setIsModalOpen(true)}>
        Please File The Form
      </Button>
      <Modal
        title={steps[current].title}
        open={isModalOpen}
        footer={[]}
        // onOk={handleOk}
        onCancel={handleCancel}
        width="100%"
        // height: '80vh',
        style={{ marginTop: '-50px'}}
      >
        <Steps current={current} items={items} />
        <div style={contentStyle}> {steps[current].content}</div>
        <div
          style={{
            marginTop: "150px",
            position: "absolute",
            bottom: "20px",
            right: "20px",
          }}
        >
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
      </Modal>
    </>
  );
};
export default App;
