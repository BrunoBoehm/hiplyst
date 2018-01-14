import React from 'react';

const List = ({list}) =>
    <div className="single-list" key={list.id}>
        <h4>{list.title}</h4>
        <p>{list.excerpt}</p>
    </div>

export default List;