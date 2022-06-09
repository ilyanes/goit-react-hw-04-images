import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images, onKeyEnter }) => {
  return (
    <>
      {images.map(image => (
        <li className="ImageGalleryItem" key={image.id}>
          <img
            src={image.webformatURL}
            data-src={image.largeImageURL}
            alt={image.id}
            tabIndex={0}
            onKeyDown={onKeyEnter}
            className="ImageGalleryItem-image"
          />
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array,
  onKeyEnter: PropTypes.func,
};
