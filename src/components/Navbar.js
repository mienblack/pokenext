import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div>
                <Image
                    src="/images/pokeball.png"
                    width={30}
                    height={30}
                    alt="pokebola"
                />
                <h1>Poke<span>Next</span></h1>
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
