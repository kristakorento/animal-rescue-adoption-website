import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../Nettisivujen_Tyylit/TrialAdoption.css'

function TrialAdoption() {
  return (
    <div className='bg-color-grey'>
      <div className='bg-color-yellow' style={{ backgroundColor: "#ffe08a", padding: "2rem", textAlign: "center" }}>
        <h1>Trial Adoption</h1>
        <p>Not sure if you're ready to commit?
           A trial adoption gives you and the dog a chance to get to know each other before making a lifelong decision. 
        </p>
      </div>

      <Container className="my-5">
        <div className='bg-color-grey'>
          <Row className="justify-content-center"  style={{ margintop:"4rem" ,marginBottom: "4rem"}}>
            <Col md={8} lg={6} className="text-center">
              <h3>What Is a Trial Adoption?</h3>
              <p style={{lineHeight: "2.0"}}>A trial adoption allows you to welcome a dog into your home for a short period 
                (usually 1–2 weeks) to see how well the match fits — without the pressure of finalizing the adoption right away.
              </p>

              <h3>How Long Does the Trial Last?</h3>
              <p style={{ lineHeight: "2.0"}}>
                Our standard trial adoption period is up to 14 days. In some cases, 
                this can be extended slightly depending on the dog’s needs or your situation. 
              </p>

              <h3>What's Required from the Adopter?</h3>
              <ul>
                <li>- You must have an approved adoption application on file</li>
                <li>- Be located in Finland and able to pick up and return the dog to our shelter if needed</li>
                <li>- Provide a safe, stable home environment during the trial</li>
                <li>- Commit to daily care, patience, and time to help the dog settle</li>
                <li>- Communicate with us during the trial and be open to a follow-up call or check-in</li>
            </ul>

              <h3>Is There a Fee?</h3>
              <p style={{ lineHeight: "2.0"}}>Yes — we require a trial adoption deposit of 50€, which is:</p>
              <ul>
                <li>- Deducted from the total adoption fee if you decide to adopt</li>
                <li>- Refunded in full if the dog is returned in good condition and on time</li>
              </ul>
              <p>This helps us cover part of the dog's care and temporarily pause other adoption applications. </p>

              <h3>After the Trial</h3>
              <ul>
                <li>- If it’s a match, we’ll move forward with the full adoption contract, finalize the payment, and provide all medical records.</li>
                <li>- If it’s not the right fit, that’s okay — the dog will return to our care, and we’ll continue working to find them the perfect home.</li>
              </ul>

              <h3>Important Notes</h3>
              <ul>
                <li>- Trial adoption is not available for all dogs. Some may need more experienced homes or stability right away.</li>
                <li>- We’re here to support you during the trial with advice, resources, and tips on helping your rescue dog settle in.</li>
                <li>- A trial adoption is a commitment — it’s not “just testing” a dog for fun. Please consider it only if you're genuinely open to adoption.</li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>

      <div className='bg-color-yellow' style={{ backgroundColor: "#ffe08a", padding: "2rem", textAlign: "center" }}>
        <h3>Have questions?</h3>
        <p>Check out our FAQ section or contact us for more information.</p>
      </div>

    </div>
  );
}

export default TrialAdoption;
