const fetchStrapi = (path) =>
  fetch(`${BASE_URL}${path}`, {
    headers,
  });

export {fetchStrapi}