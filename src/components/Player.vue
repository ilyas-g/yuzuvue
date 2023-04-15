<script>
export default {
    name: 'PlayerComponent', 
    props: {
        name: String,
        idStartGG: String
    },
}
</script>

<template>
    <div>
        <p>{{ name }}</p>
        <p>{{ idStartGG }}</p>
    </div>
</template>
