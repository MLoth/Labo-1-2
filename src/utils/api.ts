// MOET ALTIJD GENERIEK ZIJN
// MOET ALTIJD OP DEZELFDE MANIER GEBOUWD WORDEN

const BACKEND_URL = process.env.VUE_APP_BACKEND_URL;
console.log(BACKEND_URL);
// Q1: Wat zit er in een backend-connectie?
// #1 Unauthorised
// #2 Authorised

// Q2: Wat mag deze class exporten?
// (Hier) We houden de class compact en exporten enkel het nodig.

export const get = (endpoint: string) => {
  return fetch(`${BACKEND_URL}/${endpoint}`).then((r) => r.json());
};
