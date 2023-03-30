<template>
    <div class="container bg-success">
        <h2>Child Component- Wish User</h2>
        <h3>Fullname: {{ fullName }}</h3>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    props: {
        firstName: String,
        lastName: String
    },
    setup(props) {
        const fullName = computed(() => `${props.firstName} ${props.lastName}`)
        return { fullName }
    }
}
</script>