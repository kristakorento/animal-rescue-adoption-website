import "../Nettisivujen_Tyylit/Adoption.css";

function Adoption() {
  return (
    <div className="container-fluid p-0 text-center">
      <div className="bg-color-yellow p-5">
        <h1 className="pb-3">Adoption</h1>
        <div className="paragraph-text">
          <p>This page provides quick links to essential information, including our adoption process, policies, fees, trial adoption option, and frequently asked questions. It guides you through how we rescue dogs, the steps to adopt, and the support we offer before, during, and after adoption. </p>
        </div>
      </div>
      <div className="bg-color-gray p-5">
        <h2 className="pb-2">Info & Guides</h2>
        <div className="paragraph-text">
          <p>Discover how we at Hope Tails Rescue save dogs from Spain, welcome them to our shelter in Finland, and help them find loving homes. Learn about the adoption journey, what to expect when bringing your dog home, vet care, and our ongoing post-adoption support.</p>
        </div>
        <h2 className="pt-5 pb-2">Policies & Fees</h2>
        <div className="paragraph-text">
          <p>Learn about our adoption fees, reservation and cancellation policies, and the criteria we use to ensure safe, responsible, and lifelong matches for every dog.</p>
        </div>
        <h2 className="pt-5 pb-2">Adoption Process</h2>
        <div className="paragraph-text">
          <p>Learn how to adopt a rescue dog from Hope Tails Rescue — from visiting our shelter and applying, to meeting your match and bringing them home. We guide you every step of the way. </p>
        </div>
      </div>
      <div className="bg-color-yellow p-5">
        <h2 className="pb-2">FAQ</h2>
        <div className="paragraph-text">
          <p>Find answers to common questions about our adoption process, fees, and what to expect when adopting from Hope Tails Rescue.</p>
        </div>
        <h2 className="pt-5 pb-2">Trial Adoption</h2>
        <div className="paragraph-text">
          <p>Learn about our trial adoption process, where you can welcome a dog into your home for up to 14 days to see if it's the right match before finalizing the adoption. We support you throughout the trial period.</p>
        </div>
      </div>
    </div>
  )
}

export default Adoption;