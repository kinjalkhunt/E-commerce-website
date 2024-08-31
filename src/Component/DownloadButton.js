// import React from "react";
// import axios from "axios";

//  const DownloadButton = () => {
//     const handleDownload = ()=>{
//         axios.fetch("http://localhost:7000/download").then
//             (responsse => {
//                 if(Response.ok){
//                     return Response.blob();
//                 }
//                 throw new Error('network response was not ok')

//             }).then(blob => {
//                 const url = window.URL.createObjectURL(blob);
//                 const a = document.createElement('a');
//                 a.style.display = 'none';
//                 a.href = url;
//                 a.download = 'aastha.png';
//                 document.body.appendChild(a);
//                 a.click();
//                 window.URL.revokeObjectURL(url);

//             }).catch(error => {
//                 console.error('there was aproblem with the fetch data',error);
//             });
//         };
//         return (
//             <button onclick={handleDownload}>Download Image</button>
//         );
//     };
// export default DownloadButton;


import React from "react";
import axios from "axios";

export default function DownloadButton() {
  return (
    <>
      <button onClick={(e) =>{ e.preventDefault()
        try {
            axios.get("http://localhost:3001/file")
            console.log("file downloaded");
        } catch (error) {
            console.log("error ==", error);
        }
      } }> download file</button>
    </>
  );
}