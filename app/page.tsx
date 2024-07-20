import Gallery from "@/components/Gallery";
import Image from "next/image";

const images = [
    "https://images.unsplash.com/photo-1720774531704-dff00e791a55",
    "https://images.unsplash.com/photo-1721296356675-dcc2ea491a72",
    "https://images.unsplash.com/photo-1721297014354-507a1736a4ee",
    "https://images.unsplash.com/photo-1721332149346-00e39ce5c24f",
    "https://images.unsplash.com/photo-1721297013514-d6ed27f3a9d6",
    "https://images.unsplash.com/photo-1719732192518-a6b4e21b4738",
    "https://images.unsplash.com/photo-1721148774311-5634b1de8cfc",
    "https://images.unsplash.com/photo-1719937050792-a6a15d899281",
];
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="container">
                <Gallery images={images} />
            </div>
        </main>
    );
}
