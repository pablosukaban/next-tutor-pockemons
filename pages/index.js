import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    
    async function getPoks(){
      const resp = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json")
      setPokemons(await resp.json())
    }

    getPoks()
  }, [])

  return (
    <div>
      <h1>yo {pokemons.length}</h1>
      <div className={styles.grid}>
        {pokemons.map(pokemon => (
          <div className={styles.card} key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`} >
              <a>
                <img src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`} alt={pokemon.name}/>
                <h3>{pokemon.name}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
