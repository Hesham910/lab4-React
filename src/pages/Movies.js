import React, { useEffect, useState } from "react";
// import MyTitle from "./MyTitle";
import axios from "axios";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MyCard from "./MyCard";
import { useSelector } from "react-redux";
function Movies() {
  const [Movies, setMovies]  = useState([]);
  useEffect(() => {
    axios
      .get("https:api.themoviedb.org/3/movie/popular?api_key=1c61f7854caf371b34a23ef611f0efed")
      .then((res) => setMovies(res.data.results))
      
      .catch((err) => console.log(err));
  }, []);

{  const myFav=useSelector((state)=>state.fav)
  console.log(myFav)
}
  return (
    <>
      {console.log(Movies.overview)}

      
      <div className="container-fluid bg-black ">
        <div className="row  ">
        {
            
          
            Movies.map((Movies,index) => {
            
            return <MyCard desc={Movies.overview} key={Movies.id} id={Movies.id} name={Movies.original_title} img={Movies.poster_path}/>
            // {console.log(Movies.name)}
            //  return <Link to={`/Movies/${Movies.id}`} key={index}><li>{Movies.original_title}</li></Link>
            // key={Movies.id} id={Movies.id} name={Movies.name} img={Movies.logo}
          })}
          </div>
        </div>
      
    </>
  );
}
export default Movies;
