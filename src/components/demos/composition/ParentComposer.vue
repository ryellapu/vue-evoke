<template>
    <div class="bg-warning container">
        <p>
            First Name: <input type="text" class="form-control" v-model="user.firstName" />
        </p>
        <p>
            Last Name: <input type="text" class="form-control" v-model="user.lastName" />
        </p>
        <div class="bg-info">
            <WishUser :firstName="user.firstName" :lastName="user.lastName" />
        </div>
    </div>
</template>

<script>
//parent component or root component with state
import { ref } from 'vue';
import WishUser from './WishUser.vue';

export default {
    setup() {
        const user = ref({ firstName: "", lastName: "" });
        console.log(user)
        return { user };
    },
    components: { WishUser }
}
</script>