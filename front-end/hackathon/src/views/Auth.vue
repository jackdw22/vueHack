<template>
    <div>
        <h1 v-if="prompt">Validate the product</h1>
        <form v-if="prompt"  @submit.prevent="getProduct">
            <input v-model="blockChainID" placeholder="Product Blockchain ID">
            <br>
            <br>
            <input v-model="location" placeholder="Your location">
            <br>
            <br>
            <button type="submit">Look up</button>
        </form>
        <div v-if="!prompt">
            <h1>This product is real and on the chain!</h1>
            <p><strong>Item: </strong>{{this.Product.name}}</p>
            <p><strong>BlockChain ID: </strong>{{this.Product.blockChain}}</p>
            <p><strong>Brand: </strong>{{this.Product.brand}}</p>
            <p><strong>UPC: </strong>{{this.Product.UPC}}</p>
            <p><strong>Origin: </strong>{{this.Product.origin}}</p>
            <p><strong>Date Created: </strong>{{this.Product.dateCreated}}</p>
            <p><strong>Manufacturer: </strong>{{this.Product.manufacturer}}</p>
            
            <h2>History</h2>
            <ul>
                <li v-for="transaction in this.Product.history.slice().reverse()" :key="transaction.owner">
                    <div>
                    <p>Date: {{transaction.date}}</p>
                    <p>Location: {{transaction.location}}</p>
                    <p>{{transaction.price}}</p>
                    </div>
                </li>
            </ul>
         </div>

    </div>
</template>

<script>
import axios from 'axios';

export default{
    
    name: "auth",
    data(){
        return {
            product: {},
            products: [],
            prompt: true,
            blockChainID: '',
            addHistory: false,
            location: '', 
            date2: '', 
        }
    },
    computed: {
        Product(){
         return this.product; 
        }

    
    },
    created(){
        this.getProducts(); 
    },
    methods: {
        toggleForm(){
            this.prompt = !this.prompt; 
        },
        toggleAddHistory(){
            this.addHistory = !this.addHistory; 
        },
        async getProducts() {
      try {
        let response = await axios.get("/api/tickets");
        this.products = response.data.products;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    getProduct(){
        console.log(this.products)
    for(let i = 0; i < this.products.length; i++){
                if(this.products[i].blockChain == this.blockChainID){
                    this.product = this.products[i]; 
                    console.log('we made it')
                }
                console.log(this.products[i].blockChain);
                console.log(this.blockChainID); 
               }
        this.addTransaction();
        this.prompt = false; 
        
        console.log(this.product)    
    },
    async addTransaction(){
        const date = new Date();
        this.date2 = date.toString(); 

        let transaction = {
            location: this.location,
            date:this.date2
        }
        this.product.history.push(transaction); 
        try{
            await axios.post("/api/tickets/fun", {
                location: this.location,
                date: this.date2,
                blockChain: this.blockChainID,
            });
            this.location = "";
            
            return true
        }catch(error) {
            console.log(error); 
        }

    },
    
}
}
        


</script>

<style scoped>
    ul{
        list-style-type: none;
        width: 80%;  
        margin: auto; 
        padding: 0px; 
        margin-bottom: 20px; 

    }
    li{
        border: 1px solid black;
    }
    li .arrow{
        float:right; 
    }
    button{
        text-align: center;
        background-color: #378bdd; 
        color: white; 
        border-radius: 10px; 
        height: 2.5em;
        padding: 0 30px;
        font-weight: bold; 
    }

</style>