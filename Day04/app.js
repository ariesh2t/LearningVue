const app = Vue.createApp({
    data() {
      return {
        counter: 10,
        name: '',
        text: '',
        confirmedName: ''
      };
    },
    computed: {
      fullname() {
        console.log(123);
        if (this.name === '') {
          return ''
        }
        return this.name + ' ' + 'abc'
      }
    },
    methods: {
      confirmInput() {
        this.confirmedName = this.name
      },
      submitForm() {
        alert(this.text)
      },
      setText(event) {
        this.text = event.target.value;
      },
      setName(event, lastName) {
        this.name = event.target.value;
      },
      add(num) {
        this.counter = this.counter + num;
      },
      reduce(num) {
        this.counter = this.counter - num;
        // this.counter--;
      },
      resetName() {
        this.name = ''
      }
    }
  });
  
  app.mount('#events');