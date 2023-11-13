import "../styles/MoviesTable.css";

function MoviesTable(props) {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);

        return date.toLocaleDateString();
    };

    return (
        <div className="movies-table">
            <h2>Películas</h2>

            <table className="movies-tbl" border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Género</th>
                        <th>ID del director</th>
                        <th>Fecha de lanzamiento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.movies.map((movie) => {
                            return (
                                <tr key={ movie.id }>
                                    <td>{ movie.id }</td>
                                    <td>{ movie.name }</td>
                                    <td>{ movie.genre }</td>
                                    <td>{ movie.directorId }</td>
                                    <td>{ formatDate(movie.releaseDate) }</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default MoviesTable;