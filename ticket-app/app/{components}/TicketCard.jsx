import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

const TicketCard = () => {
  return (
    <div className='flex flex-col bg-gray-500 hover:bg-gray-400 p-3 m-2 shadow-lg rounded-md'>
      <div className='flex mb-3'>
        <PriorityDisplay />
        <div className='ml-auto'>
          <DeleteBlock />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className='h-px border-0 bg-gray-500 mb-2' />
      <p className='whitespace-pre-wrap'>This is ticket description show in whitespace pre wrap</p>
      <ProgressDisplay />
      <StatusDisplay />
    </div>
  );
};

export default TicketCard;