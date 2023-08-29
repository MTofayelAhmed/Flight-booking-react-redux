import "./App.css";
import BookingData from "./components/BookingData/BookingData";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <body>
      <Navbar></Navbar>

      <section>
        {/* <!-- Input Data --> */}

        <BookingData></BookingData>
        {/* <!-- Preview Data --> */}
        <div className="table-container">
          <table className="booking-table">
            <thead className="bg-gray-100/50">
              <tr className="text-black text-left">
                <th>Destination From</th>
                <th>Destination To</th>
                <th className="text-center">Journey Date</th>
                <th className="text-center">Guests</th>
                <th className="text-center">Class</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody
              className="divide-y divide-gray-300/20"
              id="lws-previewBooked">
             
       


            </tbody>
          </table>
        </div>
      </section>
    </body>
  );
}

export default App;
