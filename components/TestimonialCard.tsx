import React from "react";
import { CarouselItem } from "./ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Testimoni } from "@/app/types/types";

function TestimonialCard({ testimoni }: { testimoni: Testimoni }) {
    return (
        <CarouselItem className="p-4 lg:basis-1/2">
            <div className="w-full bg-gray-50 border-1 border-gray-100 p-4 rounded-lg mb-4 font-light">
                “ {testimoni.review} ”
            </div>
            <div className="flex items-center justify-between gap-4">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>{testimoni.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <h2>{testimoni.name}</h2>
                    <p className="text-xs text-slate-500">{testimoni.designation}</p>
                </div>
            </div>
        </CarouselItem>
    );
}

export default TestimonialCard;
