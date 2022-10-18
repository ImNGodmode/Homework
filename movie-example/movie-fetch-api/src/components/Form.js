import {useState, useEffect} from 'react'

function Form(props) {
    
    const [formData, setFormData] = useState({
        searchTerm: ""
      });

     //handleChange - updates formData when we type into form
    const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to moviesearch prop, which is apps getMovie function
    props.moviesearch(formData.searchTerm);
    };

  return (
    <> 
    <form onSubmit={handleSubmit}>
        <input type='text' name='searchTerm' onChange={handleChange} value={formData.searchTerm}/>
        <input type='submit' value='submit' />

    </form>
    
    
    </>
  )
}

export default Form