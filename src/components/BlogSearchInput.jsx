import React from 'react';
import { FaSearch } from "react-icons/fa";
const BlogSearchInput = (props) => {
   
    return <form>
        <div className="form-group">
            <input type="text" className="form-control" onChange={(e) => props.setSearchValue(e.target.value)}
                value={props.searchValue} /></div>
        <button type="submit" className="btn"><FaSearch /></button>
    </form>
};

export default BlogSearchInput;
