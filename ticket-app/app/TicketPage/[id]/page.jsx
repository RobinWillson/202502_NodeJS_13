import TicketForm from '@/app/{components}/TicketForm';
import React from 'react';

async function getTicketByID(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    console.log("Error fetching tickets", error);
  }
}

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  console.log("TicketPage EDITMODE : ", EDITMODE);
  let updateTicketData = {};
  if (EDITMODE) {
    updateTicketData = await getTicketByID(params.id);
    // console.log(updateTicketData);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
      title: "",
      description: "",
      priority: 1,
      progress: 0,
      status: "not started",
      category: "hardware issue",
    };
  };

  return (
    <div><TicketForm ticket={ updateTicketData } /></div>
  );
};

export default TicketPage;