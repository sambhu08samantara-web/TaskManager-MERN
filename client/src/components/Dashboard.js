import { toast } from "react-toastify";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
const [dueDate, setDueDate] = useState("");
const [tasks, setTasks] = useState([]);
const [loading, setLoading] = useState(false);
const [search, setSearch] = useState("");
const [filter, setFilter] = useState("All");
const [sortBy, setSortBy] = useState("Newest");

const [editingTask, setEditingTask] = useState(null);
const [editTitle, setEditTitle] = useState("");
const [editPriority, setEditPriority] = useState("Medium");
const [editDueDate, setEditDueDate] = useState("");
  const token = localStorage.getItem("token");
const fetchTasks = useCallback(async () => {
  setLoading(true);

  try {
    const response = await axios.get(
      https://taskmanager-backend-iico.onrender.com,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setTasks(response.data);
  } catch (error) {
    console.log(error.response?.data || error.message);
    toast.error("Failed to Fetch Tasks");
  } finally {
    setLoading(false);
  }
}, [token]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
   fetchTasks();
}, [fetchTasks]);
const handleAddTask = async () => {
  if (task.trim() === "") {
    toast.warning("Please enter a task");
    return;
  }

  try {
    await axios.post(
      https://taskmanager-backend-iico.onrender.com,
      {
        title: task,
        priority: priority,
        dueDate: dueDate,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setTask("");
    setPriority("Medium");
    setDueDate("");

    await fetchTasks();

    toast.success("Task Added Successfully");
  } catch (error) {
    console.log(error.response?.data || error.message);
    toast.error("Failed to Add Task");
  }
};

const handleComplete = async (id) => {
  try {
    await axios.put(
      `https://taskmanager-backend-iico.onrender.com/api/tasks/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    await fetchTasks();

    toast.success("Task Updated");
  } catch (error) {
    toast.error("Failed to Update Task");
  }
};

const handleDelete = async (id) => {
  if (!window.confirm("Delete this task?")) return;

  try {
    await axios.delete(
      `https://taskmanager-backend-iico.onrender.com/api/tasks/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    await fetchTasks();

    toast.success("Task Deleted");
  } catch (error) {
    toast.error("Failed to Delete Task");
  }
};
   const handleEdit = (item) => {
  setEditingTask(item._id);
  setEditTitle(item.title);
  setEditPriority(item.priority || "Medium");
  setEditDueDate(
    item.dueDate
      ? new Date(item.dueDate).toISOString().split("T")[0]
      : ""
  );
};
const handleDeleteCompleted = async () => {
  try {
    await axios.delete(
      "https://taskmanager-backend-iico.onrender.com/api/tasks/completed/all",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    await fetchTasks();

    toast.success("Completed Tasks Deleted");
  } catch (error) {
    toast.error("Failed to Delete Completed Tasks");
  }
};
const handleSaveEdit = async () => {
  try {
    await axios.put(
      `https://taskmanager-backend-iico.onrender.com/api/tasks/${editingTask}`,
      {
        title: editTitle,
        priority: editPriority,
        dueDate: editDueDate,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setEditingTask(null);
    setEditTitle("");
    setEditPriority("Medium");
    setEditDueDate("");

    await fetchTasks();

    toast.success("Task Updated Successfully");
  } catch (error) {
    toast.error("Failed to Update Task");
  }
};
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
  <div>
    <h1>📋 Task Manager</h1>
<p>Manage • Track • Complete your daily tasks</p>
  </div>

  <button className="logout-btn" onClick={handleLogout}>
    Logout
  </button>
</div>

      <div className="task-input">
       <input
  type="text"
  placeholder="Enter Task"
  value={task}
  onChange={(e) => setTask(e.target.value)}
/>

<select
  value={priority}
  onChange={(e) => setPriority(e.target.value)}
>
  <option value="Low">Low</option>
  <option value="Medium">Medium</option>
  <option value="High">High</option>
</select>

<input
  type="date"
  value={dueDate}
  onChange={(e) => setDueDate(e.target.value)}
/>

<button onClick={handleAddTask}>Add Task</button>
      </div>

      <div className="stats-container">

  <div className="stat-card total">
    <h2>{tasks.length}</h2>
    <p>Total Tasks</p>
  </div>

  <div className="stat-card completed">
    <h2>{completedTasks}</h2>
    <p>Completed</p>
  </div>

  <div className="stat-card pending">
    <h2>{pendingTasks}</h2>
    <p>Pending</p>
  </div>

</div>
      <h2>My Tasks</h2>
      {loading && (
  <div
    style={{
      textAlign: "center",
      padding: "15px",
      fontSize: "18px",
      fontWeight: "bold",
      color: "#007bff",
    }}
  >
    Loading...
  </div>
)}
      {loading && (
  <div
    style={{
      textAlign: "center",
      fontSize: "20px",
      margin: "20px 0",
      color: "#007bff",
      fontWeight: "bold",
    }}
  >
    Loading...
  </div>
)}
      <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
    flexWrap: "wrap",
    gap: "10px",
  }}
>
  <button
    onClick={handleDeleteCompleted}
    style={{
      background: "#dc3545",
      color: "white",
      border: "none",
      padding: "10px 15px",
      borderRadius: "6px",
      cursor: "pointer",
    }}
  >
    Delete Completed
  </button>
</div>
     <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px",
  }}
>
  <div style={{ display: "flex", gap: "10px" }}>
    <button onClick={() => setFilter("All")}>All</button>

    <button onClick={() => setFilter("Pending")}>
      Pending
    </button>

    <button onClick={() => setFilter("Completed")}>
      Completed
    </button>
  </div>

  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
  >
    <option value="Newest">Newest</option>
    <option value="Oldest">Oldest</option>
    <option value="Priority">Priority</option>
    <option value="DueDate">Due Date</option>
  </select>
</div>
<input
  type="text"
  placeholder="🔍 Search Task..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  }}
/>
      {tasks.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
       tasks
  .filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )
  .filter((item) => {
    if (filter === "Completed") return item.completed;
    if (filter === "Pending") return !item.completed;
    return true;
  })
  .sort((a, b) => {
    if (sortBy === "Newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }

    if (sortBy === "Oldest") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }

    if (sortBy === "Priority") {
      const order = {
        High: 3,
        Medium: 2,
        Low: 1,
      };

      return order[b.priority] - order[a.priority];
    }

    if (sortBy === "DueDate") {
      return new Date(a.dueDate || 0) - new Date(b.dueDate || 0);
    }

    return 0;
  })
  .map((item) => (
          <div className="task-card" key={item._id}>
           <div>
  {editingTask === item._id ? (
    <>
      <input
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
      />

      <select
        value={editPriority}
        onChange={(e) => setEditPriority(e.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <input
        type="date"
        value={editDueDate}
        onChange={(e) => setEditDueDate(e.target.value)}
      />

      <button onClick={handleSaveEdit}>
        Save
      </button>
    </>
  ) : (
    <>
     {editingTask === item._id ? (
  <>
    <input
      type="text"
      value={editTitle}
      onChange={(e) => setEditTitle(e.target.value)}
    />

    <select
      value={editPriority}
      onChange={(e) => setEditPriority(e.target.value)}
    >
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>

    <input
      type="date"
      value={editDueDate}
      onChange={(e) => setEditDueDate(e.target.value)}
    />

    <button onClick={handleSaveEdit}>Save</button>
  </>
) : (
  <h3
  style={{
    margin: "0",
    textDecoration: item.completed ? "line-through" : "none",
    color: item.completed ? "#6c757d" : "#212529",
    opacity: item.completed ? 0.7 : 1,
    fontWeight: "600",
  }}
>
  {item.title}

  {item.completed && (
    <span
      style={{
        marginLeft: "10px",
        background: "#28a745",
        color: "#fff",
        padding: "3px 8px",
        borderRadius: "12px",
        fontSize: "12px",
      }}
    >
      Completed
    </span>
  )}
</h3>
)}

      <p style={{ margin: "8px 0" }}>
  <strong>Priority:</strong>

  <span
    style={{
      marginLeft: "8px",
      padding: "4px 10px",
      borderRadius: "20px",
      color: "#fff",
      fontSize: "13px",
      background:
        item.priority === "High"
          ? "#dc3545"
          : item.priority === "Medium"
          ? "#ffc107"
          : "#28a745",
    }}
  >
    {item.priority}
  </span>
</p>

      <p style={{ margin: "5px 0" }}>
        <strong>Due Date:</strong>{" "}
        {item.dueDate
          ? new Date(item.dueDate).toLocaleDateString()
          : "Not Set"}
      </p>
    </>
  )}
</div>
            <div>
  {editingTask !== item._id && (
    <>
      <button onClick={() => handleComplete(item._id)}>
        ✔
      </button>

      <button
        style={{ marginLeft: "8px" }}
        onClick={() => handleEdit(item)}
      >
        Edit
      </button>

      <button
        style={{ marginLeft: "8px" }}
        onClick={() => handleDelete(item._id)}
      >
        Delete
      </button>
    </>
  )}
</div>
          </div>
        ))
      )}

    </div>
  );
}

export default Dashboard;