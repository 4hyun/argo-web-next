import { BASE_URL } from '@/configs/index.js';
import { getStrapiAuthToken } from './get-strapi-auth-token';

let useCMSToken = false;
let token = process.env.CMS_TOKEN
  ? (useCMSToken = true) && process.env.CMS_TOKEN
  : null;

const getCMSTokenHeader = () => ({ [process.env.CMS_TOKEN_HEADER]: token });

const fetchStrapi = async (path, fetchInit = {}) => {
  // console.log('>>DEBUG/fetchStrapi() arguments.path: ', path);
  let headersMerged = {};
  if (!token) {
    try {
      const user = {
        identifier: process.env.STRAPI_ID,
        password: process.env.STRAPI_PW,
      };
      token = await getStrapiAuthToken(
        user,
        process.env.NODE_ENV,
        process.env.DEV_STRAPI_AUTH,
      );
      // console.log(
      //   `argo/fetchStrapi() token: successfully fetched token: ${token.substring(
      //     0,
      //     8,
      //   )}...`,
      // );
    } catch (error) {
      throw new Error(
        `argo/fetchStrapi() Error: invalid token of value ${token}`,
      );
    }
  }
  const { headers, ..._fetchInit } = fetchInit;

  if (useCMSToken) {
    headersMerged = { ...getCMSTokenHeader(), ...headers };
  } else {
    headersMerged = { Authorization: `Bearer ${token}`, ...headers };
  }
  // console.log('>>DEBUG headersMerged: ', headersMerged);
  return fetch(`${BASE_URL}${path}`, {
    headers: headersMerged,
    ..._fetchInit,
  });
};

export { fetchStrapi };
