<template>
    <div class="bg-info">
        {{ vTitle }}
        <br/>
        <div>
            Name:<input type="text" v-model="name"/>
        </div>
        <p>

            {{ upperName }}
        </p>
        <div>
            <button class="btn btn-primary" @click="increaseAmount(1000)">increaseAmount</button>
        </div>
        <p class="text-danger">Amount:{{ amount }}</p>
    </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue';

//composition api
export default {
    props:{
        title:String
    },
    setup(props) {
        console.log(props.title)
        const vTitle=computed(()=>props.title)
        const name = ref('Murthy')
        const amount = ref(3000)
        const increaseAmount=(amt)=>{
            amount.value+=amt
        }
        const upperName= computed(()=>{
            return `Welcome : ${name.value.toUpperCase()}`

        })
        watch(name,(newValue,oldValue)=>{
            console.log(`newValue:${newValue}---oldValue:${oldValue}`)
        })
        watchEffect(()=>{
            console.log(name.value)
            console.log(amount.value)
        })
        return { name, amount,increaseAmount,upperName,vTitle }
    }
}
</script>