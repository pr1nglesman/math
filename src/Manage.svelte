<script lang="ts">
  let game: boolean = false;
  import App from './App.svelte';
  import Calculator from './Calculator.svelte';
  import Game from './Draw.svelte';
  function toggle() {
    game = !game;
  }
</script>

<style>
  main {
    display: flex;
    font-family: JetBrains Mono;
    justify-content: center;
    overflow: hidden;
  }
  #game-btn {
    position: absolute;
    left: 20px;
    bottom: 20px;
    font-family: JetBrains Mono;
    background-color: rgb(50, 50, 50);
    font-size: 2rem;
    color: white;
    border: 3px solid white;
    border-radius: 50px;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    z-index: 5;
  }
  #game-btn:hover {
    background-color: black;
    box-shadow: 0 0 50px rgb(150, 150, 150);
  }
  #game-btn:active {
    background-color: rgb(150, 150, 150);
  }
</style>

<main>
  <button on:click={toggle} id="game-btn">Draw</button>
  {#if game === false}
    <div id="app">
      <App/>
    </div>
    <div id="calculator">
      <Calculator/>
    </div>
  {/if}
  {#if game === true}
    <Game/>
  {/if}

</main>
