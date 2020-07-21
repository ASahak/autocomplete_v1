import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
    AXIOS_BASE_URL
} from '../../utils/constants';
import {
    classDebounce
} from '../../hooks/use-debounce';

class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state= {};

        this.onSearch       = this.onSearch.bind(this);
        this.startSearch    = this.startSearch.bind(this);
        this.debounceTyping = this.debounceTyping.bind(this);
    }

    debounceTyping = classDebounce(this.onSearch, 600);

    async onSearch (e) {
        this.props.isSeeking(true);
        const { value } = e.target;
        if (!value) {
            this.props.getData([]);
            this.props.isSeeking(false);
            this.props.noResult('');
        } else {
            try {
                const {data} = await axios.get(AXIOS_BASE_URL + `search?q=${value}&index=tournament`);
                if (data.length && data[0].documents) {
                    this.props.getData(data[0].documents);
                    this.props.noResult('');
                } else {
                    this.props.getData([]);
                    this.props.noResult('No Result - ' + value);
                }
            } catch (err) {
                this.props.noResult(err.response ? err.response.data.message : err.message);
                console.error(err.response ? err.response.data.message : err.message)
            } finally {
                this.props.isSeeking(false);
            }
        }
    }

    startSearch (e) {
        e.persist();
        this.debounceTyping(e)
    }
    render() {
        return (
            <div className="search-wrap">
                <input type="text" placeholder="Search..." onChange={(e) => this.startSearch(e)}/>
                <style jsx="true">{`
                    .search-wrap input {
                        padding: 10px 10px;
                        border: 1px solid #ccc;
                        border-radius: 3px;
                        width: 100%;
                    }
                `}</style>
            </div>
        )
    }
}
Search.propTypes = {
    getData: PropTypes.func,
    isSeeking: PropTypes.func,
    noResult: PropTypes.func,
};

export default Search;
