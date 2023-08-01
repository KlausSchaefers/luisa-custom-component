# luisa-custom-compomemt

The project shows how to create a custom component in the Luisa framework. Basically on e has to do two things:

1. Create a component, e.g. `src/components/ComplexCustomComponent.vue`

2. Register the component in the `src/main.js`

```js
import Luisa from 'luisa-vue'
import ComplexCustomComponent from './components/ComplexCustomComponent'

createApp(App)
    .use(router)
    .use(Luisa)
    .component('ComplexCustomComponent', ComplexCustomComponent)
    .mount('#app')
```


The component should implement the following props and emits. The viewModel is injected. The base css class can be accessed through the 
`element` property.

```js

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
            let result = 'qux-element '
            if (this.element) {
                result += this.element.cssClass
            }
            return result
        }
    },
    ...
}
```


## Project setup
```
npm install
```


### Download Figma or Quant-UX file
```
npm run download
```


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
