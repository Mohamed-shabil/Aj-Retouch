import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "@/components/TestimonialCard";
import { Testimoni } from "../types/types";

const testimonials: Testimoni[] = [
    {
        review: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
        avatar: "DL",
        designation: "Account Assistant",
        name: "Devon Lane",
    },
    {
        review: "Rareblocks makes it super easy to see which kinds of tweets perform best for whatever metric I'm optimizing for.",
        avatar: "BC",
        designation: "President of Sales",
        name: "Bessie Cooper",
    },
    {
        review: "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
        avatar: "GH",
        designation: "Marketing Coordinator",
        name: "Guy Hawkins",
    },
    {
        review: "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
        avatar: "GH",
        designation: "Marketing Coordinator",
        name: "Guy Hawkins",
    },
];
function Testimonial() {
    return (
        <section className="container flex justify-center">
            <div className="w-full max-w-2xl flex justify-center">
                <Carousel>
                    <CarouselContent>
                        {testimonials.map((testimoni, i) => (
                            <TestimonialCard testimoni={testimoni} key={i} />
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}

export default Testimonial;
