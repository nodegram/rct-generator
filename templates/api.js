const { API_URL } = process.env;

const get__Name__ = (id) => {
  const url = `${API_URL}/__name__/${id}`;

  return fetch(url, {
    method: 'GET',
  });
};

export default get__Name__;
