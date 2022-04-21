import { ButtonLoad } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ loadMore }) => {
  return <ButtonLoad onClick={loadMore}>Load more</ButtonLoad>;
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
