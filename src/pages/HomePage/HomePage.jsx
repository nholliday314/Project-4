import HomeChart from "../../components/HomeChart/HomeChart";
import Chart from "chart.js/auto";
import { CategoryScale, Title, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { getUser } from "../../utilities/users-service";
import * as pulsesService from '../../utilities/pulses-service'
import './HomePage.css'

Chart.register(CategoryScale, Title, Legend);

export default function HomePage() {
  const [pulses, setPulses] = useState([]);
  const currentUser = getUser()

  const fetchPulses = async () => {
    try {
      const pulsesResponse = await pulsesService.getPulses(currentUser._id)

      // Update the state with the fetched data
      setPulses(pulsesResponse);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchPulses();
  }, []); // Empty dependency array ensures the effect runs only once (on mount)


  return (
    <div className="pulse-graph">
      <h1>Day in My life</h1>
      
      {
        pulses && pulses.length > 0 && <HomeChart chartData={pulses} />
      }
    </div>

  );
}