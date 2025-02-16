# Configure Typescript Project
Configure and setup a typescript project from the ground up.

# Usage
Run command to activate watchmode transpilations on target .ts file during development.
```
$ npx tsc app.ts --watch
$ npx tsc app.ts -w
```

Run command to setup initial persistent typescript configuration inside the root folder of project
```
$ npx tsc --init
```

Run command to transpile all .ts files in the root directory after running `$ npx tsc --init`
```
$ npx tsc
$ npx tsc --watch
```
