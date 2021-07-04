export default function SearchBar () {

return (
  <form className="search-form" action="/" method="get">
      <label className="search-label" htmlFor="header-search">
        <h3>Find your fresh start</h3>
        <p>Houses, condos, and apartments for rent</p>
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

