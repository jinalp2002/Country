import axios from "axios";


//Instances(custom api(khud nu api)) create karyu, ghadi ghadi use karva mate, jyare api requesr karsu tyare baseURL add thase


// "/all" ..........[etle use thay chhe ke country na badha data use thay baseURL ma /all add thai jay chhe]
const api = axios.create({
    baseURL: "https://restcountries.com/v3.1"
})


// HTTP get method 

export const CountryData = () => {
    return api.get("/all?fields=name,population,region,capital,flags")
}

// HTTP get method for individual country
export const getCountryIndData = (name) => {
    return api.get(
        `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    );
};