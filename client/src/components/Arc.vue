<template>
  <div class="arc">
    <div class="fullpage-wrapper">
      <div class="reactor-container">
        <div class="reactor-container-inner circle abs-center"></div>
        <div class="tunnel circle abs-center"></div>
        <div class="core-wrapper circle abs-center"></div>
        <div class="core-outer circle abs-center"></div>
        <div class="core-inner circle abs-center"></div>
        <div class="coil-container">
          <div class="coil coil-1"></div>
          <div class="coil coil-2"></div>
          <div class="coil coil-3"></div>
          <div class="coil coil-4"></div>
          <div class="coil coil-5"></div>
          <div class="coil coil-6"></div>
          <div class="coil coil-7"></div>
          <div class="coil coil-8"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'arc'
  }
</script>

<style>
  body {
    margin: 0;
  }

  .fullpage-wrapper {
    width: 100%;
    height: 100vh;
    display: flex;


  }

  .reactor-container {
    width: 600px;
    height: 600px;
    margin: auto;
    border: 1px dashed #888;
    position: relative;
    border-radius: 50%;
    background-color: #384c50;
    border: 1px solid rgb(18, 20, 20);
    box-shadow: 0px 0px 32px 8px rgb(18, 20, 20), 0px 0px 4px 1px rgb(18, 20, 20) inset;
  }

  .reactor-container-inner {
    height: 71.4%;
    width: 71.4%;
    background-color: rgb(22, 26, 27);
    box-shadow: 0px 0px 4px 1px #52FEFE;
  }

  .circle {
    border-radius: 50%;
  }

  .abs-center {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  .core-inner {
    width: 23.3%;
    height: 23.3%;
    border: 5px solid #1B4E5F;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 10px 7px #52FEFE, 0px 0px 15px 15px #52FEFE inset;
  }

  .core-outer {
    width: 40%;
    height: 40%;
    border: 1px solid #52FEFE;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 12px 7px #52FEFE, 0px 0px 16px 9px #52FEFE inset;
  }

  .core-wrapper {
    width: 60%;
    height: 60%;
    background-color: #073c4b;
    box-shadow: 0px 0px 12px 8px #52FEFE, 0px 0px 14px 5px #52FEFE inset;
  }

  .tunnel {
    width: 73.3%;
    height: 73.3%;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 10px 3px #52FEFE, 0px 0px 10px 8px #52FEFE inset;
  }

  .coil-container {
    position: relative;
    width: 100%;
    height: 100%;

    animation: 3s infinite linear reactor-anim;
  }

  .coil {
    position: absolute;
    width: 10%;
    height: 6.8%;
    top: calc(50% - 218px);
    left: calc(50% - 25px);
    transform-origin: 25px 218px;
    background-color: #073c4b;
    box-shadow: 0px 0px 10px #52FEFE inset;
  }

  .coil-1 {
    transform: rotate(0deg);
  }

  .coil-2 {
    transform: rotate(45deg);
  }

  .coil-3 {
    transform: rotate(90deg);
  }

  .coil-4 {
    transform: rotate(135deg);
  }

  .coil-5 {
    transform: rotate(180deg);
  }

  .coil-6 {
    transform: rotate(225deg);
  }

  .coil-7 {
    transform: rotate(270deg);
  }

  .coil-8 {
    transform: rotate(315deg);
  }

  @keyframes reactor-anim {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>