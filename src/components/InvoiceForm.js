import React, {useContext,useState} from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Invoice from './Invoice';
import { InvoiceContext } from '../context/invoiceContext';



const InvoiceForm = () => {

  const invoice = useContext(InvoiceContext)
 const {className,setClassName} = useContext(InvoiceContext);
   const [show,setDisplay] = useState(false);
   const onClick = () => setDisplay(true) && setClassName(!className)

  return (
    <div>
    <Form className={show?"dissapear" :"InvoiceForm"}>
    <h2>From</h2>
      <FormGroup>
      <label htmlFor="yname">Name</label>
      <Input style={{position:'relative'}} name="yname" onChange={e => invoice.setYName(e.target.value)} placeholder="Enter your name"  />
      <Label htmlFor="ycompany">Company</Label>
      <Input name="yname" onChange={e => invoice.setCompany(e.target.value)} placeholder="Name of your company"  />
    </FormGroup>
      <h2 style={{margin:'2em 0'}}>For</h2>
      <FormGroup style={{margin:'-5em 0'}}>
       <Label htmlFor="cname">Name</Label>
       <Input name="cname" style={{position:'relative'}} onChange={e => invoice.setCname(e.target.value)}  placeholder="Name of the customer" />
       <Label htmlFor="ycompany">Company</Label>
       <Input style={{position:'relative'}} name="cname" onChange={e => invoice.setcCompany(e.target.value)}  placeholder="Name of the Company" />
    </FormGroup>
    <FormGroup>
      <Label style={{margin:"4em 0.5em",float:"left"}} htmlFor="date">Date</Label><br/>
      <input style={{margin:"3em -2em",float:"left"}} type="date" onChange={e => invoice.setDate(e.target.value)} name="date"/><br/>
      <Label style={{margin:"-2em -8.8em",float:"left"}}  htmlFor="duedate">Due Date</Label><br/>
      <input style={{margin:"-3em 1em",float:"left"}} type="date" onChange={e => invoice.setDueDate(e.target.value)} name="duedate"/>
      </FormGroup>
 <FormGroup>
 <Label htmlFor="cost">Cost</Label>
   <Input name="cost" style={{position:'relative'}} onChange={e => invoice.setCost(e.target.value)} placeholder="Enter the cost" />
   <Label htmlFor="tax">Taxes</Label>
   <Input name="tax" style={{position:'relative'}} onChange={e => invoice.setTax(e.target.value)} placeholder="Enter the tax value in $" />
 </FormGroup>
 <Button className="submit-invioce" onClick={onClick}>Submit Invoice</Button>
  </Form>
  {show? <Invoice/> : null}
  </div>
  );
}

export default InvoiceForm;
