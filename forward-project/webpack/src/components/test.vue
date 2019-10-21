<template>
    <button
    class="el-button"
	:class="[
    type ? 'el-button--'+type : ''
	]
	"
	>
	</button>
</template>
<script>
    export default {
        inject: {
            sssss: {
                from: 'elForm',
                default: 'sss'
            }
        },
        props: {
            type: {
                type: String,
                default: 'default'
            },
            size: String
        },
        created() {
            console.log(this.sssss)
        },
    }
</script>

<style lang="scss" scoped>

</style>