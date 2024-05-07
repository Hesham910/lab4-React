import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import MyCard from "./MyCard";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { removeFromFavorites } from "../Redux/Action";
import MyTitle from "./MyTitle";

function WishList(props) {
    const dispatch=useDispatch();
    const movieIds = useSelector((state) => state.fav);
    const [moviesInFavorites, setMoviesInFavorites] = useState([]);
    
    useEffect(() => {
        const fetchMovies = async () => {
            const movies = [];
            for (const id of movieIds) {
                try {
                    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1c61f7854caf371b34a23ef611f0efed`);
                    movies.push(response.data);
                } catch (error) {
                    console.error(`Error fetching movie with ID ${id}:`, error);
                }
            }
            setMoviesInFavorites(movies);
        };
    
        fetchMovies();
    
    }, [movieIds]); 
    const onClickToRemove=(id)=>{
        dispatch(removeFromFavorites(id))

    }
    return (
        <>
                                {movieIds.length==0 && <MyTitle textColor="danger" test="There are no Movies in Wishlist"/>}

        <div className="container-fluid bg-black ">
        <div className="row  ">
        {moviesInFavorites.map((movie, index) => (
                // <MyCard key={movie.id}id={movie.id} name={movie.original_title} desc={movie.overview} img={movie.poster_path}/>
                <div id="card-area">
            <div className="wrapper">
                <div className="box">
                    <img src={ `https://image.tmdb.org/t/p/w500/${movie.poster_path}} `} alt=""/>
                    <div className="overlay">

                        <h3>{movie.original_title}</h3>
                        <div className="">
                        {/* <Link className="btn btn-dark" to={`/Movies/${movie.id}`}>more</Link> */}
   
                    <button className="btn btn-dark" onClick={() => onClickToRemove(movie.id)}>Remove from Favorites<span style={{fontSize:'1.3rem',color:'red'}}>&hearts;</span></button>

                        </div>
                        {/* <p>{props.desc}/</p> */}

                    </div>
                </div>
            </div>
        </div>

            ))}
            
        </div>
        </div>

        </>
    );
}

export default WishList;
