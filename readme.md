# rollup-plugin-node-resolve bug

## Reproduction steps

1. Clone this repository

```
git clone https://github.com/Dan503/BUG-rollup-plugin-node-resolve.git
```

2. `npm i`
3. `npm run start`
4. See error in console:

```
Error: Could not load [object Object]: The "path" argument must be one of type string, Buffer, or URL. Received type object
    at C:\xxx\Bug-recreations\rollup-plugin-node-resolve\node_modules\rollup-stream\node_modules\rollup\dist\rollup.js:9715:11
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
```

## More details

I followed the guide outlined here on how to make Rollup work in Gulp:

https://duske.me/using-rollup-js-with-gulp-js/

Then I tried following the documentation as outlined here to add node-resolve support:

https://github.com/rollup/rollup-plugin-node-resolve

I don't understand why it is not working.
