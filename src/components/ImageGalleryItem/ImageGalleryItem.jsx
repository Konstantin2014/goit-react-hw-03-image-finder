import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ id, tags, smallImg, openLargeImage }) => {
  return (
    <GalleryItem onClick={() => openLargeImage(id)}>
      <GalleryItemImg src={smallImg} alt={tags} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
  smallImg: PropTypes.string.isRequired,
  openLargeImage: PropTypes.func.isRequired,
};
