/* eslint-disable */


// @index(['./ff/*.svelte'], (f, _, e) => `${e.isFirst ? 'const nav = [ \n' : ''} ["${_.pascalCase(f.name)}", "/${f.name}", "${f.name}"]${e.isLast ? '\n];' : ','}`)

// @endindex
// @index(['./**/*.svelte', './**/*.js'], (f, _, e) => ` import ${_.pascalCase(f.name)} from '${f.path}${f.ext}';`)
//  import GoodBoi from './components/GoodBoi.svelte';
//  import RouteTransition from './components/RouteTransition.svelte';
//  import TransitionContainer from './components/TransitionContainer.svelte';
//  import Counter from './Counter.svelte';
//  import Appdata from './db/_appdata.js';
//  import Index from './db/index.js';
//  import Supabase from './db/supabase.js';
//  import Stores from './stores.js';
// @endindex
// @index(['./dd/*.svelte'], (f, _, e) => `${e.isFirst ? 'const routes = { \n' : ''}'/${f.name}': ${_.pascalCase(f.name)}${e.isLast ? '\n};' : ','}`)

// @endindex

// @index(['./store/*.js'], (f, _, e) => `${e.isFirst ? 'import { \n' : ''}${f.name} ${e.isLast ? '} from \'./supabase\';' : ','}`)

// @endindex

