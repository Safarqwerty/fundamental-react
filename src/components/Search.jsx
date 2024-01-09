import { useState } from "react";
import PropTypes from "prop-types";

function Search(props) {
    const [search, setSearch] = useState("");

    const onSearchChange = (event) => {
        setSearch(event.target.value);
        props.onSearchChange(event.target.value);
    };

    return (
        <>
            <div>
                Cari Artikel : <input onChange={onSearchChange}></input>
            </div>
            <small>Ditemukan 0 data dengan pencarian kata {search}</small>
        </>
    );
}

Search.propTypes = {
    onSearchChange: PropTypes.func.isRequired,
};

export default Search;
