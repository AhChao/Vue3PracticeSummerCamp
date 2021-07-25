const app = Vue.createApp({
    data() {
        return {
            num1:0,
            num2:0,
            resultText:0,
            calculateHistories : [],
        }
    },
    mounted() {
        if(sessionStorage.getItem("calculateHistories"))
            this.calculateHistories = JSON.parse(sessionStorage.getItem("calculateHistories"));
    },
    methods: {
        plusNum(){
            this.resultText = this.num1 + this.num2;
            this.saveResult(this.num1 + " + " + this.num2 + " = " + this.resultText);
        },
        minusNum(){
            this.resultText = this.num1 - this.num2;
            this.saveResult(this.num1 + " - " + this.num2 + " = " + this.resultText);
        },
        multipleNum(){
            this.resultText = this.num1 * this.num2;
            this.saveResult(this.num1 + " × " + this.num2 + " = " + this.resultText);
        },
        divideNum(){
            this.resultText = this.num1 / this.num2;
            this.saveResult(this.num1 + " ÷ " + this.num2 + " = " + this.resultText);
        },
        saveResult(str){
            var getDataFromSession = JSON.parse(sessionStorage.getItem("calculateHistories"));
            this.calculateHistories = getDataFromSession ? getDataFromSession : []; 
            this.calculateHistories.push(str);
            sessionStorage.setItem("calculateHistories",JSON.stringify(this.calculateHistories));
        },
        clearHistory(){
            this.calculateHistories = [];
            sessionStorage.setItem("calculateHistories",null);
        }
    },
});
app.mount("#app");