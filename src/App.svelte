<script lang="ts">
  let mean: number = 0;
  let median: number = 0;
  let mode: number | number[] = 0;
  let iqr: number = 0;
  let sortedArray: number[] = [0];

  function calculateMean(input: number[]): number {
    if (input.length === 0) {
      return 0;
    }

    const sum = input.reduce((acc, num) => acc + num, 0);
    return sum / input.length;
  }

  function calculateMedian(sortedInput: number[]): number {
    if (sortedInput.length === 0) {
      return 0;
    }

    const mid = Math.floor(sortedInput.length / 2);
    return sortedInput.length % 2 !== 0
      ? sortedInput[mid]
      : (sortedInput[mid - 1] + sortedInput[mid]) / 2;
  }

  function calculateMode(input: number[]): number | number[] {
    if (input.length === 0) {
      return 0;
    }

    const frequency: Record<number, number> = {};
    let maxFreq = 0;

    input.forEach((num) => {
      frequency[num] = (frequency[num] || 0) + 1;
      maxFreq = Math.max(maxFreq, frequency[num]);
    });

    const modes = Object.keys(frequency)
      .filter((num) => frequency[+num] === maxFreq)
      .map(Number);

    return modes.length === 1 ? modes[0] : modes;
  }

  function calculateIQR(sortedInput: number[]): number {
    if (sortedInput.length === 0) {
      return 0;
    }

    const mid = Math.floor(sortedInput.length / 2);
    const q1 = calculateMedian(sortedInput.slice(0, mid));
    const q3 = calculateMedian(
      sortedInput.length % 2 === 0
        ? sortedInput.slice(mid)
        : sortedInput.slice(mid + 1)
    );

    return q3 - q1;
  }

  function handleSubmit() {
    const inputElement = document.getElementById("text") as HTMLInputElement;
    const inputString = inputElement.value;
    const inputArray = inputString
      .split(",")
      .map(Number)
      .filter((n) => !isNaN(n));

    if (inputArray.length === 0) {
      sortedArray = [];
      mean = median = mode = iqr = 0;
      return;
    }

    sortedArray = [...inputArray].sort((a, b) => a - b);
    mean = calculateMean(inputArray);
    median = calculateMedian(sortedArray);
    mode = calculateMode(inputArray);
    iqr = calculateIQR(sortedArray);
    inputElement.value = '';
  }
</script>

<main>
  <h1 id="title">Lazy Math</h1>
  <div id="display">
    <form id="math-input" on:submit|preventDefault={handleSubmit}>
      <input
        type="text"
        id="text"
        placeholder="Separate with ,"
        autocomplete="off"
      />
      <button id="calculate">Calculate</button>
    </form>
  </div>
  <div id="results">
    <p>Sorted Array:</p>
    <p>{sortedArray}</p>
    <p>Mean: {mean}</p>
    <p>Median: {median}</p>
    <p>Mode: {Array.isArray(mode) ? mode.join(", ") : mode}</p>
    <p>IQR: {iqr}</p>
  </div>
</main>

<style>
  #title {
    display: flex;
    justify-content: center;
    font-size: 4rem;
  }
  #display {
  background-color: rgb(50, 50, 50);
  font-size: 3.5rem;
  text-align: center;
  border-radius: 100px;
  border: 5px solid white;
  color: white;
  font-family: "JetBrains Mono", monospace;
  transition: 0.5s ease-in-out;
  margin: 25px; 
  overflow: visible; 
}

  #display:hover {
    box-shadow: 0 0 50px rgb(150, 150, 150);
  }

  #text {
    border-radius: 50px;
    height: 50px;
    text-align: center;
    font-family: "JetBrains Mono", monospace;
    background-color: rgb(150, 150, 150);
    font-style: italic;
    font-size: 1.5rem;
    border: 3px solid white;
    transition: 0.5s ease-in-out;
    color: white;
  }
  #text:hover {
    border-radius: 10px;
    background-color: rgb(50, 50, 50);
  }
  #calculate {
    width: 50%;
    height: 40px;
    border-radius: 100px;
    font-size: 1.5rem;
    font-family: "JetBrains Mono", monospace;
    background-color: rgb(150, 150, 150);
    color: white;
    border: 3px solid white;
    transition: 0.25s ease-in-out;
  }
  #calculate:hover {
    border-radius: 10px;
    background-color: rgb(50, 50, 50);
    cursor: pointer;
  }
  #calculate:active {
    background-color: rgb(200, 200, 200);
  }
  #results {
    text-align: center;
    background-color: rgb(50, 50, 50);
    border: 5px solid white;
    margin: 10px;
    border-radius: 50px;
    transition: 0.5s ease-in-out;
  }
  #results:hover {
    background-color: rgb(0, 0, 0);
  }
</style>