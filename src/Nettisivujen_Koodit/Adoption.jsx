import "../Nettisivujen_Tyylit/Adoption.css";

function Adoption() {
  return (
    <div className="container-fluid p-0">
      <div className="bg-color-yellow p-5 text-center">
        <h1 className="pb-3">Adoption</h1>
        <div className="paragraph-text">
          <p>This page provides quick links to essential information, including our adoption process, policies, fees, trial adoption option, and frequently asked questions. It guides you through how we rescue dogs, the steps to adopt, and the support we offer before, during, and after adoption. </p>
        </div>
      </div>
      <div className="bg-color-gray p-5 text-center">
        <h2 className="pb-2">Info & Guides</h2>
        <div className="paragraph-text">
          <p>Discover how we at Hope Tails Rescue save dogs from Spain, welcome them to our shelter in Finland, and help them find loving homes. Learn about the adoption journey, what to expect when bringing your dog home, vet care, and our ongoing post-adoption support.</p>
          <a href="/adoption/info-guides" className="btn btn-primary mt-3">Visit Info & Guides page</a>
        </div>
        <h2 className="pt-5 pb-2">Adoption Policies</h2>
        <div className="paragraph-text">
          <p>Learn about our reservation and cancellation rules, who is eligible to adopt, and why we sometimes have to say no. These policies help us make thoughtful, lasting matches and ensure each rescue dog gets the best chance at a happy life.</p>
          <a href="/adoption/policies" className="btn btn-primary mt-3">Visit Adoption Policies page</a>
        </div>
        <h2 className="pt-5 pb-2">Adoption Process & Fees</h2>
        <div className="paragraph-text">
          <p>Get a clear overview of how to adopt a dog from our shelter — from your first visit to bringing your new companion home. Learn about our adoption steps, timeline, and what the adoption fee includes.</p>
          <a href="/adoption/fees-and-process" className="btn btn-primary mt-3">Visit Adoption Process & Fees page</a>
        </div>
      </div>
      <div className="bg-color-yellow p-5 text-center">
        <h2 className="pb-2">FAQ</h2>
        <div className="paragraph-text">
          <p>Find answers to common questions about our adoption process, fees, and what to expect when adopting from Hope Tails Rescue.</p>
          <a href="/adoption/faq" className="btn btn-primary mt-3">Visit FAQ page</a>
        </div>
        <h2 className="pt-5 pb-2">Trial Adoption</h2>
        <div className="paragraph-text">
          <p>Learn about our trial adoption process, where you can welcome a dog into your home for up to 14 days to see if it's the right match before finalizing the adoption. We support you throughout the trial period.</p>
          <a href="/adoption/trial-adoption" className="btn btn-primary mt-3">Visit Trial Adoption page</a>
        </div>
      </div>
    </div>
  )
}

export default Adoption;