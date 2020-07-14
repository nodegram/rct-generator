const { API_URL } = process.env;

const get__Name__ = async (id) => {
  const url = `${API_URL}/__name__/${id}`;

  const response = await fetch(url, {
    method: 'GET',
  });

  return { data: response.json() };
};

export default get__Name__;
