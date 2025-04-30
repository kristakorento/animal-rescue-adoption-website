import '../Nettisivujen_Tyylit/AdoptionProcess.css'
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function FeesAndProcess(){
    return (
        <div className='bg-color-grey'>
            <div className='bg-color-yellow p-5 d-flex justify-content-center' style={{ textAlign: "center" }}>
                <div className='w-50'>
                    <h1 className='pb-3'>Adoption Process</h1>
                    <p className='info'>
                        Adopting a rescue dog is a life-changing experience — for both you and the dog. At Hope Tails Rescue, 
                        we believe in thoughtful, well-matched adoptions that lead to lifelong companionship. That’s why we’ve created a 
                        clear, step-by-step process to help guide you from the first meet-and-greet to welcoming your new best friend home.  <br />

                    <br />Whether you're a first-time adopter or an experienced dog parent, we’ll be with you every step of the way.   
                </p>
                </div>
          </div>
    
          <Container className="my-5">
            <div className='bg-color-grey'>
              <Row className="justify-content-center"  style={{ margintop:"4rem" ,marginBottom: "4rem"}}>
                <Col md={8} lg={6} className="text-center">
                    <h2 className='pb-2'>Step-by-Step Adoption Process</h2>
                    <p>Adopting a rescue dog is an exciting and meaningful journey. At Hope Tails Rescue, 
                        we guide you through each step to ensure the best possible match for both you and the dog. 
                    </p>
                    <div className='adoption-process'>
                        <ul className='list-unstyled'>
                            <li>
                                <h3 className='pt-4 pb-3'>1. Explore Available Dogs</h3>
                                <p className="white-background p-3">
                                    Browse the dogs currently at our shelter in Finland. Each dog has a unique personality, story, and set of needs — 
                                    read their profiles carefully to see who might be the right fit for you.
                                </p>
                            </li>
                            <li>
                                <h3 className='pt-4 pb-3'>2. Visit & Submit an Adoption Application</h3>
                                <p className="white-background p-3">
                                    Once you’ve found a dog you’re interested in, visit us at our shelter to meet the dog in person and 
                                    fill out our adoption form. In the form, you’ll tell us about your home, lifestyle, experience with dogs,
                                    and what you're looking for in a companion. 
                                </p>
                            </li>
                            <li>
                                <h3 className='pt-4 pb-3'>3. Application Review & Phone Interview</h3>
                                <p className="white-background p-3">
                                    After your visit, our team will review your application. If we feel you could be a good match, 
                                    we’ll contact you for a phone interview to talk more about the dog, answer your questions, and go over the next steps. 
                                </p>
                            </li>
                            <li>
                            <h3 className='pt-4 pb-3'>4. Follow-Up Meet & Greet (If Needed)</h3>
                                <p className="white-background p-3">
                                    If more time with the dog is needed, we’ll invite you for another one-on-one visit at our shelter. 
                                    This gives you both a chance to connect in a relaxed environment and see if it feels like the right match. 
                                </p>
                            </li>
                            <li>
                                <h3 className='pt-4 pb-3'>5.Reservation (Optional)</h3>
                                <p className="white-background p-3">
                                    If you’re confident in your decision but need a few days to prepare,
                                    you can reserve the dog for up to 7 days with a non-refundable deposit. 
                                    See our Reservation Policy for more details. 
                                </p>
                            </li>
                            <li>
                                <h3 className='pt-4 pb-3'>6. Home Check (Virtual or In-Person)</h3>
                                <p className="white-background p-3">
                                    Before finalizing the adoption, we may do a brief home check to ensure the environment is safe and suitable for the dog.
                                </p>
                            </li>
                            <li>
                                <h3 className='pt-4 pb-3'>6. Home Check (Virtual or In-Person)</h3>
                                <p className="white-background p-3">
                                    Before finalizing the adoption, we may do a brief home check to ensure the environment is safe and suitable for the dog.
                                </p>
                            </li>
                            <li>
                                <h3 className='pt-4 pb-3'>7. Adoption Contract & Payment</h3>
                                <p className="white-background p-3">
                                    Once approved, we’ll go through the adoption contract together. 
                                    You’ll pay the remaining adoption fee and receive the dog’s medical records and EU pet passport. 
                                </p>
                            </li>
                            <li>
                            <h3 className='pt-4 pb-3'>8. Welcome Home!</h3>
                            <p className="white-background p-3">
                                It’s time to bring your new family member home! We’ll continue to support you with advice, care tips, and post-adoption guidance. 
                            </p>
                            </li>
                        </ul>
                    </div>
                    

                   

                    <div className='adoption-timeline'>
                        <h2 className='p-3'>Adoption Timeline</h2>
                        <p>
                            The adoption process usually takes about 1 to 2 weeks, depending on how quickly each step is completed. <br /> <br />
                        <p style={{fontWeight: 'bold'}}>Here's a general overview: </p>
                        </p>
                        <div className="text-start info-list">
                        <ul>
                            <li>Application Review: 2–5 days</li>
                            <li>Interview & Communication: 2–3 days</li>
                            <li>Meet & Greet / Reservation: Within 7 days</li>
                            <li>Home Check & Finalization: 2–5 days</li>
                            <li>Adoption Completion: Usually within 14 days from application</li>
                        </ul>
                        </div>
                        <p className='p-3'>
                            We prioritize quality matches over speed — thank you for your patience and understanding. 
                        </p>
                    </div>

                    <div className='adoption-fees text-center'>
                        <h2 className='pt-5 pb-3'>Adoption Fees</h2>
                        <p>
                            At Hope Tails Rescue, our adoption fee helps cover a portion of the costs involved in rescuing, 
                            caring for, and transporting our dogs safely to Finland. <br /> <br /> <b>Every adopted dog receives:</b>   
                        </p>
                        <div className="text-start info-list">
                        <ul>
                            <li>Vaccinations (core + rabies)</li>
                            <li>Microchipping</li>
                            <li>EU Pet Passport</li>
                            <li>Sterilization (if old enough)</li>
                            <li>Parasite treatments</li>
                            <li>Health checks</li>
                            <li>Travel from Spain to our shelter in Finland</li>
                            <li>Ongoing care and behavioral observation</li>
                        </ul>
                        </div>
                        <p className='pt-4'> <b>Current Adoption Fee:</b> 450–500€ <br /> </p>
                        <p>(Please note: fees may vary slightly based on age, medical needs, or travel costs.) <br /> </p>
                        <p>Your adoption fee allows us to continue saving more dogs in need. Thank you for supporting ethical, responsible rescue!</p>
                    </div>
                </Col>
              </Row>
            </div>
          </Container>
    
          <div className='bg-color-yellow p-5' style={{padding: "2rem", textAlign: "center" }}>
            <h2 className='pb-4'>Post-Adoption Support</h2>
            <p>We offer Post-Adoption Support for every adoption. 
                You can read more about it on our <a className='link-bold' href="/adoption/info-guides">Infos & Guides page</a> 
            </p>

            <div className='important-notes'>
                <h3 className='p-3 pt-5'>Important Notes</h3>
                <Col md={8} lg={6} className="m-auto">
                <div className="text-start info-list">
                <ul className="">
                    <li>We do not operate on a "first come, first served" basis. Our goal is to find the right home for each dog.</li>
                    <li>All our dogs are adopted from our shelter in Finland — we do not ship dogs or adopt without meeting in person.</li>
                    <li>If you’re unsure about adopting, ask us about our trial adoption option. 
                        We provide ongoing support for all adopters — you're not alone in this journey.
                    </li>
                    <li>Some dogs may require more time, patience, or experience. We will always be honest about their needs.</li>
                </ul>
                </div>
                </Col>
            </div>

            <h2 className='pb-4 p-5'>Contact Info</h2>
                <p>
                    Do you have questions? Check out our <a className='link-bold' href="/adoption/faq">FAQ</a> section or <a className='link-bold' href="/contact-details">contact us</a> for more information. 
                </p>
            </div>
    
        </div>
    );
}
export default FeesAndProcess;