import axios, { AxiosPromise } from 'axios';

export const getUserInfo = (): any => {
    // return axios.get('/users/me/');
    return { username: "durgesh", firstname: "Durgesh", lastname: "Tambe", picture: "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY" }
}