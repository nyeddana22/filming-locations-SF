# ECS272 HW1 - Movie Locations in San Francisco

https://observablehq.com/@nyeddana/ecs272-hw1@1721

View this notebook in your browser by running a web server in this folder. For
example:

~~~sh
npx http-server
~~~

Or, use the [Observable Runtime](https://github.com/observablehq/runtime) to
import this module directly into your application. To npm install:

~~~sh
npm install @observablehq/runtime@4
npm install https://api.observablehq.com/d/3aa275409ec62dcd@1721.tgz?v=3
~~~

Then, import your notebook and the runtime as:

~~~js
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "@nyeddana/ecs272-hw1";
~~~

To log the value of the cell named “foo”:

~~~js
const runtime = new Runtime();
const main = runtime.module(define);
main.value("foo").then(value => console.log(value));
~~~

Note: You may have to run the pinned cells in Observable Notebook to visualize a couple of the charts!
