import { useEffect } from "react";

export const useApiKey = () => {
  useEffect(() => {
    const localStorageApiKey = localStorage.getItem("omdbAPIKEY");

    while (!localStorage.getItem("omdbAPIKEY")) {
      //const apiKey = window.prompt("Please enter your OMDB API Key");
      const apiKey = "55bb5776";

      if (apiKey) {
        localStorage.setItem("omdbAPIKEY", apiKey);
      }
    }
  }, []);
};
