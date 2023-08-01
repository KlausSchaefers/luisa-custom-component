<template>
    <div :class="cssClass + ' myCSSPrefix'">
        <!-- 
            You can access the entire viewModel here. All updates 
            should be synced to the other elements as well.            
        -->
        <input v-model="viewModel.user.name" />

        <button @click="sayHello">Click Me</button> {{message}}
    </div>
</template>
<style lang="scss" >
    /**
    * Overwrite the default styles here. Make Sure you have a stronger selector. 
    * The Luisa on is '.<Screen> .<Component>'.
    *
    * If you use paddings or other attributes that change the width or height, consider
    * Changing the box model to 'border-box'
    */
    .Start .myCSSPrefix.MyCustomComponent {
        background-color: white;
        border: 1px solid red;
        text-align: left;
        padding: 24px;
        box-sizing: border-box;

        input {
            padding: 4px;
            border:1px solid blue;
            width: 100%;
            box-sizing: border-box;
        }
    }
</style>
<script>


export default {
    name: 'ComplexCustomComponent',
    emits: ['update:modelValue', 'qClick', 'click', 'qChange', 'change', 'qKeyPress', 'qFocus', 'qBlur', 'qDesignSystemCallback', 'qScrollTop', 'qViewModelChange'],
    props: {
        'model': {
            type: Object
        },
        'element': {
            type: Object
        },
        'config': {
            type: Object
        }       
    },
    inject: ['viewModel'],
    data: function () {
        return {
            message: ''
        }
    },
    computed: {
        cssClass() {
            /**
             * Luisa will encode some information regarding teh positioning in the CSS,
             * thus it is advisibale to use the genearted CSS class as the basis.
             */
            let result = 'qux-element '
            if (this.element) {
                result += this.element.cssClass
            }
            return result
        },
    },
    components: {
    },
    methods: {
        sayHello() {
            /**
             * Do some custom stuff in here. You can also change the viewModel,
             * fire events to the wrapping Luisa component, or change the route
             * by using the this.$router.push('/OtherScreen.html'). Check that the paths match the 
             * router/index.js file.
             */
            this.message = "Hello " + this.viewModel.user.name
        }
    }
}
</script>