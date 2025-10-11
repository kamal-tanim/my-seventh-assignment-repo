import React from 'react';



const TaskStatus = ({ clickedCard, handleResolved, resolvedCard }) => {
    return (
        <div>
            <ul  className='space-y-2'>
                {clickedCard.length === 0 &&(<div className='text-[#627382]'>Select a ticket to add to Task Status</div>)}
                {clickedCard.map(card => <div className='max-sm:flex flex-col justify-center items-center'>
                <div class="card w-80 bg-base-100 card-xs shadow-sm">
                    <div class="card-body">
                        <h2 class="card-title text-center" >{card.issueName}</h2>
                        <div class="justify-end card-actions">
                            <button onClick={() => handleResolved(card)} class="btn btn-success w-full">Complete</button>
                        </div>
                    </div>
                </div>
            </div>)}    
            </ul>
            <div className='mt-10 space-y-4'>
                <h3 className='font-semibold text-[24px] max-sm:text-center'>Resolved Task</h3>
                {resolvedCard.length === 0 && (<div className='text-[#627382]'>No resolved tasks yet.</div>)}
                <ul className='space-y-2 max-sm:flex flex-col justify-center items-center'>
                    {resolvedCard.map(card => <div className='bg-[#E0E7FF] w-80 h-[50px] content-center text-center rounded-2xl font-medium '>{card.issueName}</div>)}
                </ul>
            </div>
        </div>
    );
};

export default TaskStatus;



