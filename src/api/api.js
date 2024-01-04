import fetchMock from "fetch-mock";
import airplane from './mocks/mocks'

fetchMock.mock('http://localhost:4000/airplane ',airplane)

/**
 * Get utility function
 * @param {string} apiBaseUrl this is the base URL from the api
 * @param {string} endpoint this is the endpoint of the api
 * @returns a promise object with the response
 */
export async function get(apiBaseUrl,endpoint){
    try {
        const response= await fetch(`${apiBaseUrl}/${endpoint}`)
        return handleResponse(response)
    } catch (error) {
        throw error
    }
}

/**
 * Post utiility function
 * @param {string} apiBaseUrl this is the base URL from the api
 * @param {string} endpoint this is the endpoint of the api
 * @param {string} data this is the data that we will send to the server
 * @returns a promise object with the response
 */
export async function post(apiBaseUrl,endpoint,data){
    try {
        const response= await fetch(`${apiBaseUrl}/${endpoint}`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),

        });
        return handleResponse(response)
    } catch (error) {
        throw error
    }
}

/**
 * response handling
 * @param {object} response a promise object with the response of the server
 * @returns response from the server
 */
async function handleResponse(response){
    if(!response.ok){
        const errorMessage= await response.text();
        throw new Error(
            `API request failed with status ${response.status}: ${errorMessage}`
        );
    }
    const data = await response.json();
    return data;

}