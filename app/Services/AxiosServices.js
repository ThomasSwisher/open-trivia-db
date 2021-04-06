
// Exports the "helper" axios who fires all the requests to the provided API
//timeout is just how long the request will last before stopping
// @ts-ignore

//This instance doesn't have subcategories so we don't need an append.

export const api = axios.create({
    baseURL: 'https://opentdb.com/',
    timeout: 1000
})