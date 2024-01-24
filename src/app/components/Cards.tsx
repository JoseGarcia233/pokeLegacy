/* eslint-disable @next/next/no-img-element */
"use client";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import style from "../css/cards.module.css";
import Link from 'next/link'
 import { GetStaticProps, NextPage } from "next";

const Cards : NextPage = ( ) => {
  
    

  const list = [
    {
      title: "Pokemon:",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      price: "bulbasor",
    },
    {
      title: "Pokemon:",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      price: "ivysaur",
    },
    {
      title: "Pokemon:",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      price: "venusaur",
    },
    {
      title: "Pokemon:",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
      price: "charmander",
    },
    {
      title: "Pokemon:",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
      price: "charmeleon",
    },
    {
      title: "Pokemon:",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
      price: "charizard",
    },
    {
      title: "Pokemon:",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
      price: "squirtle",
    },
    {
      title: "Pokemon:",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
      price: "wartotle",
    },
  ];
  return (
    <div className={style.ContainerC}>
      <div className={style.titlepoke}>
      <Image
      src="https://i.postimg.cc/PJkjJk9Q/Pok-mon-Fan-Made-Logo.png"
      width="290px"
      alt="poke logo"
      />

      </div>
      <div className={style.MainCards}>
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item title:",item.title)}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="2010%"
                alt={item.title}
                className="w-full object-cover h-[240px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
        <Link href='/pokemon'> <button className={style.ButtonStarted}>Full List</button> </Link>
    </div>
  );
}

export default  Cards

