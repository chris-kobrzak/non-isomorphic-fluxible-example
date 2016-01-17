Non-isomorphic Fluxible with React example
==========================================

This is a step by step guide on how to set-up a basic
[React](https://facebook.github.io/react/) application that uses
[Fluxible](http://fluxible.io/) as a Flux implementation.

But as of the beginning of 2016 it is [Redux](http://redux.js.org) that seems
to have taken the community by storm and become a de-facto standard Flux
solution. So why Fluxible?

Fluxible has been around for a longer time than many other Flux design pattern
implementations and it's killer feature has historically been the ability to
run Flux on the server side taking the isomorphic JavaScript concepts to a new
level. And this feature of Fluxible is what a (fairly limited) number of
examples available on-line (the [Yeoman
generator](https://github.com/yahoo/fluxible/tree/master/packages/generator-fluxible)
included) seem to be focusing on.

I am therefore intending to demonstrate in a few code commits how to attach
Fluxible to a basic React project from scratch. There will be no server-side
rendering of React components, no routing and no isomorphic concepts.

# Set-up

```npm install```

# Bundling assets

```npm run bundle```

# Running app in browser

Provided you have `http-server` globally available, you may use the following
command to start the application:

```npm run serve```

## Open browser (OS X only)

```npm run browse```
