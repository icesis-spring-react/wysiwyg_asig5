import "../styles/DirectorsTable.css";

function DirectorsTable(props) {
    return (
        <div className="directors-table">
            <h2>Directores</h2>

            <table className="directors-tbl" border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.directors.map((director) => {
                            return (
                                <tr key={ director.id }>
                                    <td>{ director.id }</td>
                                    <td>{ director.name }</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default DirectorsTable;