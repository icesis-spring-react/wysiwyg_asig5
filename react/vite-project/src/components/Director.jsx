function Director(props) {
    return (
        <div className="director">
            <p>Número de Identificación: { props.id }</p>
            <p>Nombre: { props.name }</p>
        </div>
    );
}

export default Director;