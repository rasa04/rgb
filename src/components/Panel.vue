<template>
    <div id="panel" class="select-none font-mono p-5 px-5 rounded-xl backdrop-invert bg-gradient-to-r from-yellow-900/[.70] to-blue-900/[.70] shadow-lg shadow-red-500">
        <color
            @set="set" @clearInterval="clearInterval"
            @change-power="(power) => red = power" :power="parseInt(red)" color="red"></color>
        <color
            @set="set" @clearInterval="clearInterval"
            @change-power="(power) => green = power" :power="parseInt(green)" color="green"></color>
        <color
            @set="set" @clearInterval="clearInterval"
            @change-power="(power) => blue = power" :power="parseInt(blue)" color="blue"></color>

        <div 
            class="grid justify-items-center 
            bg-gradient-to-r from-green-500/50 to-blue-500/50 
            text-white rounded-lg hover:from-pink-500 hover:to-yellow-500 transition duration-150 ease-in-out"
        >
            <button class="py-4 w-full text-emerald-100" @click="copyRGB" id="copyRGB">{{ background }}</button>
        </div>
    </div>
</template>

<script>
    import Color from "./Color.vue";

    export default {
        components: {
            Color
        },

        data(){
            return {
                red: 35,
                green: 50,
                blue: 70,
                mi: null
            }
        },

        computed: {
            background() {
                return `rgb(${this.red}, ${this.green}, ${this.blue})`;
            },
        },

        methods: {
            copyRGB() {
                let text = document.getElementById('copyRGB').innerHTML;
                navigator.clipboard.writeText(text);
                this.$emit('copied')
            },
            
            set(color, sign) {
                clearInterval(this.mi)
                this.mi = setInterval(() => {
                    if(eval(`this.${color}`) < 255 && sign === 'inc') eval(`this.${color}++`)
                    if(eval(`this.${color}`) > 0 && sign === 'dec') eval(`this.${color}--`)
                }, 70)
            },

            clearInterval() {
                clearInterval(this.mi)
            }
        },

        watch: {
            red(newValue) {
                document.getElementById("color").style.backgroundColor = `rgb(${newValue}, ${this.green}, ${this.blue})`;
            },
            green(newValue) {
                document.getElementById("color").style.backgroundColor = `rgb(${this.red}, ${newValue}, ${this.blue})`;
            },
            blue(newValue) {
                document.getElementById("color").style.backgroundColor = `rgb(${this.red}, ${this.green}, ${newValue})`;
            },
        },

        mounted() {
            document.getElementById("color").style.backgroundColor = 'rgb(35, 50, 70)'
        }
    }
</script>
