<template>
    <div>
       <h1 v-if="creating">Add Products to the Chain!</h1>
       <div class='wrapper'>
           <div class='objects'>
                <div class="coolPic object" v-if="creating">
                    <img src="../../public/assets/logoToChain.png" alt="">
                </div>
        <form v-if="creating" @submit.prevent="addProduct" class = 'object'>
            <p class ="inputTitle">Product Name</p>
            <input v-model="name" placeholder="Airpods" required>
            <br/>
            <br/>
            <p class ="inputTitle">Brand</p>
            <input v-model="brand" placeholder="Apple" required>
            <br/>
            <br/>
            <p class ="inputTitle">Location</p>
            <input v-model="location" placeholder="China" required>
            <br/>
            <br/>
            <p class ="inputTitle">Manufacturer</p>
            <input v-model="manufacturer" placeholder="China LLc" required>
            <br/>
            <br/>
            <button type="submit">Add</button>
        </form>
        <div v-if="created" >
                <h1>Success</h1>
                <p>Your product is on the chain</p>
                <p>The blockChain ID is {{blockChain}}</p>
                <p>Here is your Unique code</p>
                <img src="../../public/assets/code.png" alt="" id="code">
                <br>

            
            <button @click="toggleForm()" id="another">Add Another Product</button>
        </div>
    </div>
    </div>
    </div> 
</template>

<script>
import axios from 'axios';

export default{
    
    name: "add",
    data() {
        return{
            creating: true,
            created: false, 
            name: '',
            brand: '',
            dateCreated: '',
            blockChain: '',
            location: '', 
            manufacturer: '',
            
        }
    },
    methods: {
        toggleForm(){
            this.creating = !this.creating;
            this.created = !this.created;
            this.blockChain = ''; 
        },
        getChain(){
            this.blockChain = (Math.random() * 10)  * Math.random() * 10; 
        },
        async addProduct(){
            this.getChain(); 
            const date = new Date(); 
            this.dateCreated = date.toString(); 
            try{
                await axios.post("/api/tickets", {
                    name: this.name,
                    brand: this.brand,
                    dateCreated: this.dateCreated,
                    blockChain: this.blockChain, 
                    location: this.location,
                    manufacturer: this.manufacturer,
                    origin: this.location
                });
                this.name = "",
                this.brand = "",
                this.dateCreated = "",
                this.creating = false; 
                this.created = true; 
                return true; 
            } catch (error) {
                console.log(error); 
            }

        },
    }
}
        


</script>

<style scoped>
    .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .objects{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    #code{
        width: 10%; 
    }
    button{
        text-align: center;
        margin-left: 45%;  
        background-color: #378bdd; 
        color: white; 
        border-radius: 10px; 
        height: 2.5em;
        padding: 0 30px;
        font-weight: bold; 
       
    }
    #another{
        margin: 0; 
    }



    div{
        width: 95%;
        margin: auto; 
    }
    form{
        margin: auto; 
        float: right;
        width: 50%;
        
    }
    .coolPic{
        width: 50%; 
        text-align: center;
    }
    .coolPic img{
        width:75%;  
        margin: 0 auto; 

    }
    h1{
        color: #378bdd;
       
    }
    .inputTitle{
        text-align: left; 
        margin-bottom: 5px; 
        margin-left: 9%;
        font-weight: Bold; 


    }
    form input{
        width: 80%
    }
</style>
