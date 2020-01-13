// index.js
// 20200110 test comment

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loades this page on ' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    message: 'Now you see me',
    seenTrue: true,
    seenFalse: false
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [{ text: 'one' }, { text: 'two' }, { text: 'three' }]
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split(' ')
        .reverse()
        .join(' ');
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});

// todo-item component
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
});
