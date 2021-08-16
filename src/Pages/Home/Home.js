import { useEffect, useState } from 'react';
import axios from 'axios';
import Content from '../../components/Content/Content';
import './Home.css'
import CustomPagination from '../../components/Pagination/CustomPagination'

const Home = () => {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)

    const getMovies = () => axios
        .get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=star&page=${page}`)
        .then(response => {
          console.log(response.data.Search)
          setMovies(response.data.Search)
    })

    useEffect(() => {
        getMovies()
    }, [page])
    
    
    return (
        <div>
            <span className="pageTitle">Just a Bunch of Star Wars</span>
            <div className="home">
                {
                    movies && 
                    movies.map((m, i) => (
                        <Content key={i} Poster={m.Poster} Title={m.Title} Type={m.Type} Year={m.Year} />
                    ))
                }
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    )
}

export default Home
