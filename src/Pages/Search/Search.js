import { Button, createMuiTheme, TextField, ThemeProvider } from "@material-ui/core";
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import './Search.css';
import axios from "axios";
import { useEffect } from "react";
import Content from "../../components/Content/Content";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState();
    const [page, setPage] = useState(1);
    
    const darkTheme = createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: "#fff"
            }
        }
    });

    const getMovies = async () => {
        await axios
        .get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=${searchText}&page=${page}`)
        .then(response => {
          console.log(response.data.Search)
          setContent(response.data.Search)
    })}

    useEffect((event) => {
        getMovies(event)
    }, [page])

    return (
        <div>
            <h2>Click the <SearchIcon/> after typing movie title you want to search </h2>
            <ThemeProvider theme={darkTheme}>
                <div className="search">
                    <TextField
                        style={{ flex: 1 }}
                        className="searchBox"
                        variant="filled"
                        label="Search"
                        /* onChange={getMovies} */
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Button variant='contained' style={{marginLeft: 10}} onClick={getMovies}> <SearchIcon/> </Button>
                </div>
            </ThemeProvider>
            
            <div className="searchContent">
                {content && content.map((m, i) => (
                    <Content key={i} Poster={m.Poster} Title={m.Title} Type={m.Type} Year={m.Year} />
                ))}
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    )
}

export default Search
