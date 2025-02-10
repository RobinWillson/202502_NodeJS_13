import Link from 'next/link';
import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

const TicketCard = ({ ticket }) => {
  const formatTimeStamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',

    });
  };
  const formatDescription = (description) => {
    let limit = 100;
    return description.length > limit ? `${description.substring(0, limit)}...` : description;
  };
  return (
    <div className='flex flex-col bg-gray-500 hover:bg-gray-400 p-3 m-2 shadow-lg rounded-md'>
      <div className='flex mb-3'>
        <PriorityDisplay priority={ ticket.priority } />
        <div className='ml-auto'>
          <DeleteBlock id={ ticket._id } />
        </div>
      </div>
      <Link href="/" style={ { display: "contents" } }>
        <h4>{ ticket.title }</h4>
        <hr className='h-px border-0 bg-gray-500 mb-2' />
        <p className='whitespace-pre-wrap text-amber-50'>{ formatDescription(ticket.description) }</p>

        {/* this flex-grow will make all card the same size..? */ }
        <div className="flex-grow"></div>

        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs  my-1"> { formatTimeStamp(ticket.createdAt) } </p>
            <ProgressDisplay progress={ ticket.progress } />
          </div>
          <div className="ml-auto  flex items-end">
            <StatusDisplay status={ ticket.status } />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;