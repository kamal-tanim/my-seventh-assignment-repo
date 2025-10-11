import React from 'react';

const Footer = () => {
    return (
       <div>
         <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content justify-between p-10  mt-20">
            <nav className='w-70'>
                <h6 className="footer-title">CS — Ticket System</h6>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Our Mission</a>
                <a className="link link-hover">Contact Saled</a>
            </nav>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Products & Services</a>
                <a className="link link-hover">Customer Stories</a>
                <a className="link link-hover">Download Apps</a>
            </nav >
            <nav>
                <h6 className="footer-title">Information</h6>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Terms & Conditions</a>
                <a className="link link-hover">Join Us</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social Links</h6>
                <a className="link link-hover">@CS — Ticket System</a>
                <a className="link link-hover">@CS — Ticket System</a>
                <a className="link link-hover">@CS — Ticket System</a>
                <a className="link link-hover">support@cst.com</a>
            </nav>
        </footer>
        <footer className='text-center p-3 bg-black text-white border-t '>
            © 2025 CS — Ticket System. All rights reserved.
        </footer>
       </div>
    );
};

export default Footer;