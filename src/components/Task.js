// import React from "react";

// function Task() {
//   return (
//     <div className="task">
//       <div className="label">CATEGORY HERE</div>
//       <div className="text">TEXT HERE</div>
//       <button className="delete">X</button>
//     </div>
//   );
// }

// export default Task;



import React from "react";

function Task({ task, onDeleteTask }) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => onDeleteTask(task.text)}>
        X
      </button>
    </div>
  );
}

export default Task;
