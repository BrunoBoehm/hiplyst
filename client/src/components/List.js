import React from 'react';

const List = ({list, onRemoveList=f=>f, onEditList=f=>f}) =>
    <div className="single-list" key={list.id}>
        <h4>{list.title}</h4>
        <p>{list.excerpt}</p>
        <button onClick={() => onRemoveList(list.id)}>Erase</button>
        <button onClick={() => onEditList(list.id)}>Edit</button>
        <hr/>
    </div>

export default List;