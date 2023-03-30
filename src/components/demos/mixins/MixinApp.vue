<template>
    <div class="bg-warning">
        <h2>Mixin App</h2>
        <ClickCounter />
        <hr />
        <HoverCounter />
    </div>
</template>


<script>
import ClickCounter from './ClickCounter.vue';
import HoverCounter from './HoverCounter.vue';

export default {
    components: { ClickCounter, HoverCounter }
}
</script>