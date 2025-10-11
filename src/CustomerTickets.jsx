import React from 'react';


const CustomerTickets = ({ handleInProgress, card, openedCard }) => {

  return (
    <div class="card w-96 bg-base-100 card-xs shadow-sm" onClick={() => { handleInProgress(card) }}>
      <div class="card-body">
        <div class="flex justify-between gap-x-5">
          <h2 class="card-title" >{card.issueName}</h2>
          <div>
            <p className={` text-center rounded-4xl flex items-center justify-center gap-2 text-sm h-[25px] ${openedCard?.[card.id] ? 'bg-[#F8F3B9] text-[#9C7700] w-[120px] ' : 'bg-[#B9F8CF] text-[#0B5E06] w-[80px]'}`}><div className={`${openedCard?.[card.id]?'w-3 h-3 bg-[#FEBB0C] rounded-full' : 'w-3 h-3 bg-[#0B5E06] rounded-full'}`}></div>{openedCard?.[card.id] ? 'In Progress' : 'Open'}</p>
          </div>
        </div>
        <p>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
        <div class="flex justify-evenly">
          <p>#{card.problemNumber}</p>
          <p
            className={`${card.priority === 'HIGH PRIORITY' ? 'text-red-500' : card.priority === 'MEDIUM PRIORITY' ? 'text-yellow-500' : 'text-green-500'} text-[14px]`}>{card.priority}</p>
          <p >{card.assignedTo}</p>
          <p>🗓️ {card.date}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;


