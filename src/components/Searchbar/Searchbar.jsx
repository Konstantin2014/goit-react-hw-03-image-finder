import {
  SearchbarWindow,
  SearchForm,
  SearchFormBtn,
  SearchLabel,
  SearchInput,
} from './Searchbar.styled';
import { toast } from 'react-toastify';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchQuery: '',
  };

  handleChange = event => {
    this.setState({ searchQuery: event.currentTarget.value });
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;
    const { searchQuery } = this.state;
    const { resetForm } = this;
    event.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Enter image name');
      return;
    }
    onSubmit(searchQuery);
    resetForm();
  };

  resetForm = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { searchQuery } = this.state;
    return (
      <SearchbarWindow>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormBtn type="submit">
            <SearchLabel>Search</SearchLabel>
          </SearchFormBtn>
          <SearchInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={handleChange}
          />
        </SearchForm>
      </SearchbarWindow>
    );
  }
}
