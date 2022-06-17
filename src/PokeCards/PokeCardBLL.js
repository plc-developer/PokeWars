import Axios from "axios";

const getPokemon = (url) => {
        Axios.get(url)
        .then((res)=>{
            let response = res.data;
            return response;
        })
        .catch((err)=>{
            return err
        });
}
export {getPokemon};