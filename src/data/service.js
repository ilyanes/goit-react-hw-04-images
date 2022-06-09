import axios from 'axios';
import PropTypes from 'prop-types';
const KEY = '23049135-63d939595882c9f020474dd76git';
axios.defaults.baseURL = `https://pixabay.com/api/`;

export const getImage = async (query, page, per_page) => {
  const responce = await axios.get(
    `?q=${query}&key=${KEY}&page=${page}&&per_page=${per_page}&image_type=photo&orientation=horizontal`,
  );
  return responce.data;
};

getImage.propTypes = {
  query: PropTypes.string,
  page: PropTypes.number,
  per_page: PropTypes.number,
};
