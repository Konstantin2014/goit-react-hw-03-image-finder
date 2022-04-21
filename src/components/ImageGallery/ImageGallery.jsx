import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ gallery, openLargeImage }) => {
  return (
    <Gallery>
      {gallery.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            tags={tags}
            smallImg={webformatURL}
            largeImg={largeImageURL}
            openLargeImage={openLargeImage}
          />
        );
      })}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  openLargeImage: PropTypes.func.isRequired,
};
