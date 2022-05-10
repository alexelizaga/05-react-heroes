import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {
  const [formValues, handleInputChange, reset] = useForm({
    searchText: '',
  });

  const { searchText } = formValues;

  const heroesFiltered = getHeroesByName('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
    reset();
  }

  return (
    <>
      <h1>Búsquedas</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
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
