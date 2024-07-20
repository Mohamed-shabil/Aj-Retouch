import Gallery from "@/components/Gallery";

const fineArts = [
    "https://images.unsplash.com/photo-1721296352946-9386ed562323",
    "https://images.unsplash.com/photo-1721296378610-2d107840144f",
    "https://images.unsplash.com/photo-1721148774311-5634b1de8cfc",
    "https://images.unsplash.com/photo-1719937050640-71cfd3d851be",
    "https://images.unsplash.com/photo-1719937051157-d3d81cc28e86",
    "https://images.unsplash.com/photo-1719732192518-a6b4e21b4738",
    "https://images.unsplash.com/photo-1721332149346-00e39ce5c24f",
    "https://images.unsplash.com/photo-1721297014354-507a1736a4ee",
];

function FineArts() {
    return (
        <div className="container">
            <Gallery images={fineArts} />
        </div>
    );
}

export default FineArts;
