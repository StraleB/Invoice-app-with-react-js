import React,{createContext,useState} from 'react';


export const InvoiceContext = createContext();

const InvoiceContextProvider = (props) => {
  const [className, setClassName] = useState(false);
 

  const[yName,setYName] = useState('');
  const[company,setCompany] = useState('');
  const[cName,setCname] = useState('');
  const[cCompany,setcCompany] = useState('');
  const[date,setDate]=useState('');
  const[dueDate,setDueDate]=useState('');
  const[cost,setCost] = useState('');
  const [tax,setTax]= useState('')

    return (
        <InvoiceContext.Provider value={{className,setClassName,company,cCompany,setcCompany,setCompany,dueDate,setDueDate,yName,setYName,cName,setCname,date,setDate,cost,setCost,tax,setTax}}>
            {props.children}
        </InvoiceContext.Provider>
    );
}
export default InvoiceContextProvider;