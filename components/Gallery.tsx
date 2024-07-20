import Image from "next/image";
import ImageContainer from "./ImageContainer";

function Gallery({images}:{images:string[]}) {
    return (
        <section className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-[2px]">
            {images.map((image, i) => (
                <ImageContainer image={image} key={i}/>
            ))}
        </section>
    );
}

export default Gallery;
