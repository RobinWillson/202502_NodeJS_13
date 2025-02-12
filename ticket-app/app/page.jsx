import TicketCard from './{components}/TicketCard';
import testConnection from './test-mongodb-connection';

const getTickets = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/Tickets', {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    console.log("Error fetching tickets", error);
  }
};
const DashBoard = async () => {
  let connection = await testConnection();
  console.log(connection);
  const { tickets } = await getTickets();
  const uniqueCategories = [...new Set(tickets?.map((ticket) => ticket.category))];
  return (
    <div className='p-5 '>
      <div>
        { tickets && uniqueCategories?.map((category, categoryIndex) => (
          <div key={ categoryIndex } className='mb-4'>
            <h2>{ category }</h2>
            <div className='grid grid-cols-2 xl:grid-cols-4'>
              { tickets
                ?.filter((ticket) => ticket.category === category)
                .map((filteredTicket, _index) => (
                  <TicketCard key={ _index } id={ _index } ticket={ filteredTicket } />
                )) }
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default DashBoard;