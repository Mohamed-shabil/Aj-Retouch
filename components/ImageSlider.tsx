"use client";
import Image from "next/image";
import { useState } from "react";

function ImageSlider({ image }: { image: { after: string; before: string } }) {
    const [sliderPosition, setSliderPosition] = useState<number>(50);
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const handleMove = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (!isDragging) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

        setSliderPosition(percent);
    };

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };
    return (
        <div
            className="w-full relative flex items-center justify-center mb-4"
            onMouseUp={handleMouseUp}
        >
            <div
                className="relative w-full max-w-4xl aspect-[70/35] overflow-hidden select-none rounded-xl"
                onMouseMove={handleMove}
                onMouseDown={handleMouseDown}
            >
                <Image
                    alt="/demo.jpg"
                    className="object-cover bg-slate-600"
                    fill
                    draggable={false}
                    priority
                    src={image.after}
                />
                <div className="absolute top-4 right-4 text-white text-sm rounded-sm py-0 px-2 font-normal bg-slate-800">Before</div>
                <div
                    className="absolute top-0 left-0 right-0 w-full max-w-4xl aspect-[70/35]  overflow-hidden select-none rounded-xl"
                    style={{
                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                    }}
                >
                    <Image
                        className="object-cover"
                        fill
                        priority
                        draggable={false}
                        alt=""
                        src={image.before}
                    />
                    <div className="absolute top-4 left-4 text-white text-sm rounded-sm py-0 px-2 font-normal bg-slate-800">After</div>
                </div>
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                    style={{
                        left: `calc(${sliderPosition}% - 1px)`,
                    }}
                >
                    <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
                </div>
            </div>
        </div>
    );
}

export default ImageSlider;
