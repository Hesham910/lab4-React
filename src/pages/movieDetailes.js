import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Details() {
    const param = useParams();
    const id = param.id;

    const [details, setDetails] = useState({});

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1c61f7854caf371b34a23ef611f0efed`)
            .then((res) => setDetails(res.data))
            .catch((err) => console.log(err));
    }, [id]);
    
    return (
        <>
            <div className="row bg-black col-12 p-0 m-0">
                <div className="d-flex min-vh-100">
                    <p className="my-auto col-lg-4">{details.overview}</p>
                    <img className="col-6 h-sm-80" src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt="Movie Poster" />
                </div>
            </div>
        </>
    );
}

export default Details;
