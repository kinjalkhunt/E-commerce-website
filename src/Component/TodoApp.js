// import React, { useState } from 'react';


// function TodoApp() {
//     const [addInput, setAddInput] = useState('');
//     const [addToDo, setAddToDo] = useState([]);
//     // const [counter, setCounter] = useState(0);
//     const [flagEditing, setFlagEditing] = useState(null);
//     // const [showCloseButton, setShowCloseButton] = useState(false);
//     const [showAlert, setShowAlert] = useState(false);
//     const [selectedIds, setSelectedIds] = useState([]);


//     const handleAddOrUpdate = (e) => {
//         e.preventDefault();

//         if (!addInput.trim()) { // Show alert if input is empty
//             setShowAlert(true);
//             return;
//         }

//         if (flagEditing !== null) {
//             setAddToDo(addToDo.map(list => {
//                 if (list.id === flagEditing.id) {
//                     return { ...list, addInput };
//                 }
//                 return list;
//             }));
//             setFlagEditing(null);
//             // setShowCloseButton(false);
//         } else {
//             setAddToDo([...addToDo, { addInput, id: Date.now() }]);
//             // setCounter(counter + 1);
//         }

//         setAddInput('');
//         setShowAlert(false); // Hide alert if input is valid
//     };

//     const handleDelete = (index) => {
//         const newArray = [...addToDo];
//         newArray.splice(index, 1);
//         setAddToDo(newArray);
//     };

//     const handleEdit = (list) => {
//         setAddInput(list.addInput);
//         setFlagEditing(list);
//         // setShowCloseButton(true);
//     };

//     const handleClose = () => {
//         setFlagEditing(null);
//         setAddInput('');
//         //  setShowCloseButton(false);
//     };
//     const handleClearInput = () => {
//         setAddInput('');
//         setShowAlert(false);
//     };
//     const handleSelect = (id) => {
//         setSelectedIds(prev => {
//             // const updated = new Set(prev);
//             if (prev.includes(id)) {
//                 return prev.filter(selectedIds => selectedIds !== id);
//             } else {
//                 return[...prev,id];
//             }
        
//         });
//     };

//     const handleDeleteSelected = () => {
//         setAddToDo(addToDo.filter(item => !selectedIds.includes(item.id)));
//         setSelectedIds([]);
//     };
// //      useEffect(()=>{
// //     console.log("use effect called");
// //     window.alert([addToDo,addInput]);
// //    })

//     return (
//         <>
//             <input
//                 type="text"
//                 placeholder="Enter your text"
//                 onChange={(e) => setAddInput(e.target.value)}
//                 value={addInput}
//             />
//             {/* //rendering process */}

//             <button onClick={handleAddOrUpdate}>{flagEditing ? 'Update' : 'Add'}</button>
            
//             {/* {showCloseButton && (<button onClick={handleClose}>Close</button>)} */}
//             {addInput && !flagEditing && <button onClick={handleClearInput}>Remove</button>} 

//             {showAlert && (
//                 <div style={{
//                     position: 'fixed',
//                     bottom: '20%',
//                     left: '40px',
//                     border: '1px solid black',
//                     backgroundColor: 'lightblue',
//                     margin: '10px',
//                     right: 'auto',
//                     color: 'black',
//                     padding: '10px',
//                     textAlign: 'center',
//                     width: '200px', // Adjust the width to make it a small box
//                     boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
//                     borderRadius: '5px'
//                 }}>
//                     Please Enter your Todo list.
//                 </div>
//             )}

//             <div>
//                 <ol>
//                     {addToDo.map((value, index) => (
//                         <li key={value.id}>
//                             <input
//                                 type="checkbox"
//                                 checked={selectedIds.includes(value.id)}
//                                 onChange={() => handleSelect(value.id)}
//                             />
//                             <span>{value.addInput}</span>
//                             <button onClick={() => (index)}>Delete</button>
//                             <button onClick={() => handleEdit(value)}>Edit</button>
//                             {flagEditing && flagEditing.id === value.id && (
//                                 <button onClick={handleClose}>Close</button>)}
//                         </li>
//                     ))}
//                 </ol>
//                 {selectedIds.length > 0 && (
//                     <button onClick={handleDeleteSelected}>Remove Selected</button>
//                 )}
//             </div>
//         </>
//     );
// }

