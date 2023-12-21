import { Bar } from "react-chartjs-2";


const HomeChart = ({ chartData }) => {
    console.log('chartData', chartData)

    return (
        <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>Pulse Check</h2>
            {
                chartData && chartData.length > 0 && <Bar
                    data={{
                        labels: chartData.map((pulse) => pulse.date),
                        datasets: [{
                            // barPercentage: 0.5,
                            // barThickness: 6,
                            // maxBarThickness: 8,
                            // minBarLength: 2,
                            data: chartData.map((pulse) => pulse.rating),
                            backgroundColor: chartData.map((pulse) => {
                                if (pulse.rating === 1) {
                                    return 'rgba(226,64,59,0.5)'
                                } else if (pulse.rating === 2) {
                                    return 'rgba(236,101,79,0.5)'
                                } else if (pulse.rating === 3) {
                                    return 'rgba(248,196,61,0.5)'
                                } else if (pulse.rating === 4) {
                                    return 'rgba(159,205,53,0.5)'
                                } else if (pulse.rating === 5) {
                                    return 'rgba(92,174,42,0.5)'
                                }
                            }),
                            borderColor: chartData.map((pulse) => {
                                if (pulse.rating === 1) {
                                    return 'rgba(226,64,59)'
                                } else if (pulse.rating === 2) {
                                    return 'rgba(236,101,79)'
                                } else if (pulse.rating === 3) {
                                    return 'rgba(248,196,61)'
                                } else if (pulse.rating === 4) {
                                    return 'rgba(159,205,53)'
                                } else if (pulse.rating === 5) {
                                    return 'rgba(92,174,42)'
                                }
                            })
                        }]
                    }}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "My Pulses"
                            },
                            legend: {
                                display: false
                            }
                        }
                    }}
                />
            }

        </div>
    );
};

export default HomeChart