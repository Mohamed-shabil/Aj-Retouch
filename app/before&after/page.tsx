import { after, before } from "node:test";
import React from "react";
import ImageSlider from "@/components/ImageSlider";

const images = [
    {
        after: "https://images.unsplash.com/photo-1719937051157-d3d81cc28e86",
        before: "https://images.unsplash.com/photo-1719937051157-d3d81cc28e86",
    },
    {
        after: "https://images.unsplash.com/photo-1721201342450-f84239e23531",
        before: "https://images.unsplash.com/photo-1721201342450-f84239e23531",
    },
    {
        after: "https://images.unsplash.com/photo-1718948894407-3064114d25d7",
        before: "https://images.unsplash.com/photo-1718948894407-3064114d25d7",
    },
];

function BeforeAndAfter() {
    return (
        <div className="container">
            {images.map((image) => (
                <ImageSlider image={image} />
            ))}
        </div>
    );
}

export default BeforeAndAfter;
