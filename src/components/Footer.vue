<template>
    <div class="footer">
        <div class="footer-text">Copyright reserved to Evoke Technologies</div>
    </div>
</template>

<script>
export default {
    name: "footer-component",
}
</script>

<style scoped>
.footer {
    background-color:#161538;
    color: #fff;
    display: flex;
    padding: 0.75rem;
    justify-content: center;
    margin-bottom: 0;
    position: absolute;
    bottom: 0;
    width: 100%;
}
.footer-text {
    font-size: 0.85rem;
}
</style>