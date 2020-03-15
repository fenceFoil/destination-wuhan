<template>
    <div class="paper-container">
    <textarea class="paper" rows="30" cols="80">
    </textarea>
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

.paper{
  padding: 9em 10em;
  font-size: 3em;
  line-height: 2em;
  overflow: hidden;
  font-family: 'Caveat', cursive;
  background-image: url("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffarm8.staticflickr.com%2F7192%2F6796259354_79b96a7234_o.jpg");
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
</style>
