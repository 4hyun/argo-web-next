import { BASE_URL } from '@/configs/index.js';
import { listenPaths as paths } from '../resources';

const PROD_STRAPI_AUTH = 'PROD_STRAPI_AUTH';

const getStrapiAuthToken = async (user, NODE_ENV, DEV_STRAPI_AUTH) => {
  const TAG = '[ARGO-WEB-NEXT]  getStrapiAuthToken()';
  const isProduction = NODE_ENV === 'production';
  if (isProduction) {
    // netlify build config
    if (process.env.PROD_STRAPI_AUTH) {
      console.log(
        `${TAG} / process.env.PROD_STRAPI_AUTH is already set [2]: ${process.env.PROD_STRAPI_AUTH}`,
      );
      return process.env.PROD_STRAPI_AUTH;
    }
  }

  if (!isProduction && DEV_STRAPI_AUTH) {
    console.log(
      `${TAG} this is not PRODUCTION environment, using DEV_STRAPI_AUTH.`,
    );
    return DEV_STRAPI_AUTH;
  }
  if (!isProduction && !DEV_STRAPI_AUTH)
    throw new Error(
      `NODE_ENV is "${NODE_ENV}", but DEV_STRAPI_AUTH is invalid: ${DEV_STRAPI_AUTH}`,
    );

  let res, data;
  const url = `${BASE_URL}${paths.Auth}${paths.Auth.methods.Authenticate.path}`;
  try {
    console.log(`${TAG} fetching credentials.`);
    res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    data = await res.json();
    // set global[PROD_STRAPI_AUTH]
    try {
      console.log(
        `${TAG}/msg: BEFORE setting global[PROD_STRAPI_AUTH]: ${data.jwt}`,
      );
      global[PROD_STRAPI_AUTH] = data.jwt;
      return global[PROD_STRAPI_AUTH];
    } catch (error) {
      console.log(`${TAG}/error setting global[PROD_STRAPI_AUTH]`);
    }
    try {
      if (process.env.PROD_STRAPI_AUTH) {
        console.log(
          `${TAG} / process.env.PROD_STRAPI_AUTH is already set [2]: ${process.env.PROD_STRAPI_AUTH}`,
        );
        return;
      }
      console.log(
        `${TAG}/msg: BEFORE setting process.env.PROD_STRAPI_AUTH: ${data.jwt}`,
      );
      process.env.PROD_STRAPI_AUTH = data.jwt;
      process.env.PROD_STRAPI_AUTH;
      return;
    } catch (error) {
      console.log(`${TAG}/error setting process.env.PROD_STRAPI_AUTH`);
      throw error;
    }
  } catch (error) {
    console.log(`${TAG}/error authenticating user:${user.identifier}`);
  }

  return data.jwt;
};

export { getStrapiAuthToken };
