import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Progress from './Progress'
import CustomerTickets from './CustomerTickets'
import TaskStatus from './TaskStatus'
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Footer from './Footer'


function App() {

  const cardInfo = [
    { id: 1, issueName: "Login Issues - Can't Access Account", status: 'Open', problemNumber: 1001, priority: 'HIGH PRIORITY', assignedTo: 'John Smith', date: '1/15/2024' },

    { id: 2, issueName: 'Payment Failed - Card Declined', status: 'Open', problemNumber: 1002, priority: 'HIGH PRIORITY', assignedTo: 'Sarah Johnson', date: '1/16/2024' },

    { id: 3, issueName: 'Unable to Download Invoice', status: 'In- Progress', problemNumber: 1003, priority: 'MEDIUM PRIORITY', assignedTo: 'Michael Brown', date: '1/17/2024' },

    { id: 4, issueName: 'Incorrect Billing Address', status: 'Open', problemNumber: 1004, priority: 'LOW PRIORITY', assignedTo: 'Emily Davis', date: '1/18/2024' },

    { id: 5, issueName: 'App Crash on Launch', status: 'Open', problemNumber: 1005, priority: 'HIGH PRIORITY', assignedTo: 'David Wilson', date: '1/19/2024' },

    { id: 6, issueName: ' Refund Not Processed', status: 'In- Progress', problemNumber: 1006, priority: 'MEDIUM PRIORITY', assignedTo: 'Sophia Taylor', date: '1/20/2024' },

    { id: 7, issueName: 'Two-Factor Authentication Issue', status: 'Open', problemNumber: 1007, priority: 'HIGH PRIORITY', assignedTo: 'James Anderson', date: '1/21/2024' },

    { id: 8, issueName: 'Unable to Update Profile Picture', status: 'Open', problemNumber: 1008, priority: 'LOW PRIORITY', assignedTo: 'Olivia Martinez', date: '1/22/2024' },

    { id: 9, issueName: 'Billing Inquiry - Incorrect Charge', status: 'In- Progress', problemNumber: 1009, priority: 'MEDIUM PRIORITY', assignedTo: 'Liam Thomas', date: '1/23/2024' },

    { id: 10, issueName: 'Subscription Auto-Renewal', status: 'In- Progress', problemNumber: 1010, priority: 'MEDIUM PRIORITY', assignedTo: 'Isabella Garcia', date: '1/24/2024' },
  ]

  const [inProgress, setInProgress] = React.useState(0);
  const [clickedCard, setClickedCard] = React.useState([]);
  const [openedCard, setOpenedCard] = React.useState(false);
  const [resolved, setResolved] = React.useState(0);
  const [resolvedCard, setResolvedCard] = React.useState([]);


  const sweet = (message) => {
    Swal.fire({
      title: 'Success!',
      position: 'top-end',
      text: message || 'SweetAlert2 is working perfectly!',
      icon: 'success',

    });
  };

  const handleInProgress = (card) => {
    const isExist = clickedCard.find((existingCard) => existingCard.id === card.id);
    if (isExist) {
      toast.warn('This task is already in progress!');
      return;
    }

    setInProgress(inProgress + 1);
    setClickedCard([...clickedCard, card]);
    setOpenedCard({ ...openedCard, [card.id]: !true?.[card.id] });

    sweet('Task moved to In Progress!');
  };
  const handleResolved = (card) => {
    setResolved(resolved + 1);
    setInProgress(inProgress - 1);
    setClickedCard(clickedCard.filter(filteredTask => filteredTask.issueName !== card.issueName));
    setResolvedCard([...resolvedCard, card])

  }


  return (
    <>
      <Navbar></Navbar>
      <Progress inProgress={inProgress} resolved={resolved} ></Progress>f
      <div className="mx-2 lg:flex lg:mx-15 gap-x-6 mt-20">
        <div>
          <h3 className='font-semibold text-[24px] max-sm:text-center'>Customer Tickets</h3>
          <div className='space-y-4  w-auto flex-col justify-items-center lg:grid grid-cols-2 gap-x-6 mt-5 '>{cardInfo.map(card => <CustomerTickets key={card.id} card={card} handleInProgress={handleInProgress} openedCard={openedCard} ></CustomerTickets>)}
          </div>
        </div>

        <div>
          <h3 className='font-semibold text-[24px] max-sm:text-center'>Task Status</h3>
          <div className='mt-5'><TaskStatus resolvedCard={resolvedCard} clickedCard={clickedCard} handleResolved={handleResolved} ></TaskStatus></div>
        </div>
      </div>


        <Footer></Footer>
      <ToastContainer />

    </>

  )
}

export default App
