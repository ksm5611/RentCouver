export default function SearchBar () {

return (
  <form className="search-form" action="/" method="get">
      <label className="search-label" htmlFor="header-search">
        <p>Find your fresh start</p>
      </label>
      <div className="search-input-wrapper">
        <input
                className="search-input"
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button className="search-button" type="submit">Search</button>
      </div>
  </form>
  )
};

