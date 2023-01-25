import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav>
            <div>
                <Image
                    src="/images/pokeball.png"
                    width={30}
                    height={30}
                    alt="pokebola"
                />
                <h1>PokeNext</h1>
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/sobre">Sobre</Link>
                </li>
            </ul>
        </nav>
    );
}
