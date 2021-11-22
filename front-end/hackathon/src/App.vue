<template>
  <div id="app">
    <nav id="hamnav" class="pure-menu pure-menu-horizontal">
      <router-link to="/" id ="logo">
          <img src='../public/assets/BCLogo2.png' alt="logo">
      </router-link>
      <label for="hamburger">&#9776;</label>
      <input type="checkbox"  id="hamburger"/>

      <div id="hamItems">
           <router-link to="/addProduct" class="pure-menu-link">
              <p id="blue">Add Product</p>
           </router-link>
           <router-link to="/authenticate" class="pure-menu-link">
              <p id="blue">Check Products</p>
            </router-link>
      </div>
    </nav>
    <router-view />
    <div class='footer'>
      <div class = 'footPart'>
        <p>BrandChain</p>
        <p>#111-222-3333</p>
      </div>
      <div class='footPart'>
        <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
   
    </div>
  </div>
  </div>
</template>

<style>
#logo img{
  width: 60px;
  margin-top: 15px;  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 30px;

}
nav{
  background-color: lightgray;
}

#nav a {
  font-weight: bold;
  color: #378bdd;
}
#blue{
  color: #378bdd; 
  font-size: 15pt; 
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#hamnav {
  width: 100%;
  display:flex;
  justify-content: space-between;
  background-color: #c3c3c3;

}

#hamItems{
  display:flex;
  justify-content: flex-start;
}

#hamitems a {
  flex-grow: 1;
  flex-basis: 0;
  padding: 10px;
  color: white;
  text-decoration: none;
  text-align: center;
}

#hamnav label, #hamburger {
  display:none;
}

@media screen and (max-width: 768px){
  #hamitems a{
    box-sizing: border-box;
    display:block;
    width: 100%;
    border-top: 1px solid black;
  }
  #hamnav label{
    display: inline;
    color: black;
    font-style: normal;
    font-size:1.2em;
    padding: 15px;
  }
  #hamItems{
    display:none;
  }
  #hamnav input:checked ~ #hamItems{
    display: block;
  }


}
#logo{
    text-decoration: none;
    display:inline;
    margin-left: 10px;
  }

  i{
    margin-top: 15px;
    font-size: 13pt;
  }
  .footPart{
    text-align:center; 
    margin: auto; 
    color: white; 
  }

  .footPart a{
    color: inherit;
    width: 20px; 
  }

.footer, div.footer{
 background: #378bdd; 
 margin: 0; 
 padding: 0; 
 border-top:5px solid white; 
 
}
.footer p{
  margin-top: 0; 
  padding-top: 10px; 
}
  @media (min-width: 700px) {
  .footer{
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 20px;
    margin: 20px;
  }
}

</style>


