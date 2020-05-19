import React,{ Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import InvoiceContextProvider from './context/invoiceContext';



export default class App extends Component {

  render() {
  return (
    <div className="App">
    <InvoiceContextProvider>
    <Navbar/>
    <Header/>
    </InvoiceContextProvider>
    <footer>
      created by <a href="https://www.linkedin.com/in/straleb/">StraleB</a><br/>
      &copy;2020
    </footer>
    </div>
  );
}
}

