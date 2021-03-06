export const fetchDb = async (url = 'https://nwp-cgn.de/apis/data/?f=imagelist') => {
  const response = await fetch(url);
  const mediaType = response.headers.get('content-type');
  let data;
  if (mediaType.includes('json')) {
    data = await response.json();
  } else {
    data = await response.text();
  }
  return data;
};

export default fetchDb;