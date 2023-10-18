import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_lGMrLV373Xy2r1vjK8bKn6nSb0ZQ05WLO0AKvxgcfDHNd4ZMN5eYXpjDUr242GV8";

export function fetchBreeds() {
    return axios.get("https://api.thecatapi.com/v1/breeds")
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }

  export function fetchCatByBreed(breedId) {
    const params = { breed_ids: breedId };
    
    return axios.get("https://api.thecatapi.com/v1/images/search", { params })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }