"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { Form, Container, Row, Col, InputGroup } from "react-bootstrap";
import OpenAI from "openai";

export default function Home() {
  const [messages, setMessages] = useState("");
  const [response, setResponse] = useState("");
  const [apiUrl, setApiUrl] = useState("http://localhost:11434/v1/chat");
  const [apiToken, setApiToken] = useState("iloveyourapitoken");
  const [model, setModel] = useState("gemma:7b");

  return (
    <main>
      <div className="my-2 overflow-hidden" style={{ height: "100vh" }}>
        {/* chat */}
        <div className="overflow-y-auto">
          <Container fluid>
            <Row>
              <Col>
                <h7 className="text-left">You:</h7>
                <p>abcd</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h7 className="text-left">AI:</h7>
                <p>efgh</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h7 className="text-left">You:</h7>
                <p>abcd</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h7 className="text-left">AI:</h7>
                <p>efgh</p>
              </Col>
            </Row>
          </Container>
        </div>

        {/* input */}
        <div className="stick-bottom">
          <Container fluid>
            <Row className="my-1">
              <Col>
                <InputGroup>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={messages}
                    onChange={(e) => setMessages(e.target.value)}
                  />
                  <div>
                    <a className="btn btn-outline-primary m-2" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-send-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                      </svg>
                    </a>
                  </div>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="my-1">
                <InputGroup>
                  <InputGroup.Text>API URL</InputGroup.Text>
                  <Form.Control
                    type="text"
                    value={apiUrl}
                    onChange={(e) => setApiUrl(e.target.value)}
                  />
                </InputGroup>
              </Col>
              <Col md={3} className="my-1">
                <InputGroup>
                  <InputGroup.Text>API Token</InputGroup.Text>
                  <Form.Control
                    type="text"
                    value={apiToken}
                    onChange={(e) => setApiToken(e.target.value)}
                  />
                </InputGroup>
              </Col>
              <Col md={3} className="my-1">
                <InputGroup>
                  <InputGroup.Text>Model</InputGroup.Text>
                  <Form.Control
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  />
                </InputGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </main>
  );
}