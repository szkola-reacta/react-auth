const API_URL = 'http://localhost:3000/v1';

const request = (endpoint, method = 'GET', data = null) => {
  const url = `${API_URL}${endpoint}`;
  const config = {
    method,
    headers: {
      'Content-type': 'application/json',
      // 'Authorization':
      // 'X-Access-Token': 
    }
  }
  if (method === 'POST') {
    config.body = JSON.stringify(data);
  }
  return fetch(url, config)
  .then(response => response.json());
}

const get = (endpoint) => request(endpoint);
const post = (endpoint, data) => request(endpoint, 'POST', data);
const put = (endpoint, data) => request(endpoint, 'PUT', data);
const _delete = (endpoint) => request(endpoint);

export default {
  get,
  post,
  put,
  delete: _delete
};

// api.get
// api.post
// api.put