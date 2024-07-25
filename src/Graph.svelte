<script lang="ts">
  import { onMount } from 'svelte';
  import { Chart, type ChartConfiguration } from 'chart.js';

  let chart: Chart;
  let userInput = '';
  let data: number[] = [];
  let labels: string[] = [];

  const updateChart = () => {
    data = userInput.split(',').map(Number);
    labels = data.map((_, i) => `Label ${i + 1}`);
    
    if (chart) {
      chart.data.datasets[0].data = data;
      chart.data.labels = labels;
      chart.update();
    }
  };

  onMount(() => {
    const ctx: any = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d');

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            label: 'User Data',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    chart = new Chart(ctx, config);
  });
</script>

<main>
  <input
    type="text"
    placeholder="Enter comma-separated values"
    bind:value={userInput}
    on:input={updateChart}
  />
  <canvas id="myChart"></canvas>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f8f9fa;
  }

  input {
    margin-bottom: 20px;
    padding: 10px;
    font-size: 1rem;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  canvas {
    max-width: 100%;
    max-height: 400px;
  }
</style>
