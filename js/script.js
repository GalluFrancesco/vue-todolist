new Vue({
    el:"#app",
    data:{
        text: "",
        todoList:[
            {
            txt:"Commissione 1",
            done:false
            },
            { 
            txt:"Commissione 2",
            done:true
            },
            { 
            txt:"Commissione 3",
            done:false
            },
            { 
            txt:"Commissione 4",
            done:false
            }
        ]
    },
    methods:{
        fatto: function(i){
            if(this.todoList[i].done)
                return "sbarrato";

            return "";
        },
        rimuovi: function(i){
            this.todoList.splice(i,1);
        },
        aggiungi: function(){
            const obj={txt:`${this.text}`, done:false};
            this.todoList.push(obj);
            this.text="";
        }
    }
})