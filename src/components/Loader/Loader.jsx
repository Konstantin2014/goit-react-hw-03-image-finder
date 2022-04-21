import { Oval } from 'react-loader-spinner';
import { Spiner } from './Loader.styled';

export const Loader = () => {
  return (
    <Spiner>
      <Oval color="#f0d00" height={80} width={80} />
    </Spiner>
  );
};
