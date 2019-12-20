
let app;
window.onload = setup;

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

function setup(){
    app = new Vue({
        el: '#app',
        data: {
            message: 'Test!',
            floatMessage: 'hover over',
            seen: true,
            todos: [
                {text: 'one'},
                {text: 'two'}
            ],
            groceryList:[
                {text: 'text1', id:1},
                {text: 'text2', id:2},
                {text: 'text3', id:3}
            ]
        },
        methods: {
            hideTodos(){
                this.seen = !this.seen;
            }
        }
    });
}
