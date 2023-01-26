import styles from '@/styles/Home.module.css'

import Card from '@/src/components/Card'

export async function getStaticProps() {
  const maxPokemon = 151
  const API = "https://pokeapi.co/api/v2/pokemon/"

  const res = await fetch(`${API}?limit=${maxPokemon}`)
  const data = await res.json()

  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default function Home({ pokemons }) {
  return (
    <div className={styles.pokeContainer}>
      {pokemons.map(pokemon => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}
