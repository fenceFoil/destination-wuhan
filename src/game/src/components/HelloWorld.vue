<template>
  <div>
    <div id="vignette"></div>
    <!--<audio id="heartbeat" src=-->
    <div class="paper-container">
    <textarea class="paper" rows="30" cols="80">
    </textarea>
    </div>
    <div class="cup-container">
      <img src="../assets/coffee-cup.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.paper-background {
  
  
}

.paper-container{
  transform: scale3d(.25,.25,.25);
  position:absolute;
  top:-20%;
  left:0%;
  right:-20%;
  bottom:0%;
}

.cup-container {
  position:absolute;
  top:10%;
}

.cup-container img {
  width: 25%;
  height: 25%;
}

.paper{
  padding: 9em 10em;
  font-size: 3em;
  line-height: 2em;
  overflow: hidden;
  font-family: 'Calligraffitti', cursive;
  background-image: url("../assets/paper.png");
  background-color: transparent;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  
  opacity:1;
  transform: rotate3d(1, 1, 1, -45deg);

/*  -moz-animation-name: spin;
    -moz-animation-duration: 4000ms;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;

    @-moz-keyframes spin { 
        from { 
            -moz-transform: rotate3d(1, 0, 1, 0deg);
        } to { 
            -moz-transform: rotate3d(0, 1, 1, 360deg);
        }
    }
    @keyframes spin { 
        from { 
            transform: rotate3d(1, 0, 1, 0deg);
        } to { 
            transform: rotate3d(0, 1, 1, 360deg);
        }
    }*/
}

  #vignette {
    opacity:0.8;
    position: fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    z-index:1000;  
    background-image: radial-gradient(rgba(255, 255, 255, 0) 70%, black);
    pointer-events: none;
  }
</style>
