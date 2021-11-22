<template>
  <div class="home">
    <img alt="Vue logo" src="../../public/assets/home.png" />
    <div class='wrapper'>
        <div class="buttons">
            <router-link to="/addProduct" class="button">
              <p>Add Product</p>
           </router-link>
           <router-link to="/authenticate" class="button">
              <p>Product History</p>
            </router-link>
        </div>

    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

};
</script>

<style scoped>
div{
  background-color: #378bdd;
}
 img{
   width: 100%;
   max-width: 1500px;
 }
  .wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.buttons{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}


.button{
  margin: 10px;
  width: 300px;
  border-color: white;
  border: solid 1px;
  border-radius: 10px; 
  background-color: white; 
  text-decoration: none;
  color: #378bdd;
  font-size: 20px; 
  font-weight: bold; 
}

.button:hover{
  background-color: #378bdd;
  color: white; 
  border-width: 3px; 
}




  
</style>