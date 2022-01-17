new Vue({
    el:"#app",
    data:{
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
        }
    }
})