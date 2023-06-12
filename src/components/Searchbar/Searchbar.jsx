import  { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.scss';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      Notify.failure('Sorry, enter something in search line.');
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={styles['Header']}>
        <form className={styles['Form']} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles['Button']} aria-label="Search">
            <span className={styles['ButtonLabel']}>Search</span>
          </button>
          <input
            className={styles['Input']}
            autoComplete="off"
            type="text"
            value={this.state.query}
            onChange={this.handleInputChange}
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
