import React from 'react';
import Post from './Post';

const NEWS = [
    {
        author: "Viktor",
        created_at: "2020-03-01T13:10:45",
        num_comments: 10,
        title: "Enzyme",
        objectId: 1,
        points: 10,
        url: "//test.url",
    },
    {
        author: "Ivan",
        created_at: "2019-09-21T10:20:05",
        num_comments: 8,
        title: "Jest",
        objectId: 2,
        points: 110,
        url: "//test2121.url",
    },
    {
        author: "Vadim",
        created_at: "2012-05-22T23:40:05",
        num_comments: 4,
        title: "JavaScript",
        objectId: 5,
        points: 20,
        url: "//main.urls",
    },
];

const Posts = () =>  (
        <ul className="newsList">
            {NEWS.map(({author, created_at, num_comments, title, points, url, objectId}) => (
                <Post
                    key={objectId}
                    author={author}
                    created_at={created_at}
                    num_comments={num_comments}
                    title={title}
                    points={points}
                    url={url}
                />
            ))}
        </ul>
    );


export default Posts;
