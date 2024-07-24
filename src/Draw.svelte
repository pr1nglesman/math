<script lang="ts">
  import { onMount } from "svelte";

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null;

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let color = "#FFFFFF";

  function chooseColor(event: Event) {
    const target = event.target as HTMLInputElement;
    color = target.value;
  }

  function clear() {
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
  }

  function startDrawing(event: MouseEvent) {
    isDrawing = true;
    [lastX, lastY] = [event.clientX, event.clientY];
  }

  function draw(event: MouseEvent) {
    if (!isDrawing || !ctx) return;

    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(event.clientX, event.clientY);
    ctx.stroke();
    [lastX, lastY] = [event.clientX, event.clientY];
  }

  function stopDrawing() {
    isDrawing = false;
  }

  onMount(() => {
    ctx = canvas.getContext("2d");
  });
</script>

<main>
  <canvas
    bind:this={canvas}
    width={window.innerWidth}
    height={window.innerHeight}
    on:mousedown={startDrawing}
    on:mousemove={draw}
    on:mouseup={stopDrawing}
    on:mouseout={stopDrawing}
    on:blur={stopDrawing}
  ></canvas>
  <p id="color-text">Choose a color</p>
  <input type="color" id="color-picker" on:input={chooseColor}>
  <button id="clear-btn" on:click={clear}>Clear</button>
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
  }

  canvas {
    display: block;
    width: 100vw;
    height: 100vh;
  }

  #color-text {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 18px;
    color: #fff;
  }

  #color-picker {
    position: absolute;
    top: 50px;
    left: 10px;
    width: 75px;
    height: 50px;
    border-radius: 10px;
  }

  #clear-btn {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 18px;
    background-color: rgb(50, 50, 50);
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: 0.5s ease;
  }
</style>
