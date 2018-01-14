import React from 'react';

const NewListForm = ({onNewList = f => f}) => {
    let _title, _excerpt
    const submit = e => {
        e.preventDefault()
        onNewList(_title.value, _excerpt.value)
        _title.value = ''
        _excerpt.value = ''
        _title.focus()
    }

    return (
        <form onSubmit={submit}>
            <input  ref={input => _title = input}
                    type="text"
                    placeholder="Title..." required />
            <input  ref={input => _excerpt = input}
                    type="text"
                    placeholder="Excerpt..." required />
            <button>Add List</button>
        </form>
    )
}

export default NewListForm;