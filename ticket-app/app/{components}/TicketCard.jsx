import Link from 'next/link';
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
      <Link href="/" style={ { display: "contents" } }>
        <h4>Ticket Title</h4>
        <hr className='h-px border-0 bg-gray-500 mb-2' />
        <p className='whitespace-pre-wrap'>This is ticket description show in whitespace pre wrap</p>

        {/* this flex-grow will make all card the same size..? */ }
        <div className="flex-grow"></div>


        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs  my-1"> createdDateTime </p>
            <ProgressDisplay />
          </div>
          <div className="ml-auto  flex items-end">
            <StatusDisplay />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;