import React, { useState } from 'react';
import './Todo.css';

function Todo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    const newTask = { title, description };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  return (
    <div>
      <div className="row">
        <div className="col-lg-6 text-center mt-5 p-5">
          <h3 className="mt-5"><b>TODO</b></h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum, officiis laboriosam laudantium
            minus praesentium ipsam nihil quas quidem repellendus voluptates. Commodi ratione repellat distinctio in
            nostrum, ab aut ipsum?
          </p>
          <div className="p-3">
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="btn btn-primary mt-3 w-50" onClick={handleAddTask}><b>Add</b></button>
          </div>
        </div>

        <div className="col-lg-6 p-5">
          <h4><b>TODO LIST</b></h4>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              className="form-control mt-5 w-25 pl-5"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i className="fa-solid mt-5 p-2 fa-magnifying-glass"></i>
            <div className="p-2 mt-5" style={{ width: '20%', marginLeft: 'auto' }}>
              <select className="form-control mt-2">
                <option value="Filter" disabled selected>Filter</option>
                <option value="Completed">Completed</option>
                <option value="Favourite">Favourite</option>
                <option value="Delete">Delete</option>
              </select>
            </div>
          </div>

          {filteredTasks.map((task, index) => (
            <div key={index} className="row mt-5">
              <div className="col-lg-10 mt-5">
                <h5><b>{task.title}</b></h5>
                <p>{task.description}</p>
              </div>
              <div className="col-lg-2 text-right mt-5">
         
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;

