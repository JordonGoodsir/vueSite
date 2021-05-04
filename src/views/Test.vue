<template>
  <div class="testPage">
    <h1>Test page</h1> 

        <div id="test"> 

<div class="container">
      <pixel-board  
      :rows="rowCount"
			:cols="colCount"
			:color="color"
			:clear="deletingState"
		/>   
    </div> 

        <div id="box"></div> 
        <input v-on:change="changeColor" value="#f35e5e" type="color">   
        
        <div class="colorOptions">  
             <i v-on:click="scrollLeft" class="arrow left"></i>
            <div id="colorHolder"> 
             
            
            <div v-for="color in colorPalette" :key="color"> 
              <div class="circle" v-on:click="changeBoxColor" v-bind:style="{backgroundColor: color}" v-bind:color="color"></div>  
            </div> 

            </div> 
            <!-- <button v-on:click="scroll_left">left</button>  -->
            <i v-on:click="scrollRight" class="arrow right"></i> 



        </div> 

        </div>
    
  </div>
</template>   


<script>  

export default { 
  name: "Test", 
  data(){  
    return{
    something:"ye", 
    colorPalette: ["#ea907a","#fbc687","#f4f7c5","#aacdbe","#BEB4C5","#F5BFD2", "#A4CCE3"], 
    rowCount: 60,
		colCount: 80,
		color: "#ea907a",
		deletingState: false
    } 

  }, 
  methods:{  
  changeColor: function (event){ 
      console.log(event.target.value)   
      document.getElementById("box").style.backgroundColor = event.target.value 
    }, 
    onScroll: function (event) { 
      console.log(event) 
      console.log("hello")
    },
    scrollLeft() {
  let content = document.getElementById("colorHolder")
    content.scrollLeft -= 115;  
         }, 
    scrollRight() {
  let content = document.getElementById("colorHolder") 
  

    content.scrollLeft += 115; 
     }, 
     changeBoxColor (event) { 
      document.getElementById("box").style.backgroundColor = event.target.attributes.color.value 
      this.color = event.target.attributes.color.value 
     }


 
  }, 
  components: {
      
    },
}


</script>


