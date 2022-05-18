import React from 'react';
import './Form.css';

const Form = ({ fetchData, setRepoURL }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className='form-container'>
      <form className='form-container__form' onSubmit={handleSubmit}>
        <div className='row row-input'>
          <label htmlFor='input'>
            Ingrese la URL del repositorio de Github
          </label>
          <input
            type='text'
            name='input'
            id='input'
            placeholder='https://github.com/username/my-repo'
            onChange={(e) => setRepoURL(e.target.value.trim())}
          />
        </div>

        <div className='row'>
          <input type='submit' value='Analizar repositorio' />
        </div>
      </form>
    </div>
  );
};

export default Form;
