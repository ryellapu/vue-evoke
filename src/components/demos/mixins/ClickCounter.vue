<template>
    <div class="bg-warning">
        <button class="btn btn-success" @click="increment">
            Clicks: {{ count }}
        </button>
    </div>
</template>


<script>
import counter from './counter';
export default {
    mixins:[counter]
}
</script>