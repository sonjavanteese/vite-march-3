// @index(['./x**/*.svelte', './templ/*.js'], (f, _, e) => ` export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}';`)

// @endindex
// @index(['./x**/*.svelte'], (f, _, e) => `${e.isFirst ? '/* \n import { \n' : ''} ${_.pascalCase(f.name)}${e.isLast ? '\n } from "lib/_liblist"; \n*/' : ','}`)

// @endindex
// @index(['./api/**/*.js', './static/**/*.js'], f => ` export { default as ${f.name} } from '${f.path}';`)
 export { default as fetchDb } from './api/fetchDb';
 export { default as fetchJsonEditor } from './api/fetchJsonEditor';
 export { default as sleep } from './api/sleep';
 export { default as supabase } from './api/supabase';
 export { default as appData } from './static/appData';
 export { default as navData } from './static/navData';
 export { default as pageData } from './static/pageData';
// @endindex

// @index(['./api/**/*.js', './static/**/*.js'], f => `// import ${f.name} from '${f.path}';`)
// import fetchDb from './api/fetchDb';
// import fetchJsonEditor from './api/fetchJsonEditor';
// import sleep from './api/sleep';
// import supabase from './api/supabase';
// import appData from './static/appData';
// import navData from './static/navData';
// import pageData from './static/pageData';
// @endindex