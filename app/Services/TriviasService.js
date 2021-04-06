import { ProxyState } from "../AppState.js";
import Trivia from "../Models/Trivia.js";
import { api } from "./AxiosServices.js";

//At this point set up AxiosService to upend URLs als need script above main.js in index.html.
//Script 
/* <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"
    integrity="sha512-bZS47S7sPOxkjU/4Bt0zrhEtWx0y0CRkhEp8IckzK+ltifIIE9EMIMTuT/mEzoIMewUINruDBIR/jJnbguonqQ=="
    crossorigin="anonymous"></script> */
//Also create 

class TriviasService {
    async getAllTrivias(url = "api.php?amount=10") {
        let response = await api.get(url)
        // AXIOS will always put the response in the data property
        console.log(response.data.results)

        // MAP itterates over the array of results and turns each one into a 'Person' object and returns a new array of Person's
        let trivias = respone.data.results.map(t => new Trivia(t))
        ProxyState.trivias = trivias
    }

}

export const triviasService = new TriviasService();


