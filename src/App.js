import React, {useState} from 'react';
import './App.css';
import Search from './components/Search';
import List from './components/List';

function App() {
  const [searchData, setSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noResultTxt, setNoResultTxt] = useState('');

  const getSearchedData = (data) => setSearchData(data);
  const loading = (data) => setIsLoading(data);
  const noResult = (message) => setNoResultTxt(message);

  return (
    <div className="App">
        <div className="logo-wrap">
            <img src="/img/search.png" alt=""/>
            AutoComplete
        </div>
        <Search
            getData={getSearchedData}
            isSeeking={loading}
            noResult={noResult}
        />
        {isLoading ? <img src="/img/loading.gif" alt=""/> :
            noResultTxt ? <p className='no-result'>{noResultTxt}</p> : (searchData.length ? <List data={searchData}/> : '')}
        <style jsx="true">{`
            .logo-wrap {
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: unset;
                margin: 20px;
                font-weight: 600;
            }    
            .logo-wrap img {
                margin-right: 10px;
                max-width: 50px
            }
            .no-result {
                margin-top: 15px;
                
            }
        `}</style>
    </div>
  );
}

export default App;
