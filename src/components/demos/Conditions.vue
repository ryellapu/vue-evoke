<template>
    <div class="bg-light">
        <p v-if="num === 10">The num is 10</p>
        <p v-else-if="num > 0">The num is positive</p>
        <p v-else-if="num < 0">The num is negative</p>
        <p v-else>The num is lie</p>
        <h2 v-if="displayNotice">Notice send by mail of income tax</h2>
        <h2 v-else>IT Paid</h2>
        <p v-for="(val, index) in names" v-bind:key="val">
            {{ index }} {{ val }}
        </p>
        <p v-for="customer in customers" :key="customer.id">
            {{ customer.first }} {{ customer.last }}
        </p>
        <p>Computed Property</p>
        <p v-for="user in legalUsers" :key="user.name">
            {{ user.name }}
            {{ user.age }}
        </p>
    </div>
</template>

<script>
export default {
    // options API
    //name,components, data, computed, watch watchEffect....
    name: "conditions-demo",
    //state
    data() {
        return {
            num: -10,
            displayNotice: false,
            names: ["Ravindra", "Suresh", "Chandra"],
            customers: [
                {
                    id: 1,
                    first: "raja",
                    last: "raghava",
                },
                {
                    id: 2,
                    first: "sahithi",
                    last: "kumari",
                },
            ],
            info: {
                userName: "Tagore",
                blogName: "Learning vue3",
                url: "https://evoke.com/api",
            },
            users: [
                { name: "jaya", age: 34 },
                { name: "prasanna", age: 24 },
                { name: "kumar", age: 54 },
            ],
        };
    },
    computed: {
        legalUsers() {
            console.log('Computed is fired')
            return this.users.filter((i) => i.age > 30);
        },
    },
    components: []
};
</script>

<style scoped></style>
