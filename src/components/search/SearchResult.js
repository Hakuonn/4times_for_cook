import { Divider } from 'antd';
import React, { useEffect, useState } from 'react'
import '../../pages/search/SearchResultPage.css'

function SearchResult({searchResults}) {
    const [data, setData] = useState();
    useEffect(()=>{
        setData(searchResults)
    },[])
    console.log(data)
  return (
    <div className="search-results-container">
    <Divider/>
    {data &&
     data.map((item, index) => (
        <div key={index} className="search-result-item">
          <div className="search-result-content">
              <a href="#">{item.title}</a>
              <Divider/>
              <p className='description'>{item.description}</p>
          </div>
        </div>
    ))}
    </div>
  )
}

export default SearchResult