import styles from '@/styles/Pokemon.module.css'

import Image from "next/image"
import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
    const maxPokemon = 151
    const API = "https://pokeapi.co/api/v2/pokemon/"

    const res = await fetch(`${API}?limit=${maxPokemon}`)
    const data = await res.json()

    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonId: (index + 1).toString() }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.pokemonId

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    return {
        props: { pokemon: data }
    }
}

export default function Pokemon({ pokemon }) {
    const router = useRouter()
    if (router.isFallback) {
        return (
            <div>Carregando...</div>
        )
    }

    let pokeIndex = ""

    if (pokemon.id < 10) {
        pokeIndex = `00${pokemon.id}`
    } else if (pokemon.id < 100) {
        pokeIndex = `0${pokemon.id}`
    } else {
        pokeIndex = `${pokemon.id}`
    }

    return (
        <div className={styles.pokemonContainer}>
            <h1 className={styles.title}>{pokemon.name}</h1>
            <Image
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
                width={200}
                height={200}
                alt={pokemon.name}
            />
            <div>
                <h3>Número:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <div className={styles.typeContainer}>
                    {pokemon.types.map((item, index) => (
                        <span key={index} className={`${styles.type} ${styles[item.type.name]}`}>{item.type.name}</span>
                    ))}
                </div>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.infoHeight}>
                    <h4>Altura:</h4>
                    <span>{pokemon.height * 10} cm</span>
                </div>
                <div className={styles.infoWeight}>
                    <h4>Peso:</h4>
                    <span>{pokemon.weight / 10} kg</span>
                </div>
            </div>
        </div>
    )
}