const token = "c60f8681d29b19d68866be0791356493323a15c8d52b31d8";

export const server_calls = {
  get: async () => {
    const response = await fetch(
      `https://car-inventory-cssj.onrender.com/api/cars`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from the server");
    }

    return await response.json();
  },

  create: async (data: any = {}) => {
    const response = await fetch(
      `https://car-inventory-cssj.onrender.com/api/cars`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create new data on the server");
    }

    return await response.json();
  },

  update: async (id: string, data: any = {}) => {
    const response = await fetch(
      `https://car-inventory-cssj.onrender.com/api/cars/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update data on the server");
    }

    return await response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(
      `https://car-inventory-cssj.onrender.com/api/cars/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete data from the server");
    }

    return;
  },
};
