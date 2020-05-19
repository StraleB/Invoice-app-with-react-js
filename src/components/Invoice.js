import React, { useContext} from 'react'
import { InvoiceContext } from '../context/invoiceContext';




const Invoice = () => {
    const invoice = useContext(InvoiceContext);

    return (
        <div className="invContainer">
             <h2 align="right">
            INVOICE<br/>
            <strong>#224343</strong>
            </h2>
            <section clasName="textSection">
              <p>From</p>
            <p>Name: {invoice.yName}</p>
            <p>Company:{invoice.company}</p>
            <hr/>
            <p>For</p>
            <p>Name: {invoice.cName}</p>
            <p>Company:{invoice.cCompany}</p>
            <hr/>
            <p>Date: {invoice.date}</p>
            <p>Due Date:{invoice.dueDate}</p>
            <hr/>
            <p>Cost: {invoice.cost}</p>
            <p>Tax:{invoice.tax}</p>
            <hr/>
    <p>Total cost:<strong>{parseInt(invoice.cost)+ parseInt(invoice.tax)}</strong></p>
      
       </section>         
            <button type="button" name="downloadbutton">Download Invoice</button>
            </div>
    )
}

export default Invoice;

