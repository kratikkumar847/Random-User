const app = Vue.createApp({
    
    data(){
        return {
            firstName : 'John',
            lastName : 'Doe',
            email : 'john@gmail.com',
            gender : 'male',
            picture : 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async changeUser (){
            const res= ''
            const data = await fetch('https://randomuser.me/api/')
            .then((data1) => {return data1.json();})
            .then((data) =>{
                console.log(data.results[0])
            this.firstName =data.results[0].name.first
            this.lastName=data.results[0].name.last
            this.email=data.results[0].email
            this.gender=data.results[0].gender
            this.picture=data.results[0].picture.large
            })
            .catch((e)=>{
                console.log("Error This Time" , e)
            })


            
        }   
    }
})

app.mount('#app')