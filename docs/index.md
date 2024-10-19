# Welcome to the docs!

### Here you can find all the information related to the project.

## What is this project?

This is a project that aims to provide information about the ports that are used in the internet in a funny way: Cats. This is inspired by the [HTTP CATS](https://http.cat) Website.

## How does it work?

This Project is a Simple React App created with vite. It uses React Router, TailwindCSS and ReactMarkdown. We don't use any backend, so all the data is stored in statically served markdown and JSON files:

On the index page all the data ist loated from info.json. It contains an array of objects, which contains the information about the ports:

```JSON
    {
        "port": PORT_NUMBER,
        "application": string,
        "imgsrc": url,
        "descriptionSource": url
    },
```

The pages about each port are also generated with the info.json also using additional information from the markdown files in the public folder. The markdown files are named after the port number. For example: 80.md

## How to contribute?

We need your help, since their are so many ports out there. If you want to add a port, you can follow the steps in the [CONTRIBUTING.md](CONTRIBUTING.md) file, to add a new port, or if you want, a feature.

## Good to know

- How to setup dev environment: [SETUP.md](SETUP.md)
