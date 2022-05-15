import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q ='' } = queryString.parse(location.search);

  const [ formValues, handleInputChange ] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(searchText), [searchText])

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Búsquedas</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form data-testid='SearchScreenForm' onSubmit={handleSearch}>
            <input
              data-testid='SearchScreenInput'
              type='text'
              placeholder='Buscar un heroe'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={ searchText }
              onChange={ handleInputChange }
            />

            <button
              className="btn btn-outline-primary mt-1"
              type="submit"
            >
              Buscar...
            </button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Resultados</h4>
          <hr />
          {
            (heroesFiltered.length === 0)
              && <div data-testid='SearchScreenAlert' className='alert alert-danger animate__animated animate__fadeIn'>
                No hay resultados para {searchText}
              </div>
          }
          {
            heroesFiltered.map(hero => (
              <div key={hero.id} className='mb-1'>
                <HeroCard {...hero} />
              </div>
            ))
          }
        </div>

      </div>
    </>
  )
}
