import Image from "next/image";

function ImageContainer({ image }: { image: string }) {
    return (
        <div className="mb-[2px] break-inside-avoid ">
            <Image
                alt={`Gallery image1`}
                width={500}
                height={300}
                className="w-full h-auto rounded-sm"
                src={image}
            />
        </div>
    );
}

export default ImageContainer;
