
import React, {useContext,useState} from 'react';
import { InvoiceContext } from '../context/invoiceContext';
import InvoiceForm from './InvoiceForm';







const Header = () => {

   const {className,setClassName} = useContext(InvoiceContext);
   const [show,setDisplay] = useState(false);
   const onClick = () => setDisplay(true) && setClassName(!className)
    return (
        <div className="header">
        <h1 id={show?"dissapear" : "app-heading"}>Invoice app</h1>
        <p id={show?"dissapear" :"app-description"}>create and send invoices with our application</p>
        <button className={show?"dissapear": "create-invoice-btn"} onClick={onClick} name="newInvoice"><i className="far fa-plus-square"></i> New Invoice</button>
        { show ? <InvoiceForm /> : null }
   </div>
    );
}

export default Header;

