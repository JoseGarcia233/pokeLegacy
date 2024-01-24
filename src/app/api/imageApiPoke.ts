import axios from "axios";


const ImagePoke = axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon'
})


export default ImagePoke