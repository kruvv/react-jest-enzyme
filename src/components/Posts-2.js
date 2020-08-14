import React, { Component } from 'react';
import Post from './Post';
import Title from './Title';
import Select from './Select';
import Input from './Input';

import { NEWS, HITS } from './constants.js';
import { render } from 'enzyme';

class Posts2 extends Component {

    state = {
        searchQuery: "",
        hitsPerPage: 20,
        page: 0,
    };

    handleInputChange = ({ target: { value } }) => {
        this.setState({
            searchQuery: value,
        });
    };

    handleHitsChange = ({ target: { value } }) => {
        this.setState({
            hitsPerPage: +value,
            page: 0,
        });
    };

    getSearch = ({ key }) => {
        if(key === 'Enter') {
            this.setState({
                page: 0,
            });
        };
    };

render() {

    const { searchQuery, hitsPerPage } = this.state;

        return (
            <div className="wrapper">
                <Title title="Hacker News"/>
                <Select
                    options={HITS}
                    handleChange={this.handleChange}
                    value={hitsPerPage}
                />
                <Input
                    onKeyPress={this.getSearch}
                    onChange={this.handleInputChange}
                    value={searchQuery}
                />
            </div>

        );
    }
}

export default Posts2;
