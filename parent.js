Vue.component('comp-child', {
    template: '<button v-on:click="handleClick">イベント発火</button>',
    methods: {
        // ボタンのクリックイベントのハンドラでchild-eventを発火する
        handleClick: function() {
            this.$emit('childs-event');
        }
    }
})

var app = new Vue({
    el: '#app',
    methods: {
        // childs-eventが発生した
        parentsMethod: function() {
            alert('イベントをキャッチ');
        }
    }
});
