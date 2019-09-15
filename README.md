# toasters

> Toast alerts (initially developed for Vue.js with a material-design style)

## Installation

`npm install -S  --production toasters`

## Usage

```
<template>
    <toast></toast>
</template>

<script>
    import { Toast } from 'toasters';

    export default {
        ready() {
            new Toast({ content: "This is a test for content", persistant: true, position: {
                horizontal: "right",
                vertical: "bottom"
            }});
        }
    }
</script>
```

<!--See [example](https://github.com/atjonathan/vue-roaster/tree/master/example) folder for more details.-->

## Contributing

``` bash
# install dependencies
npm install

# serve example with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```