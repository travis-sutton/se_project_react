const BASE_URL = "http://localhost:3001";

export const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

function request(url, options) {
  return fetch(url, options).then(handleServerResponse);
}

export const api = {
  getItemList: () => {
    return request(`${BASE_URL}/items`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  addItem: ({ name, weather, imageUrl }) => {
    return request(`${BASE_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        weather,
        imageUrl,
      }),
    });
  },

  deleteItem: (id) => {
    return request(`${BASE_URL}/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
