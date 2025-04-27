import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Nettisivujen_Tyylit/AdoptionPolicies.css'

function Policies() {
  return (
    <div className="bg-color-grey">
        <div className='bg-color-yellow'>
            <h1 className="p-3 fw-bold text-decoration-underline">Adoption Policies</h1>
            <p>
                Adopting a rescue dog is a big step — and we’re here to make it smooth and transparent. On this page, you’ll find details about our reservation process, and what’s required from adopters.
            </p>
            <p>
                Thank you for supporting responsible rescue and giving dogs a fresh start.
            </p>
        </div>

     <div className='bg-color-grey'>
     <h2 className="p-3 fw-bold text-decoration-underline">Reservation & Cancellation Policy</h2>
      <p>
        We understand that adopting a dog is a big commitment — and we want to make sure it's the right fit for both you and the dog.
      </p>

      <h3 className=" text-dark p-3 fw-bold text-decoration-underline">Reservation Policy:</h3>
      <p className="fst-italic">
        Once your application is approved, you may reserve a dog for up to 7 days.
      </p>
      <p>
        To reserve a dog, a non-refundable deposit of 50€ is required. This amount will be deducted from the total adoption fee once the adoption is finalized.
      </p>
      <p>
        During the reservation period, we pause all other applications for that dog.
      </p>

      <h3 className="p-3 fw-bold text-decoration-underline">Cancellation Policy</h3>
      <p className="fst-italic">
        If you decide to cancel the adoption after placing a reservation, the deposit is non-refundable.
      </p>
      <p>
        If we need to cancel the adoption on our side — for example, due to concerns about the dog's well-being — the deposit will be refunded in full.
      </p>
      <p>
        Please reserve responsibly. A reservation temporarily removes a dog from our adoption list, which can delay their chance to find a forever home. We appreciate your understanding and commitment.
      </p>

     </div>
      <h2 className="p-3 fw-bold text-decoration-underline">Adoption Eligibility Criteria</h2>
      <p>
        We’re committed to making matches that are safe, stable, and lifelong. To adopt from Hope Tails Rescue, applicants must:
      </p>
      <ul>
            <li>- Be at least 18 years old</li>
            <li>- Reside in Finland (or be able to travel to our shelter for adoption)</li>
            <li>- Have written consent from all household members</li>
            <li>- Provide landlord permission if renting</li>
            <li>- Be prepared to commit to the dog’s lifelong care — emotionally, physically, and financially</li>
            <li>- Understand the unique needs of rescue dogs and commit to giving them time, patience, and training</li>
            <li>- Agree to a home check (virtual or in-person) and follow-up after adoption</li>
      </ul>
      <p>
        We do not prioritize based on who applies first — we focus on finding the best match for the dog’s individual needs.
      </p>

      <h2 className="p-3 fw-bold text-decoration-underline">Adoption Denial Policy</h2>
      <p>
        While we deeply appreciate everyone who opens their heart to a rescue dog, we also have a responsibility to protect their well-being. We may deny an adoption application if:
      </p>
      <ul>
            <li>- The applicant does not meet our eligibility requirements</li>
            <li>- The home or lifestyle is not a suitable match for the specific dog</li>
            <li>- There is a history of animal neglect, abuse, or rehoming pets</li>
            <li>- The applicant is seeking a dog for guarding, breeding, or resale</li>
            <li>- We have concerns about long-term commitment, stability, or understanding of rescue dog needs</li>
      </ul>
      <p>
        All decisions are made with the dog's best interest at heart. If your application is not approved, we’re happy to discuss why and help guide you to a better match if possible.
      </p>
    </div>
  );
}

export default Policies;
