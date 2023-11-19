import React from "react";
import { Row } from "antd";
import "./purpose.css";
const Purpose = (props) => {
    const {user, setUser} = props

  const submitData = () => {};

  return (
    <div>
      <form>
        <Row>
          <label>
            <span>1.</span> Tell me about a time you were asked to do something
            you had never done before. How did you react? What did you learn?
          </label>
        </Row>
        <Row>
          <textarea
            rows="3"
            // cols="70"
            style={{ width: "100%" }}
            placeholder="Enter a description for the long answer"
            required
            minLength={300}
          />
        </Row>
        <Row className="textDescription">300 words</Row>
        <Row>
          <label>
            <span>2.</span>
            Tell me about the last time something significant didn’t go
            according to plan at work. What was your role? What was the outcome?{" "}
          </label>
        </Row>
        <Row>
          <textarea
            rows="3"
            // cols="70"
            placeholder="Enter a description for the long answer"
            required
            minLength={10}
            style={{ width: "100%" }}
          />
        </Row>
        <Row className="textDescription">300 words</Row>

        <Row>
          <label>
            <span>3.</span>
            What are the three things that are most important to you in a job?
          </label>
        </Row>
        <Row>
          <textarea
            placeholder="Enter a description for the long answer"
            rows="3"
            // cols="70"
            required
            minLength={300}
            style={{ width: "100%" }}
          />
        </Row>
        <Row className="textDescription">300 words</Row>
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

export default Purpose;
