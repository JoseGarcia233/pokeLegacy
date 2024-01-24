'use client'
 import styles from './page.module.css'
import {useTheme} from "next-themes";
 import {Button} from "@nextui-org/react";
import dynamic from 'next/dynamic' 
import Cards from '../app/components/Cards'
import { apiPoke } from './api';
import { APIPoke } from './interfaces';
import TestApi from './components/TestApi'
import { ImageBack } from './components/ImageBack';
import { MoonIcon } from './components/MoonIcon';
import { SunIcon } from './components/SunIcon';

async function HomePage() {

   const { theme, setTheme } = useTheme()
   const {data} = await apiPoke.get<APIPoke>('/pokemon?limit=8')
   const results  = data.results
  //  console.log('results home page: ', results);
   


  return (

    <div>
      <ImageBack 
        value={false}
       />
      
    <div className={styles.MainContainer} >

      {/* <time dateTime="2023-11-27" suppressHydrationWarning /> */}
      <div >
      <span className={styles.HomeText}> Hello Welcome to <br/> Pokemon Legacy</span>
      <span className={styles.ButtonContainer}>
      <button className={styles.ButtonStarted}   >Get Stared</button>
      </span>
      </div>
        <div className={styles.darkmode}>
          <div className={styles.textdarkmode}>
           {theme} Mode

          </div>
          <div  className={styles.btndark} >
      <Button radius='lg' size='sm' color="danger" onClick={() => setTheme('light')}><SunIcon/> </Button>
      </div>
      <Button  radius='lg' size='sm'  color="default"  onClick={() => setTheme('dark')}><MoonIcon/> </Button>
    </div>  
    
    <Cards />

      
    </div>

    </div>
  )
}

export default dynamic(() => Promise.resolve(HomePage), { ssr: false });