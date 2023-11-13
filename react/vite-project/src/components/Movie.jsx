function Movie(props) {
    return (
        <div className="movie">
            <p>Número de Identificación: { props.id }</p>
            <p>Nombre: { props.name }</p>
            <p>Género: { props.genre }</p>
            <p>Número de Identificación del director: { props.directorId }</p>
            <p>Fecha de lanzamiento: { props.releaseDate }</p>
        </div>
    );
}

export default Movie;