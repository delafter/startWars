const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {},
    actions: {
      getPersonajes: () => {
        method: "GET",
          /* redirect: "follow" *///======>???

          fetch("https://www.swapi.tech/api/", getPersonajes)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
      },
    },
  };
};

export default getState;
