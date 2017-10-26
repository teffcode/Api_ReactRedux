import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchPosts } from '../actions';

import './Posts.css';

class Posts extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return _.map(this.props.posts, post => {
            console.log(post.title)
            return (
                <div 
                    key={post.title}
                    className="container__one"
                >
                    {post.title}
                </div>
            );
        });
    }

    render(){
        return (
            <div className="container__two">
                <h1>Post Titles: </h1>
                {this.renderPosts()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts 
    }
}

export default connect(mapStateToProps, { fetchPosts })(Posts);