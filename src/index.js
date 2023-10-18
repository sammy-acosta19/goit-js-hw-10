import SlimSelect from 'slim-select';
import * as notiflix from "notiflix";
 

import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";

const breedSelect = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");

loader.style.display = "none";
catInfo.style.display = "none";
error.style.display = "none";

fetchBreeds()
    .then(breeds => {
        
        breeds.forEach(breed => {
            const option = document.createElement("option");
            option.value = breed.id;
            option.textContent = breed.name;
            breedSelect.appendChild(option);
        });
    })
    .catch(err => {
        
        error.style.display = "block";
        console.error("Error al cargar las razas:", err);
    });


breedSelect.addEventListener("change", () => {
    const selectedBreedId = breedSelect.value;
    loader.style.display = "block"; 

    
    fetchCatByBreed(selectedBreedId)
        .then(catData => {
            
            catInfo.textContent = `Nombre de la raza: ${catData[0].breeds[0].name}
                                   Descripción: ${catData[0].breeds[0].description}
                                   Temperamento: ${catData[0].breeds[0].temperament}`;
            catInfo.style.display = "block"; 
        })
        .catch(err => {
            
            error.style.display = "block";
            console.error("Error al cargar la información del gato:", err);
        })
        .finally(() => {
            loader.style.display = "none"; 
        });
});









