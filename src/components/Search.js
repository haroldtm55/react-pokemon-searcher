import React from 'react'



const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={props.handleKeywordChange} value={props.keyword}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
