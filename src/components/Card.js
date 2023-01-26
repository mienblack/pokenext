import Image from "next/image";

export default function Card({ pokemon }) {
    let pokeIndex = ""

    if (pokemon.id < 10) {
        pokeIndex = `00${pokemon.id}`
    } else if (pokemon.id < 100) {
        pokeIndex = `0${pokemon.id}`
    } else {
        pokeIndex = `${pokemon.id}`
    }

    return (
        <div>
            <Image
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
                width={120}
                height={120}
                alt={pokemon.name}
            />
            <h3>{pokemon.name}</h3>
        </div>
    );
}
