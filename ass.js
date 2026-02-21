// TASK 1: Variable arguments multiplication
function multiplyAll(...args) {
    if (args.length === 0) return 0;
    return args.reduce((acc, val) => acc * val, 1);
}

// Log a test to your console (Press F12 in browser to see)
console.log("Multiplication Result (2,3,4):", multiplyAll(2, 3, 4));

// TASK 2: API Call and Visualization
async function runVisualization() {
    const apiURL = "https://jsonplaceholder.typicode.com/users";
    
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        // Transform data: Get Name and the length of the Name
        const chartData = data.map(user => ({
            index: user.username,
            value: user.name.length
        }));

        const container = { name: 'User Name Lengths', tab: 'Charts' };
        
        // Render Bar Chart
        tfvis.render.barchart(container, chartData, {
            xLabel: 'Username',
            yLabel: 'Name Length',
            height: 300
        });

    } catch (err) {
        console.error("API Error:", err);
    }
}