// export default TodoApp;
import { useState } from "react";
// import "./App.css";

function TodoApp() {
    const [details, setDetails] = useState([]);
    const [dataStore, setDataStore] = useState('');
    const [counter, setCounter] = useState(0);
    const [flagDetilsEditing, setFlagDetailsEditing] = useState(null);
    const [fixAlretBox, setFixAlertBox] = useState(false);
    const [showCheckboxes, setShowCheckboxes] = useState(false);
    const [deleteMulSelection, setDeleteMulSelection] = useState([]);

    const DeleteInput = (index) => {
        const newDetails = [...details];
        newDetails.splice(index, 1);
        setDetails(newDetails);
    };

    const handleCheckboxChange = (taskId) => {
        if (deleteMulSelection.includes(taskId)) {
            setDeleteMulSelection(deleteMulSelection.filter(id => id !== taskId));
        } else {
            setDeleteMulSelection([...deleteMulSelection, taskId]);
        }
    };

    return (
        <>
            <input
                type="text"
                placeholder="Enter Something"
                onChange={(e) => {
                    setDataStore(e.target.value);
                }}
                value={dataStore}
            />

            <button
                style={{ marginLeft: '10px', width: '7%' }}
                onClick={(e) => {
                    e.preventDefault();

                    if (!dataStore.trim()) {
                        setFixAlertBox(true);
                        return;
                    }

                    if (flagDetilsEditing) {
                        flagDetilsEditing.taskTitle = dataStore;

                        setDetails(
                            details.map((value) => {
                                if (value.id === flagDetilsEditing.id) {
                                    return flagDetilsEditing;
                                }
                                return value;
                            })
                        );

                        setFlagDetailsEditing(null);
                    } else {
                        setDetails([...details, {
                            taskTitle: dataStore,
                            id: counter
                        }]);

                        setCounter(counter + 1);
                    }

                    setDataStore('');
                    setFixAlertBox(false);
                }}
            >
                {flagDetilsEditing ? 'Update' : 'Add'}
            </button>

            {dataStore && !flagDetilsEditing && (
                <button
                    style={{ marginLeft: '10px', width: '5%' }}
                    onClick={(e) => {
                        e.preventDefault();
                        setDataStore('');
                    }}
                >
                    Remove
                </button>
            )}

            <button
                style={{ marginLeft: '10px', width: '5%' }}
                onClick={(e) => {
                    e.preventDefault();
                    setShowCheckboxes(!showCheckboxes);
                }}
            >
                Select
            </button>

            {showCheckboxes && (
                <button
                    style={{ marginLeft: '10px', width: '10%' }}
                    onClick={(e) => {
                        e.preventDefault();
                        const newDetails = details.filter(task => !deleteMulSelection.includes(task.id));
                        setDetails(newDetails);
                        setDeleteMulSelection([]);
                    }}
                >
                    Delete Selected
                </button>
            )}

            {fixAlretBox && (
                <div style={{
                    position: 'fixed',
                    right: '50px',
                    border: '1.5px solid gray',
                    backgroundColor: 'white',
                    margin: '20px',
                    float: "right",
                    color: 'black',
                    padding: '15px',
                    textAlign: 'center',
                    width: '200px',
                    boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.1)',
                    borderRadius: '5px'
                }}>
                    Input cannot be empty!
                </div>
            )}

            <div>
                {details.map((value, index) => {
                    return (
                        <div key={value.id} style={{ display: 'flex', margin: '10px', gap: '1rem' }}>
                            {showCheckboxes && (
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheckboxChange(value.id)}
                                />
                            )}
                            <h3>{value.taskTitle}</h3>
                            <button style={{ width: '5%' }} onClick={() => DeleteInput(index)}>Delete</button>
                            <button
                                style={{ width: '5%' }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setDataStore(details[index].taskTitle);
                                    setFlagDetailsEditing(details[index]);
                                }}
                            >
                                Edit
                            </button>
                            {flagDetilsEditing && flagDetilsEditing.id === value.id && (
                                <button
                                    style={{ width: '5%' }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setDataStore("");
                                        setFlagDetailsEditing(null);
                                    }}
                                >
                                    Close
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default TodoApp;
