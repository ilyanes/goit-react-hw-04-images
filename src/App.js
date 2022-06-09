import { useState, useEffect, useRef } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchBar } from './Components/Searchbar/SearchBar.jsx';
import { ImageGallery } from './Components/ImageGallery/ImageGallery.jsx';
import { getImage } from './data/service';
import { Modal } from './Components/Modal/Modal';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { errorNotify } from './data/utils';
import PropTypes from 'prop-types';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [per_page, setPer_page] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [largeImg, setlargeImg] = useState('');
  const [totalHits, setTotalHits] = useState(0);
  const refContainer = useRef(1);

  const onSetQuery = searchQuery => {
    if (searchQuery === query) {
      return;
    }
    setQuery(searchQuery);
    setPage(1);
  };

  const toggleModal = () => {
    setModalIsOpen(prev => !prev);
  };

  const onImageClick = e => {
    if (e.target.nodeName === 'IMG') {
      setlargeImg(e.target.dataset.src);
      toggleModal();
    }
  };
  const onKeyEnter = e => {
    if (e.target.nodeName === 'IMG' && e.code === 'Enter') {
      setlargeImg(e.target.dataset.src);
      toggleModal();
    }
  };

  const loadMore = () => {
    if (query === null) {
      return;
    }
    setPage(state => state + 1);
  };

  useEffect(() => {
    if (refContainer.current === 1) {
      refContainer.current += 1;
      return;
    }
    setIsLoading(true);
    setError(false);
    getImage(query, page, per_page)
      .then(r => {
        setImages(state => {
          if (page === 1) {
            return r.hits;
          }
          return [...state, ...r.hits];
        });
        r.totalHits === 0 && errorNotify();
        setTotalHits(r.totalHits);
      })
      .catch(e => {
        setImages([]);
        setError(e);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  }, [page, per_page, query]);

  const loadMoreIsNeeded = totalHits > page * per_page ? true : false;

  return (
    <div className="section">
      <SearchBar onQuery={onSetQuery} onOption={setPer_page} />
      {images.length !== 0 && (
        <div>
          <p>{`We found ${totalHits} images`}</p>
        </div>
      )}

      <div>
        <ToastContainer />
        {error && <div>...Oops, something goes wrong!</div>}
        <ImageGallery
          click={onImageClick}
          images={images}
          onKeyEnter={onKeyEnter}
        />
        {isLoading && (
          <>
            <Loader
              type="BallTriangle"
              className="spinner"
              height="100"
              width="100"
              color="#3f51b5"
              ariaLabel="loading"
            />
            <div>...loading</div>
          </>
        )}
        {totalHits !== 0 && loadMoreIsNeeded && (
          <button className="Button" onClick={loadMore}>
            load More
          </button>
        )}
        {images.length !== 0 && !loadMoreIsNeeded && (
          <div> You have riched the end of image list </div>
        )}
        {modalIsOpen && (
          <Modal
            toggleModal={toggleModal}
            modalImage={largeImg}
            alt={query}
          ></Modal>
        )}
      </div>
    </div>
  );
};

App.propTypes = {
  query: PropTypes.string,
  images: PropTypes.array,
  page: PropTypes.number,
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  modalIsOpen: PropTypes.bool,
  largeImg: PropTypes.string,
  totalHits: PropTypes.number,
  searchQuery: PropTypes.string,
};
