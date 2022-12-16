# Gulp with TailwindCSS Starter Kit

Gulp with TailwindCSS Starter Kit ( Updated with [TailwindCSS JIT](https://github.com/tailwindlabs/tailwindcss-jit) )- A repo which makes your development easier with predefined gulp tasks that help you to use [tailwindcss](https://github.com/tailwindcss/tailwindcss) with simple npm commands

## To update dependencies before installing them

```console
# npm i -g npm-check-updates
$ ncu -u
```

## Usage

1. Install Dev Depedencies

```sh
npm install // or yarn install
```

2. To start development and server for live preview

```sh
npm run dev // or yarn dev
```

3. To generate minifed files for production server

```sh
npm run prod // or yarn prod
```

# Configuration

To change the path of files and destination/build folder, edit options in **config.js** file

```sh
{
  config: {
      ...
      port: 9050 // browser preview port
  },
  paths: {
     root: "./",
     src: {
        base: "./src",
        css: "./src/css",
        js: "./src/js",
        img: "./src/img"
     },
     dist: {
         base: "./dist",
         css: "./dist/css",
         js: "./dist/js",
         img: "./dist/img"
     },
     build: {
         base: "./build",
         css: "./build/css",
         js: "./build/js",
         img: "./build/img"
     }
  }
  ...
}
```

[System Design](https://medium.com/@sandeep4.verma/system-design-scalable-url-shortener-service-like-tinyurl-106f30f23a82)

> Todos

1. Connect Env File
2. Create Basic style for index.html
3. restructure gulp.js file
4. get files and folder names from env file
5. create build and dist folder scripts
6. redesign README FILE
7. Use Prettier for build files and in entier project formatting
8. create goTo Template for future projects
9. create options to select css tech as sass or tailwind in env file
10. check package json for unwanted packages and del package config and checks