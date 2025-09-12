# Vue 3 Loader Module

Vue 3 loader modul sa Vuetify 3 i Vuex 4 podrškom.

## Instalacija

```bash
npm install loader-module-vue3
```

## Korišćenje

### 1. Instaliraj modul

```javascript
import { createApp } from 'vue'
import { createStore } from 'vuex'
import { createVuetify } from 'vuetify'
import LoaderModule from 'loader-module-vue3'

const app = createApp({})
const store = createStore({})
const vuetify = createVuetify()

app.use(store)
app.use(vuetify)
app.use(LoaderModule, { store })
```

### 2. Dodaj komponentu u template

```vue
<template>
  <div>
    <!-- Tvoj sadržaj -->
    <loader-vuex
      :opacity="0.8"
      :size="80"
      color="primary"
    />
  </div>
</template>
```

### 3. Kontroliši loader

```javascript
// Prikaži loader
this.$store.dispatch('loaderModule/show')

// Sakrij loader
this.$store.dispatch('loaderModule/hide')

// Proveri da li je loader aktivan
this.$store.getters['loaderModule/isLoading']
```

## Props

| Prop | Tip | Default | Opis |
|------|-----|---------|------|
| opacity | Number | 0.7 | Prozirnost overlay-a |
| zIndex | Number | 5 | Z-index overlay-a |
| size | Number | 64 | Veličina spinner-a |
| color | String | 'primary' | Boja spinner-a |

## Store Actions

| Action | Opis |
|--------|------|
| `loaderModule/show` | Prikaži loader |
| `loaderModule/hide` | Sakrij loader |

## Store Getters

| Getter | Opis |
|--------|------|
| `loaderModule/isLoading` | Da li je loader aktivan |

## Store State

```javascript
{
  loaderModule: {
    loaderDialog: false
  }
}
```

## Primer

Pogledaj `examples/vue3-example.html` za kompletan primer korišćenja.

## Razvoj

```bash
# Instaliraj dependencies
npm install

# Pokreni dev server
npm run serve

# Build za produkciju
npm run build
```
