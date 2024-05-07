import React, { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import "./MyCard.css"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites,removeFromFavorites  } from "../Redux/Action";
function MyCard(props){
    const dispatch=useDispatch();

const myFav=useSelector((state)=>state.fav);

const [MovieInFavorites, setMovieInFavorites] = useState(myFav.includes(props.id));
// const [buttonText, setButtonText] = useState(MovieInFavorites ? "Remove" : "Add");


const onClick=(id)=>{
    if (!MovieInFavorites) {
        
    dispatch(addToFavorites(id))
    }
    else {
        
        dispatch(removeFromFavorites(id));

    }
    setMovieInFavorites(!MovieInFavorites);
    // setButtonText(MovieInFavorites ? "Add" : "Remove"); // Update button text

    
}
    return(<>
    

    <div id="card-area">
            <div className="wrapper">
                <div className="box">
                    <img src={ `https://image.tmdb.org/t/p/w500/${props.img} `} alt=""/>
                    <div className="overlay">

                        <h3>{props.name}</h3>
                        <div className="">
                        <button style={{fontSize:'1.3rem'}} className="btn btn-dark text-light p-1" to={`/Movies/${props.id}`}>More details</button>

                        {MovieInFavorites ? (
  <span className="text-center" style={{fontSize:'3rem',color:'red'}}>&hearts;</span>
) : (
  <button className="btn btn-danger mt-2" onClick={() => onClick(props.id)}>Add to Favorites<span style={{fontSize:'1.3rem',color:'red'}}>&hearts;</span></button>
)}

                        </div>
                        {/* <p>{props.desc}/</p> */}

                    </div>
                </div>
            </div>
        </div>
       

  
 
  
    

   

    </>)
}
export default MyCard;
