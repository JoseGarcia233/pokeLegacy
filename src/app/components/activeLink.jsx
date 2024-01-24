'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import style from '../css/navbar.module.css'

// const style ={
//   color:'#0070f3',
 
 
// }

export const ActiveLink = ({ href, Text}) => {
   const namepath = usePathname();
  //  console.log(rauter);
  return (
    <>
    <Link  className={namepath === href? style.NavL: null} href={href}> 
    <span className={namepath === href? style.NavText: null}>
    {Text}

    </span>
    
    </Link>

    
    </>
  )
}