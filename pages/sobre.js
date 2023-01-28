import Image from "next/image";

import styles from "@/styles/Sobre.module.css"

export default function Sobre() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Este projeto tem como finalidade criar uma pokedex utilizando a ferramenta Next.js.</p>
            <Image
                src="/images/pikachu.png"
                width={400}
                height={400}
                alt="Pikachu de boné"
            />
        </div>
    );
}
