import { HeroList } from '../hero/HeroList';

export const MarvelScreen = () => {
  return (
    <div>
      <h1 data-testid='MarvelScreenTitle'>Marvel</h1>
      <hr />
      <HeroList publisher='Marvel Comics' />
    </div>
  )
}
