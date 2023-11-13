import AddMovieForm from "./AddMovieForm";
import DeleteMovie from "./DeleteMovie";
import MoviesTable from "./MoviesTable";
import SearchMovie from "./SearchMovie";
import UpdateMovie from "./UpdateMovie";

function MoviesPage(props) {
    const movies = props.movies;
    const onMovieCreated = props.onMovieCreated;

    return (
        <div className="container">
            <h1>Películas</h1>
            <AddMovieForm onMovieCreated={ onMovieCreated }/>
    
            <MoviesTable movies={ movies }/>

            <hr/>

            <DeleteMovie onMovieDeleted={ onMovieCreated }/>

            <hr/>

            <UpdateMovie onMovieUpdated={ onMovieCreated }/>

            <hr/>

            <SearchMovie/>
        </div>
    );
}

export default MoviesPage;