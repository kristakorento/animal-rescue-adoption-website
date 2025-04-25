import '../Nettisivujen_Tyylit/FAQ.css';

function FAQ() {
  return (
    <div className="container-fluid p-0 text-center">
      <div className="bg-color-yellow p-5">
        <h1 className="pb-3">FAQ</h1>
        <div className="paragraph-text">
          <p>Have questions about adopting a rescue dog through Hope Tails Rescue? You're in the right place!
            Below you’ll find answers to the most common questions we receive about the adoption process, fees, timelines, and more.</p>

            <p>If you don’t see what you’re looking for, feel free to reach out — we’re always happy to help. </p>
        </div>
      </div>
      <div className="bg-color-gray p-5 mr-0">
        <h2 className="pb-2">Frequently Asked Questions</h2>
        <div className="paragraph-text">
          <h3 className="p-3 pt-5">Can I adopt a dog without visiting the shelter in person?</h3>
          <p>No — all adoptions must take place in person at our shelter in Finland. Meeting the dog face-to-face is an important part of making sure it’s the right match for both you and the dog.</p>
        </div>
        <h3 className="p-3 pt-5">What is included in the adoption fee?</h3>
        <div className="paragraph-text">
          <p>Our adoption fee covers the dog’s travel from Spain to Finland, vaccinations, microchipping, EU pet passport, parasite treatments, sterilization (if age/health allows), and general veterinary care. You'll also receive a full medical history and post-adoption support.</p>
        </div>
        <h3 className="p-3 pt-5">How long does the adoption process take?</h3>
        <div className="paragraph-text">
          <p>The adoption process typically takes 1–2 weeks. This depends on how quickly we can complete the application review, interview, meet & greet, and home check. We aim for thoughtful matches — not rushed adoptions.</p>
        </div>
        <h3 className="p-3 pt-5">Can I return the dog if it doesn’t work out?</h3>
        <div className="paragraph-text">
          <p>Yes. While we hope every adoption is a forever match, we understand that sometimes things don’t go as planned. If needed, the dog can always be returned to our care. We’re here to support you and the dog, and we will never judge your decision.</p>
        </div>
      </div>
      <div className="bg-color-yellow p-5">
        <h2 className="pb-2">Did not find the answer to your question?</h2>
        <div className="paragraph-text">
          <p className="pt-2">You can contact us via the <a href='/contact-details'><strong>contact form</strong></a> or through our social media channels.</p>
        </div>
      </div>
    </div>
  )
}
export default FAQ;