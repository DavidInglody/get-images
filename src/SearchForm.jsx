import { useGlobalContext } from "./context"

const SearchForm = () => {
  const {setSearchTerm}=useGlobalContext()

  const submitHandler= (e)=> {
    e.preventDefault()
    const searchValue= e.target.elements.search.value
    if(!searchValue) return
    setSearchTerm(searchValue)
  }
  return <section>
    <h1 className="title">unsplash images</h1>
    <form className="search-form" onSubmit={submitHandler}>
      <input type="text" name="search" placeholder="cat" className="form-input search-form" />
      <button type="submit" className="btn">search</button>
    </form>
  </section>

}
export default SearchForm