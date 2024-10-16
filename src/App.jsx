
import React, { useState } from 'react';
import ExperienceLetter from './components/ExperienceLetter';

const App = () => {
  // const [letterDetails, setLetterDetails] = useState({
  //   name: "John Doe",
  //   address: "1234 Main Street, City, Country",
  //   date: new Date().toLocaleDateString(),
  //   bodyContent: "This is the dynamic content of the letter. You can replace it with whatever text you need."
  // });

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <ExperienceLetter
        title="Mr. "
        name="Shaurya Garg"
        designation="Graphic Designer"
        employeeId="PP2003"
        date="12th September 2024"
        fromDate="05th Jan 2024"
        toDate="10th Sep 2024"
      />
    </div>
  );
};

export default App;
