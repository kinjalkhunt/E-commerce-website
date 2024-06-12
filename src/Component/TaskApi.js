
import React, { useState } from "react";

function Task() {
    // Initialize api state with useState
    const [api, setApi] = useState([
        {"createdAt":"2024-05-08T14:08:39.929Z","name":"Eduardo Mayer","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/165.jpg","id":"1"},
        {"createdAt":"2024-05-09T06:15:06.513Z","name":"Sally Cartwright","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/488.jpg","id":"2"},
        {"createdAt":"2024-05-09T03:03:12.740Z","name":"Mr. Rodney Leffler","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/662.jpg","id":"3"},
        {"createdAt":"2024-05-09T10:51:03.078Z","name":"Francis Quigley","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/813.jpg","id":"4"},
        {"createdAt":"2024-05-08T14:36:05.801Z","name":"Eloise Zemlak","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/495.jpg","id":"5"},
        {"createdAt":"2024-05-09T08:17:14.184Z","name":"Brenda Kub Sr.","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/647.jpg","id":"6"},
        {"createdAt":"2024-05-09T04:39:55.148Z","name":"Lana Mueller","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/271.jpg","id":"7"},
        {"createdAt":"2024-05-08T19:26:48.540Z","name":"Bernice Predovic","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/274.jpg","id":"8"},
        {"createdAt":"2024-05-08T22:26:48.914Z","name":"Frances Davis","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1059.jpg","id":"9"}
    ]);


    return (
        <>
            <div style={{ border: '2px solid gray', height: 'auto', flexDirection: 'row', flexWrap: 'wrap' }}>
                {api.map((value) => (
                    <div key={value.id} style={{ border: '2px solid gray', margin: '10px' }}>
                        <img src={value.avatar} alt={value.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                        <p>id: {value.id}</p>
                        <p>name: {value.name}</p>
                        <p>Date: {new Date(value.createdAt).toLocaleDateString()}</p>
                        <p>Time: {new Date(value.createdAt).toLocaleTimeString()}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Task;
