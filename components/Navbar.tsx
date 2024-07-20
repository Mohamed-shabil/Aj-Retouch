import { Codepen, Facebook, Github } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";

function Navbar() {
    return (
        <nav className="container flex items-center justify-center flex-col pt-14 mb-12">
            <header>
                <h2 className="text-3xl tracking-wide">AJ RETOUCH</h2>
            </header>
            <div className="flex items-center my-4 gap-4">
                <Link href={"#"}>
                    <Facebook size={"1em"} />
                </Link>
                <Link href={"#"}>
                    <Codepen size={"1em"} />
                </Link>
                <Link href={"#"}>
                    <Github size={"1em"} />
                </Link>
            </div>
            <div className="flex items-center justify-center flex-wrap text-sm">
                <Link href={"/"}>EDITORIAL</Link>
                <Separator orientation="vertical" className="mx-2 h-4" />
                <Link href={"/commercial"}>COMMERCIAL</Link>
                <Separator orientation="vertical" className="mx-2 h-4" />
                <Link href={"/fine-arts"}>FINE ARTS</Link>
                <Separator orientation="vertical" className="mx-2 h-4" />
                <Link href={"/before&after"}>BEFORE AND AFTER</Link>
                <Separator orientation="vertical" className="mx-2 h-4" />
                <Link href={"/testimonial"}>TESTIMONIAL</Link>
                <Separator orientation="vertical" className="mx-2 h-4" />
                <Link href={"/contact"}>CONTACT</Link>
            </div>
        </nav>
    );
}

export default Navbar;
