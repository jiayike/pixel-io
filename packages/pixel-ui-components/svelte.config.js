import sveltePreprocess from 'svelte-preprocess';

export default {
  include: '**/*.wc.svelte',
  compilerOptions: {
    customElement: true,
  },
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
};
