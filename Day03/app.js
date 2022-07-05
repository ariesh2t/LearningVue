const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name: '',
        number: '',
        result: 0,
      };
    },
    methods: {
        setName(event) {
            this.name = event.target.value;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
        setNumber(event) {
            this.number = event.target.value;
        },
        addNumber() {
            this.result += this.number*1;
        },
        reduceNumber() {
            this.result -= this.number;
        }
    },
  });
  
  app.mount('#events');
  
  // v-on bat su kien o element