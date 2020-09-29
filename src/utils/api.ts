const url = process.env.VUE_APP_BACKEND_URL;

export default {
  get(endpoint: string) {
    console.log('Getting from', url, endpoint);

    // return fetch(``);
  },
};
