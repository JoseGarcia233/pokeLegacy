
/* eslint-disable react/jsx-key */
// import dynamic from 'next/dynamic' 
import type { Metadata, NextPageContext } from 'next'
// import { GetStaticProps,  NextPage } from "next";
import { APIPoke } from '../interfaces';
import { apiPoke } from '../api';
import { imagePoke } from '../api'
// import Image from 'next/image';
import Cards from '../components/Cards';
import { Card, CardBody, CardFooter, Image, Tooltip } from "@nextui-org/react";
import style from '../css/cards.module.css'
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'List of Pokemon',
  description: 'Search Pokemon',
}

const colors = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "foreground",
];

// const pageDitail = (Idpoke: any) => {
//   const rute = <Link href={`/pokemon/pokemonsd/${Idpoke}`}  ></Link>

//   return rute
// }


export default async function PokemonPage() {

  // const rest = await imagePoke.get(`/pokemon/${}`)
  const { data } = await apiPoke.get<APIPoke>('/pokemon?limit=200')
  const results = data.results
  // console.log('klk result',results);


  return (
    <> 
    <div className={style.containermain} >
     <div className={style.pokefullcard}>
      
      {
        results.map((pokemon, index) => {

          const pokeId = pokemon.url.split('/').at(-2)
          // console.log('klk data map', pokeId);
          // const rest = imagePoke.get(`/1`)

          //  console.log('name',pokemon.name);





          return (
           
           <div key={index} >
            <Link href={`/pokemon/pokemons/${pokemon.name}`} >
               <Tooltip showArrow={true} color='danger' content="Click for more detail"> 
            <Card
              shadow="sm"
              key={index}
              isPressable
          
            >
              {

              }
             
              <CardBody className="overflow-visible p-0 ">
             
                <Image
                  shadow="sm"
                  radius="lg"
                  width="90%"
                  alt={pokemon.name}
                  className="w-full object-cover h-[210px]"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`}
                />
              </CardBody>
             
              <CardFooter className="text-small justify-between capitalize">
                <b>Name</b>
                <p className="text-default-500 capitalize">{ pokemon.name }</p>
              </CardFooter>
            </Card>
            </Tooltip>
            </Link>
            </div>
              
            //  </div> <>

             
              
          )
        })
      }
    </div>
    </div>
    </>
  )
}




