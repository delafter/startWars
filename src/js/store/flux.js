const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      //las variables van en store
      personaje: {},
      personajes: [],
      planetas: [],
      planetasId: {},
      favorites: [],
    },
    actions: {
      //las funciones van en actions
      getPersonajes: () => {
        const requestCharacters = {
          //que nombre deberia tener esta variable?
          method: "GET",
          redirect: "follow",
        };

        fetch("https://www.swapi.tech/api/people/", requestCharacters)
          .then((response) => response.json())
          .then((data) => setStore({ personajes: data.results }))
          .catch((error) => console.log("error", error));
      },

      getPlanetas: () => {
        const requestPlanetas = {
          method: "GET",
          redirect: "follow",
        };

        fetch("https://www.swapi.tech/api/planets/", requestPlanetas)
          .then((response) => response.json())
          .then((data) => setStore({ planetas: data.results }))
          .catch((error) => console.log("error", error));
      },

      getCaracteristicas: (uid) => {
        const requestCaracteristicas = {
          method: "GET",
          redirect: "follow",
        };

        fetch(
          `https://www.swapi.tech/api/people/${uid}`,
          requestCaracteristicas
        )
          .then((response) => response.json())
          .then((data) => setStore({ personaje: data.result.properties }))
          .catch((error) => console.log("error", error));


      },

      getCaracteristicasPlanetas: (uid) => {
        const requestCaracteristicas = {
          method: "GET",
          redirect: "follow",
        };

        fetch(
          `https://www.swapi.tech/api/planets/${uid}`,
          requestCaracteristicas
        )
          .then((response) => response.json())
          .then((data) => setStore({ planetasId: data.result.properties }))
          .catch((error) => console.log("error", error));
      },
     
      createFavorite: (name) => {
        console.log(name);
        /* const store = getStore();
        const newFavorite = {
          name: name,
           
        };
        setStore({ favorites: [...store.favorites, newFavorite] }); */
      },
    
    } 
  };
};

export default getState;
