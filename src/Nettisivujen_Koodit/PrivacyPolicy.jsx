import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function PrivacyPolicy(){
    return(
        <div>
      <div style={{ backgroundColor: "#ffe08a", padding: "2rem", textAlign: "center" }}>
        <h2>Privacy Policy</h2>
        <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>

      <Container className="my-5">
        <Row className="justify-content-center"  style={{ margintop:"4rem" ,marginBottom: "4rem"}}>
          <Col md={8} lg={6} className="text-center">
            <h5>What Information We Collect</h5>
            <p className="text-muted"> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>

            <h5>Why We Collect Your Data</h5>
            <p className="text-muted" style={{ lineHeight: "2.0"}}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <h5>How We Store and Protect Your Data</h5>
            <p className="text-muted" style={{ lineHeight: "2.0"}}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <h5>How Long We Keep Your Data</h5>
            <p className="text-muted" style={{ lineHeight: "2.0"}}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <h5>Cookies and Website Analytics</h5>
            <p className="text-muted" style={{ lineHeight: "2.0"}}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <h5>Your Rights Under GDPR</h5>
            <p className="text-muted" style={{ lineHeight: "2.0"}}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
export default PrivacyPolicy;