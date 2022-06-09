import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, click, onKeyEnter }) => {
  return (
    <ul className="ImageGallery" onClick={click}>
      <ImageGalleryItem images={images} onKeyEnter={onKeyEnter} />
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  click: PropTypes.func,
  onKeyEnter: PropTypes.func,
};
