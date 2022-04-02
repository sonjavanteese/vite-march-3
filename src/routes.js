// import { wrap } from 'svelte-spa-router/wrap';
// @index(['./routes2/**/*.svelte', './routes/user/*.svelte', './routes/static/*.svelte'], (f, _, e) => ` import ${_.pascalCase(f.name)} from '${f.path}${f.ext}';`)
 import NotFound from './routes2/NotFound.svelte';
 import Part1 from './routes2/Part1.svelte';
 import Part2 from './routes2/Part2.svelte';
// import Part3 from './routes2/Part3.svelte';
 import Start from './routes2/Start.svelte';
// @endindex

export const routes = {
    '/': Start,
    '/g1': Part1,
    '/g2': Part2,
   // '/part3': Part3,
    '*': NotFound,
}


// @index(['./xroutes2/**/*.svelte'], (f, _, e) => `{path: "/${f.name}", name: "${_.pascalCase(f.name)}", icon: "${f.name}"},`)

// @endindex