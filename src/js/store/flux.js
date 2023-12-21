const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "https://fakestoreapi.com/products",
      products: [],
    },
    actions: {
      getProducts: async () => {
        const store = getStore();
        const response = await fetch(store.apiUrl);
        const data = await response.json();
        setStore({ products: data });
        console.log(data);
      },

      deleteProduct: async (id) => {
        const store = getStore();
        const response = await fetch(`${store.apiUrl}/${id}`, {
          method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          alert("your product has been deleted");
        }
      },

	  
    },
  };
};

export default getState;
