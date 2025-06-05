import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonial() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Ram Sawai",
      designation: "Product Manager at Sapthya",
      src:"/Testimonials/Testimonial2.jpg"
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Yasir Khan",
      designation: "Instagram Influencer",
      src:"/Testimonials/Testimonial5.jpg"
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Mohan Gayatre",
      designation: "Teacher at Akash Byjus",
      src:"/Testimonials/Testimonial3.jpg"
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src:"/Testimonials/Testimonial4.jpg"
    },
    // {
    //   quote:
    //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //   name: "Lisa Thompson",
    //   designation: "VP of Technology at FutureNet",
    //   src:""
    // },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
