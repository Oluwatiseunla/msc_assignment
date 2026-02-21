/**
 * Fetch car data and clean it
 */
async function loadData() {
  const carsDataResponse = await fetch(
    "https://storage.googleapis.com/tfjs-tutorials/carsData.json"
  );

  const carsData = await carsDataResponse.json();

  const cleaned = carsData
    .map(car => ({
      mpg: car.Miles_per_Gallon,
      horsepower: car.Horsepower,
    }))
    .filter(car => car.mpg != null && car.horsepower != null);

  return cleaned;
}

async function run() {
  console.log("App started");

  const data = await loadData();
  console.log("Data loaded:", data.length);

  if (data.length === 0) {
    console.error("No data loaded");
    return;
  }

  const values = data.map(d => ({
    x: d.horsepower,
    y: d.mpg,
  }));

  tfvis.render.scatterplot(
    { name: 'Scatter Plot: Horsepower vs MPG' },
    { values },
    { xLabel: 'Horsepower', yLabel: 'MPG', height: 300 }
  );
}

  tfvis.render.scatterplot(
    { name: 'Scatter Plot: Horsepower vs MPG' },
    { values },
    { xLabel: 'Horsepower', yLabel: 'MPG', height: 300 }
  );

  const barChartValues = data.map((d, i) => ({
    index: i,
    value: d.mpg,
  }));

  tfvis.render.barchart(
    { name: 'Bar Chart of MPG Values' },
    barChartValues,
    { height: 300, width: 800 }
  );

  tfvis.render.linechart(
  { name: 'Line Chart: Horsepower vs MPG' },
  { values },
  {
    xLabel: 'Horsepower',
    yLabel: 'MPG',
    height: 400,
    width: 800,
  }
);

  const histData = data.map(d => d.horsepower);

  tfvis.render.histogram(
    { name: "Histogram of Horsepower" },
    histData,
    { maxBins: 20, height: 400 }
  );
}

document.addEventListener('DOMContentLoaded', run);