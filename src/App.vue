<script>
import Panel from "./components/Panel.vue"
import CopyComplete from "./components/CopyComplete.vue"

export default {
    components: {
        Panel,
        CopyComplete
    },

    data() {
        return {
            sign: false
        }
    },
    
    methods: {
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        
        async copied() {
            this.sign = true
            await this.sleep(3000)
            this.sign = false
        }
    }
}
</script>

<template>
    <copy-complete v-show="sign"></copy-complete>
    <panel @copied="copied"></panel>
</template>
