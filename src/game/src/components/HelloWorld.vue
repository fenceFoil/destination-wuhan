<template>
  <div>
    <div id="vignette"/>
    <div id="family">
      <img src="../assets/my-recursive-family.jpg" />
    </div>
    <audio id="lofi-radio" src="../assets/BGM.mp3" autoplay=true loop=true />
    <audio id="heartbeat" src="../assets/heartbeat.mp3" autoplay=true loop=true />
    <div class="paper-container">
    </div>
    <textarea id="paper" v-model="paperText" class="paper" rows="30" cols="80" @input="typed">
    </textarea>
    <div class="phone" v-drag>
      <img src="../assets/iphone.gif" />
    </div>
    <div id="cup" v-drag>
      <button @mousedown="coffeeCupButtonDown" @mouseleave="coffeeCupButtonLeave">
        <img src="../assets/coffee-cup.png" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function(){
    return {
      stamina: 100.00042069+2/3,
      time: null,
      staminaTimer: null,
      paperText: ""
    }
  },
  methods: {
    coffeeCupButtonDown: function(){
      if (this.staminaTimer) return;
      this.staminaTimer = setInterval(this.updateStamina, 200);
    },
    coffeeCupButtonLeave: function(){
      clearInterval(this.staminaTimer)
      this.staminaTimer = null;
    },
    updateStamina: function(){
      this.stamina += 1
      console.log(`Stamina: ${this.stamina}`)

    },
    typed: function(){
      var Typo = require("typo-js");
      var dictionary = new Typo("en_US", false, false, { dictionaryPath: "../dictionaries" });
      // var dictionary = new Typo('en_US');
      console.log(this.paperText.split(" "))
      const split = this.paperText.split(" ")
      const incorrectly_spelled = split.map(x => dictionary.check(x));
      console.log(incorrectly_spelled)
      // alert()


    }
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

.phone {
  
  position: absolute;
  top: 400px;
  left: 100px;
}

.phone img {
  width: 240px;
  height:  auto;
  transform: rotate3d(1, 1, 1, -12deg);
}

.paper-background {

}

.paper{
  /*transform: scale3d(.25,.25,.25);*/
  position:absolute;
  /*top:20%;
  left:20%;*/
  top: -120vh;
  left: -12vw;
  z-index: 50;
  
  transform: rotate3d(1, 1, 1, -45deg) scale3d(0.25, 0.25, 0.25);
  transition: 1s ease-in-out;
}

.paper:focus {
  top: -120vh;
  left: -25vw;
  transform: scale3d(0.4, 0.4, 0.4);
  transition: 1s ease-in-out;
}

#cup {
  position:absolute;
  top:10%;
  z-index: 9;
  width: 250px;
  height: 250px;
}

#cup button {
  background: transparent;
  visibility: hidden;
  border: none !important;
  font-size:0;
}

#cup img {
  width: 250px;
  height: 250px;
  visibility: visible;
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

#family img {
  position: absolute;
  top: 20vh;
  left: 80vw;
  width:30vh;
  height:30vh;
  z-index:4;
  transform: rotate3d(1, 0, 1, +25deg);
}
</style>
