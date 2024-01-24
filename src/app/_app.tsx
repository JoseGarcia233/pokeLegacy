// pages/_app.js
import {NextUIProvider} from "@nextui-org/react";


function App( Component:any , pageProps: any) {
  return (
    <NextUIProvider>
   
        <Component {...pageProps} />
    
    </NextUIProvider>
  )
}

export default App;