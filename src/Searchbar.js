import './Searchbar.css';

const Searchbar = () => {
    return (
        // <div className="input-group mb-3">
        //     <span className="input-group-text" id="search-icon"><i class="fas fa-search"></i></span>
        //     <input type="text" className="form-control" />
        // </div>

        <div className="input-group mb-3">
            <span className="input-group-text" id="search-icon"><i class="fas fa-search"></i></span>
            <input type="text" className="form-control" />
            <span className="input-group-text" id="mic-icon"><i class="fas fa-microphone"></i></span>
        </div>

    )
}

export default Searchbar;