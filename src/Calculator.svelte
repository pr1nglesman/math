<script lang="ts">
  let display = "";

  function appendToDisplay(input: string) {
    display += input;
  }
  function clearDisplay() {
    display = "";
  }

  function calculate() {
    try {
      display = eval(display); 
    } catch (error) {
      display = "Error"; 
    }
  }
</script>

<main>
  <div id="calculator">
    <input id="display" readonly value={display} />
    <div id="keys">
      <button on:click={() => appendToDisplay("+")} class="operator-btn">+</button>
      <button on:click={() => appendToDisplay("7")}>7</button>
      <button on:click={() => appendToDisplay("8")}>8</button>
      <button on:click={() => appendToDisplay("9")}>9</button>
      <button on:click={() => appendToDisplay("-")} class="operator-btn">-</button>
      <button on:click={() => appendToDisplay("4")}>4</button>
      <button on:click={() => appendToDisplay("5")}>5</button>
      <button on:click={() => appendToDisplay("6")}>6</button>
      <button on:click={() => appendToDisplay("*")} class="operator-btn">*</button>
      <button on:click={() => appendToDisplay("1")}>1</button>
      <button on:click={() => appendToDisplay("2")}>2</button>
      <button on:click={() => appendToDisplay("3")}>3</button>
      <button on:click={() => appendToDisplay("/")} class="operator-btn">/</button>
      <button on:click={() => appendToDisplay("0")}>0</button>
      <button on:click={() => appendToDisplay(".")}>.</button>
      <button on:click={calculate}>=</button>
      <button on:click={clearDisplay} class="clear-btn">C</button>
      <button on:click={() => appendToDisplay("(")}>(</button>
      <button on:click={() => appendToDisplay(")")}>)</button>
    </div>
  </div>
</main>

<style>
#calculator {
  font-family: JetBrains Mono, monospace;
  background-color: rgb(0, 0, 0);
  border-radius: 0px;
  max-width: 500px;
  overflow: hidden;
  text-align: center;
  margin-bottom: 0;
  position: absolute;
  bottom: 0;
  font-size: 4rem; 
}

#display {
  width: 100%;
  padding: 0px;
  font-size: 4rem;
  font-family: JetBrains Mono, monospace;
  text-align: left;
  border: none;
  background-color: rgb(0, 0, 0);
  color: white;
  height: 100%;
}

#keys {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 10px;
}

button {
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border: 3px solid white;
  margin: 0px;
  background-color: rgb(50, 50, 50);
  color: white;
  font-size: 3rem;
  font-weight: bold;
  font-family: JetBrains Mono, monospace;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}

button:hover {
  background-color: rgb(0, 0, 0);
  border-radius: 25px;
  box-shadow: 0 0 20px rgb(150, 150, 150);
}

button:active {
  background-color: rgb(150, 150, 150);
}

.operator-btn {
  background-color: rgb(150, 150, 150);
}

.clear-btn {
  background-color: rgb(200, 200, 200);
}

</style>
