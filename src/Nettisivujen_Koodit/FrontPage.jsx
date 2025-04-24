import frontpageimg from "../assets/images/about-us.jpg";
import { BlogPost } from "./Blogs";
import blogpost1 from "../assets/images/blog-post1.jpg";
import blogpost2 from "../assets/images/blog-post2.jpg";
import blogpost7 from "../assets/images/blog-post7.jpg";
import '../Nettisivujen_Tyylit/FrontPage.css';

const blogPosts = [
  {
    photo: blogpost1,
    title: "From Scared to Snuggles: Bella’s Journey ",
    text: "Bella came to us shaking, underweight, and terrified of human contact. With patience, consistent care, and a lot of love from her foster family, she bloomed into a confident cuddlebug. In this heartwarming post, we share how resilience and kindness can work wonders — and why Bella reminds us every day why we do what we do.",
    alt: "Small brown dog sitting on a beach, looking at the camera"
  },
  {
    photo: blogpost2,
    title: "5 Things You Didn’t Know About Shelter Dogs",
    text: "Think shelter dogs are all “damaged”? Think again. In this myth-busting post, we share surprising facts about rescue dogs — from their diverse personalities to how quickly they can adapt to home life. Get ready to see rescue pups in a whole new light.",
    alt: "A close-up of a small white and grey dog sleeping"
  },
  {
    photo: blogpost7,
    title: "A Day in the Life at Hope Tails Rescue",
    text: "Ever wonder what really goes on behind the scenes at a dog rescue? Take a peek into a typical day at Hope Tails — from early morning feedings and vet check-ins to playtime, snuggle breaks, and adoption meet-and-greets. It’s chaos, it’s heartwarming, it’s real — and it’s all worth it.",
    alt: "Two brown dogs sitting in front of a red building with lots of greenery in the background"
  }
]

function FrontPage() {
  return (
    <div className="container-fluid p-0">
      <div className="text-center bg-color-yellow p-5">
        <h1 className="pb-3">Hope Tails Rescue ry</h1>
        <div className="header-text">
          <p>At Hope Tails Rescue, we’re on a mission to give every animal the love, care, and second chance they deserve. We are a dedicated, volunteer-driven animal shelter focused on rescuing abandoned, neglected, and homeless dogs — and helping them find the forever families they’ve been waiting for. </p>
        </div>
      </div>
      <div className="about-container bg-color-gray row p-5 m-0 text-center">
        <h2 className="">About us</h2>
        <div className="col-xl-8 col-lg-7 col-12 text-lg-end">
          <p className="pt-3">Based on compassion and community, Hope Tails is more than just a shelter — it’s a safe haven. Every dog that comes through our doors receives medical attention, nutritious food, and most importantly, unconditional love. Whether they’ve been saved from the streets of Spain, surrendered by owners, or rescued from abusive situations, we welcome them with open arms and a promise of a better future.</p>



            <p>We believe that every tail deserves a happy ending. Through adoption, education, and advocacy, we work tirelessly to reduce the number of animals in need and to build a more compassionate world for our furry friends.</p>



            <p>Ready to be part of the change? Whether you're looking to adopt, foster, volunteer, or donate — there's a place for you in the Hope Tails family.</p>
        </div>
        <div className="col col-lg-4 flex-between-600-991">
          <img src={frontpageimg} alt="Golden retriver and a woman high-fiving" className="homepage-img pt-4" />
        </div>
      </div>
      <div className="blogs-container text-center justify-content-around bg-color-yellow p-5">
        <h2 className="pb-5">Check these blog posts out:</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              photo={post.photo}
              title={post.title}
              text={post.text}
              alt={post.alt}
              hideOnMd={index === 1}
              hideOnLg={index === 2}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FrontPage;