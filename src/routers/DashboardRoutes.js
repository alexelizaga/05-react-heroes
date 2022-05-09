import { Routes, Route } from 'react-router-dom';

import { MyNavbar } from '../components/ui/MyNavbar'
import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from '../components/hero/HeroScreen';

export const DashboardRoutes = () => {
  return (
    <>
      <MyNavbar />

      <div className='container'>
        <Routes>
          <Route path='marvel' element={<MarvelScreen />} />
          <Route path='dc' element={<DcScreen />} />
          <Route path='search' element={<SearchScreen />} />
          <Route path='hero' element={<HeroScreen />} />
          <Route path='/' element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  )
}
