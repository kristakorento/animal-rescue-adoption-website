import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../Nettisivujen_Tyylit/PrivacyPolicy.css';

function PrivacyPolicy(){
    return(
        <div className='bg-color-grey'>
        <div className='bg-color-yellow p-5' style={{ backgroundColor: "#ffe08a", padding: "2rem", textAlign: "center" }}>
          <h1>Privacy Policy</h1>
          <p>
            We are committed to protecting your personal data and ensuring your privacy is respected.
            This Privacy Policy explains how we collect, use, store, and protect your information when you interact with our services.
          </p>
        </div>

      <Container className="my-5">
        <Row className="justify-content-center"  style={{ margintop:"4rem" ,marginBottom: "4rem"}}>
          <Col md={8} lg={6} className="text-center">
            <h3>What Information We Collect</h3>
            <p>
              We may collect personal information that you provide to   us directly, such as your name, email address, phone number, 
              billing information, and any other details you choose to share. 
              Additionally, we collect non-personal information automatically, such as IP addresses, browser types, 
              device information, and browsing behavior through cookies and analytics tools.
            </p>

            <h3>Why We Collect Your Data</h3>
            <p style={{ lineHeight: "2.0"}}>
              We collect your information to:
            </p>
            <ul>
              <li>- Provide, manage, and improve our services.</li>
              <li>- Communicate with you, including responding to your inquiries and providing customer support.</li>
              <li>- Process transactions securely.</li>
              <li>- Send you important updates, promotional materials, or other information (you can opt out at any time).</li>
              <li>- Comply with legal obligations.</li>
            </ul>

            <h3>How We Store and Protect Your Data</h3>
            <p style={{ lineHeight: "2.0"}}>Your data is stored securely using encryption, access controls, and other 
              industry-standard security measures. 
              We regularly monitor our systems for vulnerabilities and attacks to ensure your information remains safe.
            </p>

            <h3>How Long We Keep Your Data</h3>
            <p style={{ lineHeight: "2.0"}}>
              We retain your personal data only as long as necessary to fulfill the purposes we collected it for, 
              including legal, accounting, or reporting requirements.
              When we no longer require your information, we securely delete or anonymize it.
            </p>

            <h3>Cookies and Website Analytics</h3>
            <p style={{ lineHeight: "2.0"}}>We use cookies and similar technologies to enhance your browsing experience, 
              understand how our website is used, and improve our services. You can manage or disable cookies through your browser settings. 
              Our analytics partners may also collect information in an aggregated and anonymous form to help us understand usage patterns.
            </p>

            <h3>Your Rights Under GDPR</h3>
            <p style={{ lineHeight: "2.0"}}> 
             If you are located in the European Economic Area (EEA), you have the following rights:
            </p>
            <ul>
              <li>- The right to access, correct, update, or request deletion of your personal information.</li>
              <li>- The right to object to or restrict our processing of your data.</li>
              <li>- The right to withdraw your consent at any time.</li>
              <li>- The right to data portability.</li>
              <li>- The right to lodge a complaint with a data protection authority.</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div style={{ backgroundColor: "#ffe08a", padding: "2rem", textAlign: "center" }}>
        <h3>Have questions?</h3>
        <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us <a href="ContactDetails.jsx">Contact Details</a>
        </p>
      </div>
    </div>
    );
}
export default PrivacyPolicy;