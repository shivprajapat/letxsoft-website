import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Form } from "react-bootstrap";

const BlogSearchInput = (props) => {

    return <Form>
        <div className="form-group">
            <input type="text" className="form-control" onChange={(e) => props.setSearchValue(e.target.value)}
                value={props.searchValue} /></div>
        <button type="submit" className="btn"><FaSearch /></button>
    </Form>
};

export default BlogSearchInput;
