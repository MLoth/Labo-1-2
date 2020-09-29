const url = process.env.VUE_APP_BACKEND_URL;

export default {
  get(endpoint: string) {
    try {
      return fetch(`${url}${endpoint}`).then((r) => r.json());
    } catch (error) {
      return new Error(error);
    }
  },

  post(endpoint: string, object: any) {
    try {
      return fetch(`${url}${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(object),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((r) => r.json());
    } catch (error) {
      return new Error('An error occured.');
    }
  },
};
