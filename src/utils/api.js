const BASE_URL = "http://localhost:3001";

const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const api = {
  getItemList: () => {
    return fetch(`${BASE_URL}/items`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(handleServerResponse);
  },

  addItem: ({ name, weather, imageUrl }) => {
    return fetch(`${BASE_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        weather,
        imageUrl,
      }),
    }).then(handleServerResponse);
  },

  deleteItem: (id) => {
    return fetch(`${BASE_URL}/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(handleServerResponse);
  },
};

export default api;
