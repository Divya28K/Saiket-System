import Table from "./components/Table";
import "./styles/App.css"
function App() {
  return (
    <>
    <div style={{ textAlign: "center", padding: "20px" }}></div>
    <img 
        src="favicon.ico"      // Or /diagram.png
        alt="User Table" 
        style={{ width: "50px", marginBottom: "50px" }} 
      />
      <Table />
    </>
  );
}
 export default App;

// import Table from "./components/Table";
// import "./styles/App.css";

// function App() {
//   return (
//     <div>
//       {/* Display your diagram */}
//       <img 
//         src="/diagram.ico"   // Make sure this file is in public/ and rename if needed
//         alt="User Management Diagram" 
//         style={{ width: "300px", marginBottom: "20px" }} 
//       />

//       {/* Render the Table */}
//       <Table />
//     </div>
//   );
// }

// export default App;

// import Table from "./components/Table";
// import "./styles/App.css";

// function App() {
//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       {/* Diagram */}
//       <img 
//         src="/diagram.ico"      // Or /diagram.png
//         alt="User Management Diagram" 
//         style={{ width: "300px", marginBottom: "20px" }} 
//       />

//       {/* User Table */}
//       <Table />
//     </div>
//   );
// }


