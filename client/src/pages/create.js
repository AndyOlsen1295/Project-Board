import React, { useState } from "react";

function ProjectForm() {
  const [name, setName] = useState("");
  const [members, setMembers] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = {
      name,
      members,
      dueDate,
      priority,
      notes,
    };
    console.log(project);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-4">
      <label className="block mb-2">
        <span className="text-gray-700">Name of the project:</span>
        <input
          className="form-input mt-1 block w-full"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="block mb-2">
        <span className="text-gray-700">Group members:</span>
        <input
          className="form-input mt-1 block w-full"
          type="text"
          value={members}
          onChange={(e) => setMembers(e.target.value)}
        />
      </label>
      <label className="block mb-2">
        <span className="text-gray-700">Desired due date:</span>
        <input
          className="form-input mt-1 block w-full"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </label>
      <label className="block mb-2">
        <span className="text-gray-700">Priority:</span>
        <select
          className="form-select mt-1 block w-full"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">--Select--</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
      <label className="block mb-2">
        <span className="text-gray-700">Notes:</span>
        <textarea
          className="form-textarea mt-1 block w-full"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </label>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Create
      </button>
    </form>
  );
}
