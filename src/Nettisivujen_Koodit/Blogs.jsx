import img2 from "../assets/images/dog-4988986_1280.jpg";
import blogpost1 from "../assets/images/blog-post1.jpg";
import blogpost2 from "../assets/images/blog-post2.jpg";
import blogpost3 from "../assets/images/blog-post3.jpg";
import blogpost4 from "../assets/images/blog-post4.jpg";
import blogpost5 from "../assets/images/blog-post5.jpg";
import blogpost6 from "../assets/images/blog-post6.jpg";
import "../Nettisivujen_Tyylit/Blogs.css";

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
    photo: blogpost3,
    title: "Saying Goodbye to Sisu",
    text: "Not every rescue story ends the way we hope. In this heartfelt post, we share the story of Sisu — a gentle soul who touched many lives during his short time with us. A tribute to the dogs who teach us love, even in loss.",
    alt: "A close-up of a dog nose"
  },
  {
    photo: blogpost4,
    title: "The Journey of Healing: How Rescue Dogs Learn to Trust Again",
    text: "Rescue dogs often carry invisible wounds. In this touching post, we explore the emotional recovery process, share real stories, and offer advice for building trust at your dog’s own pace.",
    alt: "A wide-shot of a corgi dog sitting on grass, looking at the camera"
  },
  {
    photo: blogpost5,
    title: "The Puppy Chronicles: Raising Rescue Pups Right",
    text: "From wobbly first steps to playful zoomies — this post follows a recent litter of rescue puppies as they grow, learn, and steal hearts. Plus, tips for adopting and raising a young rescue dog.",
    alt: "A happy looking brown puppy with a smile and closed eyes"
  },
  {
    photo: blogpost6,
    title: "Travel Day: How Our Dogs Journey from Spain to Finland",
    text: "Ever wondered what happens between rescue and arrival? This post follows our dogs’ travel day — from pre-departure vet checks in Spain to safe transport and the welcome they receive at our Finnish shelter.",
    alt: "A black and white dog hanging its head out of a car window, looking at the camera"
  }
]

function Blogs() {
  return (
    <div className="container-fluid p-0">
      <div className="text-center bg-color-yellow p-5">
        <h1 className="pb-3">Blog</h1>
        <div className="paragraph-text">
          <p>Welcome to our blog — a place where we share the heart behind the rescue. From happy adoption stories and behind-the-scenes moments to advice for adopters and the occasional bittersweet tale, this is where you can follow the journey of our dogs — and the people who love them. </p>
        </div>
      </div>
      <div className="bg-color-gray row mx-0">
      <div className="col-lg-3 col-md-4 bg-color-yellow sticky-categories d-flex flex-column align-items-center p-1 order-1 order-md-2 h-100">
          <h2 className="pb-2">Categories</h2>
          <form className="text-start">
            <div className="form-check pb-1">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="successStories"
              />
              <label className="form-check-label" htmlFor="successStories">
                Success Stories
              </label>
            </div>
            <div className="form-check pb-1">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="testimonials"
              />
              <label className="form-check-label" htmlFor="testimonials">
                Testimonials
              </label>
            </div>
            <div className="form-check pb-2">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="communityEvents"
              />
              <label className="form-check-label" htmlFor="communityEvents">
                Community Events
              </label>
            </div>
          </form>
        </div>
        <div className="col-lg-9 col-md-8 pt-lg-3 pt-md-3 pt-5 order-2 order-md-1">
          <div className="row">
          {blogPosts.map((post, index) => (
              <div className="col-xl-4 col-md-6 mb-4 d-flex" key={index}>
                <BlogPost
                  photo={post.photo}
                  title={post.title}
                  text={post.text}
                  alt={post.alt}
                  disableResponsiveHiding
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function BlogPost({ photo, title, text, alt, hideOnLg = false, hideOnMd = false, disableResponsiveHiding = false }) {
  return (
    <div className={`w-100 d-flex justify-content-center ${!disableResponsiveHiding && hideOnLg ? "d-none d-xl-flex" : ""
      } ${!disableResponsiveHiding && hideOnMd ? "d-none d-md-flex" : ""}`}
    >
      <div className="card h-100 d-flex flex-column" style={{ width: '100%', maxWidth: '20rem'}}>
        <img className="card-img-top" src={photo} alt={alt} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary mt-auto">Read more ➜ </a>
        </div>
      </div>
    </div>
  )
}

export default Blogs;