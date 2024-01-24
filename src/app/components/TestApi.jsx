import React from 'react'

 const TestApi = (pokeIde, pokename) => {
  return (
    <div>
    <h6>{pokeIde}</h6>
    <h6>{pokename}</h6>
    </div>
  )
}


export default dynamic(() => Promise.resolve(TestApi), { ssr: false });

