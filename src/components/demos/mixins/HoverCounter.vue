<template>
    <div class="bg-warning">
        <div @mouseover="increment" class="bg-light">
            Hovers: {{ count }}
        </div>
    </div>
</template>

<script>
import counter from './counter';
export default {
    mixins: [counter]
}
</script>