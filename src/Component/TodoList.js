
import React, { useState } from 'react';

function TodoApp() {
    const [addInput, setAddInput] = useState('');
    const [addToDo, setAddToDo] = useState([]);
    const [flagEditing, setFlagEditing] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [selectedIds, setSelectedIds] = useState([]);

    const handleAddOrUpdate = (e) => {
        e.preventDefault();

        if (!addInput.trim()) { // Show alert if input is empty
            setShowAlert(true);
            return;
        }

        if (flagEditing !== null) {
            setAddToDo(addToDo.map(list => {
                if (list.id === flagEditing.id) {
                    return { ...list, addInput };
                }
                return list;
            }));
            setFlagEditing(null);
        } else {
            setAddToDo([...addToDo, { addInput, id: Date.now() }]);
        }

        setAddInput('');
        setShowAlert(false); // Hide alert if input is valid
    };

    const handleDelete = (index) => {
        const newArray = [...addToDo];
        newArray.splice(index, 1);
        setAddToDo(newArray);
    };

    const handleEdit = (list) => {
        setAddInput(list.addInput);
        setFlagEditing(list);
    };

    const handleClose = () => {
        setFlagEditing(null);
        setAddInput('');
    };

    const handleClearInput = () => {
        setAddInput('');
        setShowAlert(false);
    };

    const handleSelect = (id) => {
        setSelectedIds(prev => {
            // const updated = new Set(prev);
            if (prev.includes(id)) {
                return prev.filter(selectedIds => selectedIds !== id);
            } else {
                return[...prev,id];
            }
        
        });
    };

    const handleDeleteSelected = () => {
        setAddToDo(addToDo.filter(item => !selectedIds.includes(item.id)));
        setSelectedIds([]);
    };

    return (
        <>
            <input
                type="text"
                placeholder="Enter your text"
                onChange={(e) => setAddInput(e.target.value)}
                value={addInput}
            />
            <button onClick={handleAddOrUpdate}>{flagEditing ? 'Update' : 'Add'}</button>
            {addInput && !flagEditing && <button onClick={handleClearInput}>Remove</button>}

            {showAlert && (
                <div style={{
                    position: 'fixed',
                    bottom: '20%',
                    left: '40px',
                    border: '1px solid black',
                    backgroundColor: 'lightblue',
                    margin: '10px',
                    right: 'auto',
                    color: 'black',
                    padding: '10px',
                    textAlign: 'center',
                    width: '200px', // Adjust the width to make it a small box
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    borderRadius: '5px'
                }}>
                    Please enter your Todo list.
                </div>
            )}

            <div>
                <ol>
                    {addToDo.map((value, index) => (
                        <li key={value.id}>
                            <input
                                type="checkbox"
                                checked={selectedIds.includes(value.id)}
                                onChange={() => handleSelect(value.id)}
                            />
                            <span>{value.addInput}</span>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                            <button onClick={() => handleEdit(value)}>Edit</button>
                            {flagEditing && flagEditing.id === value.id && (
                                <button onClick={handleClose}>Close</button>
                            )}
                        </li>
                    ))}
                </ol>
                {selectedIds.length > 0 && (
                    <button onClick={handleDeleteSelected}>Remove Selected</button>
                )}
            </div>
        </>
    );
}

export default TodoApp;
