const baseURL = 'https://sampleapis.com/coffee';

export const doGet = async (path) =>
  await doRequest(`${baseURL}/${path}`, 'GET');

const doRequest = async (url, method, options) => {
  try {
    const response = await fetch(url, {
      method,
      mode: 'no-cors',
      ...options,
    });
    return {
      body: await response.json(),
    };
  } catch (e) {
    console.error('API call error');
    console.error(e);
  }
};
