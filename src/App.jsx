import { Provider, useSelector } from "react-redux";
import "./App.css";
import BookingData from "./components/BookingData/BookingData";

import Navbar from "./components/Navbar/Navbar";
import store from "./redux/store";


function App() {
 const bookingRow = useSelector((state)=> state.booking)

console.log(bookingRow)
  return (
    <Provider store={store}>
      
        <Navbar></Navbar>

        <BookingData></BookingData>
  
    </Provider>
  );
}

export default App;
