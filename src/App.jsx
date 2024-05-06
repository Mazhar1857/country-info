import './App.css'
import ThemeBar from './component/ThemeBar'
import SearchBar from './component/SearchBar'
import { useSelector } from 'react-redux'
import Filter from './component/Filter'
import CountryItem from './component/CountryItem'
import CountryDetail from './component/CountryDetail'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


function App() {
  const theme = useSelector(store => store.theme);
  const filter = useSelector(store => store.filter);

  return (
    <>
      <div className={`container ${theme}`}>
        <header className='theme-header'>
          <ThemeBar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={(
              <>
                <section className='search-section'>
                  <SearchBar />
                  <div>
                    <Filter />
                  </div>
                </section>
                <section className='countries'>
                  {filter && filter.map((item, index) => {
                    return <Link className='link' to={`/country/${item["name"].replace(' ', '-')}`} key={item["name"] + '_' + index}> <CountryItem
                      flag={item["flags"]["png"]}
                      name={item["name"]}
                      population={item["population"]}
                      region={item["region"]}
                      capital={item["capital"]}
                    />
                    </Link>
                  })}
                </section>
              </>
            )} />
            <Route path='/country/:ProductName' element={(
              <>
                <section>
                  {filter && filter.map((item, index) => {

                    return <CountryDetail key={item["name"] + '_' + index}
                      flag={item["flags"]["png"]}
                      name={item["name"]}
                      nativeName={item["nativeName"]}
                      population={item["population"]}
                      region={item["region"]}
                      subRegion={item["subregion"]}
                      capital={item["capital"]}
                      topLevelDomain={item["topLevelDomain"]}
                      currencies={item["currencies"]}
                      languages={item["languages"]}
                      borderCountries={item["borders"]}
                    />
                  }
                  )}
                </section>
              </>
            )} />
          </Routes>
        </main>
      </div>

    </>
  )
}

export default App
