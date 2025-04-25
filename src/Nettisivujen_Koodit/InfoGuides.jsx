import '../Nettisivujen_Tyylit/InfoGuides.css';

function InfoGuides() {
  return (
    <div className="container-fluid p-0">
      <div className="text-center bg-color-yellow p-5">
        <h1 className="pb-3">Infos & Guides</h1>
        <div className="paragraph-text">
          <p>At Hope Tails Rescue, every dog we save is part of a bigger mission: giving abandoned and mistreated animals a real chance at a new life. Our work begins in Spain, where many dogs face hardship, and continues all the way to our shelter in Finland, where healing, care, and new beginnings happen.</p>
          <p>This page will guide you through our full rescue process — from the moment a dog is saved, to the day they find their forever home, and beyond. Whether you’re thinking of adopting or just want to understand how we work, we’re glad you’re here. </p>
          <p>Because rescue isn’t just about saving lives — it’s about changing them. </p>
        </div>
      </div>
      <div className="about-container text-center bg-color-gray p-5">
        <h2 className="pb-2">About Our Rescue Process</h2>
        <div className="paragraph-text">
          <h3 className="p-3">From Spain to Our Shelter in Finland</h3>
          <p>At Hope Tails Rescue, we work hard to give dogs in need a fresh start. Many of our dogs are rescued from difficult situations in Spain — including neglect, abandonment, or life on the streets. Through trusted partnerships with local rescuers and shelters in Spain, we identify dogs who are ready for a second chance.</p>
          <h3 className="p-3 pt-5">Here's how the rescue journey works:</h3>
          <p><strong>1. Rescue in Spain:</strong></p>
          <p>Our partner organizations rescue dogs and provide them with immediate care — including vet checks, vaccinations, microchipping, and behavioral assessments.</p>
          <p className="pt-3"><strong>2. Preparing for Travel:</strong></p>
          <p>Once the dog is healthy, vaccinated, and ready to travel (usually after a quarantine and health clearance period), we arrange safe and comfortable transport to Finland. All dogs travel with proper documentation, an EU pet passport, and meet all required legal and health standards.</p>
          <p className="pt-3"><strong>3. Arrival at Our Shelter in Finland:</strong></p>
          <p>When the dogs arrive in Finland, they are welcomed into our shelter, where they can rest, recover from the journey, and begin their adjustment in a calm, safe environment.</p>
          <p>This step is vital — it allows us to observe each dog more closely, continue any needed care or socialization, and truly understand their personality and needs.</p>
          <p className="pt-3"><strong>4. Matching & Adoption:</strong></p>
          <p>Once the dog is ready, we begin the adoption process. We carefully review applications and meet with potential adopters to ensure the best possible match. All adoptions are done responsibly, with the dog's long-term well-being at the center. </p>
        </div>
        <h2 className="pt-5 pb-2">Bringing Your Dog Home</h2>
        <div className="paragraph-text">
          <p className="pt-4">Welcoming a rescue dog is a special moment — but it also takes patience, understanding, and time to help your new companion settle in.</p>
          <p className="pt-3"><strong>Here’s What to Expect:</strong></p>
          <div className="text-start info-list">
            <ul>
              <li>First Days: Your dog may be shy, overwhelmed, or curious. Give them space and a quiet, safe spot to decompress.</li>
              <li>Routine Matters: Keep a consistent feeding, walking, and sleeping schedule to help your dog feel secure.</li>
              <li>Go Slow: Introduce new environments, people, and pets gradually. Let your dog set the pace.</li>
              <li>Positive Reinforcement: Use treats, praise, and gentle guidance to build trust and confidence.</li>
            </ul>
          </div>
          <p className="pt-3">Every dog is different — some adjust in days, others take weeks. We’ll support you every step of the way.</p>
        </div>
        <h2 className="pt-5 pb-2">Health & Veterinary Info</h2>
        <div className="paragraph-text">
          <p className="pt-3"><strong>All our dogs receive:</strong></p>
          <div className="text-start info-list">
            <ul>
              <li>Vaccinations (core + rabies)</li>
              <li>Microchipping</li>
              <li>EU Pet Passport</li>
              <li>Parasite treatment</li>
              <li>Basic health screening</li>
              <li>Sterilization (unless medically unsuitable or too young)</li>
            </ul>
          </div>
          <h3 className="p-3 pt-5">After Arrival in Finland:</h3>
          <p>We recommend a vet check within the first two weeks of adoption. This helps confirm your dog’s health and gives your vet a baseline for future care.</p>
          <p className="pt-3"><strong>We also provide:</strong></p>
          <div className="text-start info-list">
            <ul>
              <li>Medical history in English and Finnish</li>
              <li>Vet records from Spain</li>
              <li>Advice on diet, flea/tick prevention, and ongoing care</li>
            </ul>
          </div>
          <p className="pt-3">Need help finding a vet in your area? Just ask — we have recommendations across Finland. </p>
        </div>
      </div>
      <div className="text-center bg-color-yellow p-5">
        <h2 className="pb-2">Post-Adoption Support</h2>
        <div className="paragraph-text">
          <p className="pt-2">Adopting a rescue dog is a journey, and you’re never alone.</p>
          <p className="pt-3"><strong>Our Post-Adoption Support Program includes:</strong></p>
          <div className="text-start info-list">
            <ul>
              <li>Follow-ups: We check in at 1 week, 1 month, and 3 months post-adoption to offer support and answer questions.</li>
              <li>Behavioral Advice: Need help with training, separation anxiety, or building trust? We can connect you with dog behaviorists experienced in rescue cases.</li>
              <li>Community Support: Join our private Facebook group for adopters where you can share stories, ask questions, and meet other Hope Tails families.</li>
              <li>Trial Adoption Option: Not sure if you’re ready to commit? We offer trial adoption for certain dogs.</li>
            </ul>
          </div>
          <p className="pt-3">We’re here for the long run — because rescue doesn’t end at adoption. </p>
        </div>
      </div>
    </div>
  )
}

export default InfoGuides;