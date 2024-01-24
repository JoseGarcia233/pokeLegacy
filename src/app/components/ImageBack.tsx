import Image from 'next/image';
import styles from '../page.module.css'

interface Props {
  value: boolean | number
}

export const ImageBack = ({value}: Props) => {
  return (
    <div  className={ value=== false?  styles.mini : ''}>
      <Image
       width={500}
       height={100}
       src={'https://i.imgur.com/1betPWF.png'}
       alt='poke background'
       className={styles.mini}
      />
      </div>
      
  )
}
