 import search from "../assets/search.svg"


 function Search(props) {

 

    const {searchTerm ,setSearchTerm } = props
    


  return (
    <div className="search">
        <div>
            <img src={search} alt="" />

            <input
             type="text"
             placeholder="Search through thousands of movies"
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value) } />
            
            
            </div>
    </div>
   
  )
}

export default Search
