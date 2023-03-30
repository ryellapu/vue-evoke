<template>
    <div class="holder">
        <h3>Style binding in Vue3</h3>
        UserName:{{ state.userName }}
        {{ state.btnState ?'The button is disabed':'The button is Active' }}
        <button v-bind:disabled="state.btnState" class="btn btn-primary">Login Button</button>

        <div v-bind:class="{alert:state.showAlert}" v-show="state.showAlert">Received Payment.Thanks</div>
        <div v-bind:style="{backgroundColor:state.bgColor,width:state.bgWidth,height:state.bgHeight}">We are launching new products soon.....</div>
    </div>
</template>

<script>
export default {
    setup() {
        const state = {
            userName: 'sriram',
            btnState: false,
            showAlert: true,
            bgColor: 'yellow',
            bgWidth: '100%',
            bgHeight: '45px'
        }

        return { state }
    }
}
</script>

<style scoped>
.holder {
    background: lightpink;
    text-align: left;
    color: brown;
    border: 1px solid red;
    border-radius: 30px;
    width:90%;
    height:500px;
    padding: 1rem;
}
.alert {
    background-color: orange;
    color:green;
}

</style>