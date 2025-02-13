"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
useRouter;

const TicketForm = ({ ticket }) => {
  console.log("TicketForm ticket : ", ticket);
  const router = useRouter();
  const EDITMODE = ticket._id === "new" ? false : true;
  console.log("EDITMODE", EDITMODE);
  let startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "hardware issue",
  };
  if (EDITMODE) {
    startingTicketData = ticket;
    // startingTicketData._id = "";
  }
  const [formData, setFormData] = useState(startingTicketData);
  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    console.log("formData", formData);
    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Error update ticket Form");
      }
    } else {
      console.log("body", JSON.stringify({ formData }));
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Error creating ticket Form");
      }
    }


    router.refresh();
    router.push("/");
  };

  return (
    <div className='flex justify-center'>
      <form className='flex flex-col gap-1 w-1/2' method='post' onSubmit={ handleSubmit }>
        <h3>{ EDITMODE ? "Update Your Ticket" : "Start Your Ticket" }</h3>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={ handelChange }
          required={ true }
          value={ formData.title }
        />
        {/* //------------------------------------- */ }
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={ handelChange }
          required={ true }
          value={ formData.description }
          rows={ 5 }
        />
        {/* //------------------------------------- */ }
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          name="priority"
          onChange={ handelChange }
          required={ true }
          value={ formData.priority } >
          <option value={ 1 }>Low</option>
          <option value={ 2 }>Medium</option>
          <option value={ 3 }>High</option>
        </select>
        {/* //------------------------------------- */ }
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          onChange={ handelChange }
          required={ true }
          value={ formData.category }>
          <option value="hardware issue">Hardware Issue</option>
          <option value="software issue">Software Issue</option>
          <option value="network issue">Network Issue</option>
        </select>

        {/* //------------------------------------- */ }
        <label>Status</label>
        <select name='status' id='status' value={ formData.status } onChange={ handelChange }>
          <option value='not started'>Not Started</option>
          <option value='in progress'>In Progress</option>
          <option value='completed'>Completed</option>
        </select>
        {/* //------------------------------------- */ }
        <label>Progress</label>
        <input type="range" id="progress" name="progress" min="0" max="100" className="mb-4 " value={ formData.progress } onChange={ handelChange } />
        {/* //------------------------------------- */ }
        <button type='submit' className='btn' onClick={ handleSubmit }>
          { EDITMODE ? "UPDATE TICKET" : "CREATE TICKET" }</button>
      </form>

    </div>
  );
};

export default TicketForm;