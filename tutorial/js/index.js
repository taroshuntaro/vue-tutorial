// index.js

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
