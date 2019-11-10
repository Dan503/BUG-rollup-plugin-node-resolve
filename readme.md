# rollup-plugin-commonjs bug

## Reproduction steps

1. Clone this repository

```
git clone https://github.com/Dan503/BUG-rollup-plugin-node-resolve.git
```

2. Check out `CommonJS-bug` branch
3. `npm i`
4. `npm run start`
5. See error in console:

```
TypeError: Cannot read property 'resolve' of undefined
    at resolveId (C:\xxx\node_modules\rollup-plugin-commonjs\dist\rollup-plugin-commonjs.cjs.js:157:17)
    at C:\xxx\node_modules\rollup-stream\node_modules\rollup\dist\rollup.js:1750:32
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
```

If the suggested fix is to use the "node-resolve" plugin, I run into this issue instead:

https://github.com/rollup/rollup-plugin-node-resolve/issues/242

It shouldn't be a problem with node-resolve not being available though because `main.js` is not importing from the `node_modules` folder.

## More details

I followed the guide outlined here on how to make Rollup work in Gulp:

https://duske.me/using-rollup-js-with-gulp-js/

Then I tried following the documentation as outlined here to add CommonJS support:

https://github.com/rollup/rollup-plugin-commonjs

I don't understand why it is not working.
