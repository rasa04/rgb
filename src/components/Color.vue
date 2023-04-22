<template>
    <div class="py-4 grid justify-items-center">
        <label :for="color" class="text-lime-500 text-xl pb-2 uppercase">{{ color }}: {{ doSo }}</label>
        <input 
            :id="color" type="range" min="0" max="255" v-model="index"
            class="w-full h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 my-3"
            :class="'accent-' + color + '-500'"
            @input="changePower"
        >
        <div class="flex space-x-6">
            <button
                @mousedown="set(color, 'inc')" 
                @mouseleave="stopChanging" 
                @mouseup="stopChanging" 
                @touchstart="set(color, 'inc')" 
                @touchend="stopChanging"
                class="inline-block px-8 py-6 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight rounded-lg 
                    hover:bg-black/10 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                ><p class="select-none">+</p></button>
            <button
                @mousedown="set(color, 'dec')"  
                @mouseleave="stopChanging" 
                @mouseup="stopChanging" 
                @touchstart="set(color, 'dec')" 
                @touchend="stopChanging"
                class="inline-block px-8 py-6 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight rounded-lg 
                    hover:bg-black/10 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                ><p class="select-none">-</p></button>
        </div>
    </div>
</template>
<script>

export default {
    props: {
        color: String,
        power: Number
    },

    data () {
        return {
            index: this.power
        }
    },

    computed: {
        doSo(){
            this.index = this.power
            return this.power
        }
    },
    
    methods: {
        set(color, sign) {
            this.$emit('set', color, sign)
        },

        changePower () {
            this.$emit('changePower', this.index)
        },

        stopChanging() {
            this.$emit('clearInterval')
        }
    },
}
</script>