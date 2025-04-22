import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TrialAdoption() {
  return (
    <div>
      <div style={{ backgroundColor: "#ffe08a", padding: "2rem", textAlign: "center" }}>
        <h2>Trial Adoption</h2>
        <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>

      <Container className="my-5">
        <Row className="justify-content-center"  style={{ margintop:"4rem" ,marginBottom: "4rem"}}>
          <Col md={8} lg={6} className="text-center">
            <h5>What Is a Trial Adoption?</h5>
            <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>

            <h5>How Long Does the Trial Last?</h5>
            <p style={{ lineHeight: "2.0"}}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <h5>What's Required from the Adopter?</h5>
            <p style={{ lineHeight: "2.0"}}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <h5>Is There a Fee?</h5>
            <p style={{ lineHeight: "2.0"}}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <h5>After the Trial</h5>
            <p style={{ lineHeight: "2.0"}}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <h5>Important Notes</h5>
            <p style={{ lineHeight: "2.0"}}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Col>
        </Row>
      </Container>

      <div style={{ backgroundColor: "#ffe08a", padding: "2rem", textAlign: "center" }}>
        <h4>Have questions?</h4>
        <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  );
}

export default TrialAdoption;
