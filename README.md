<h1>Lexeme Magazine website </h3>

- [introduction](#introduction)
- [structure](#structure)
- [flow diagram](#flow-diagram)
- [tasks](#tasks)


# introduction
Lexeme is a magazine made by students. In this website we share its publication and also games online.

# structure
```
├───public
│   └───assets
│       └───images
│           └───games
└───src
    ├───components
    │   ├───games
    │   └───issues
    ├───data
    │   └───games
    │       ├───Mystery
    │       ├───SpotDifference
    │       └───WordSearchPuzzle
    ├───layouts
    ├───pages
    └───styling
        └───games
```

# flow diagram
index -> home -> issues -> issue #
<br />
index -> home -> games -> game #

# tasks
- [x] connect to github & cloudflare
- [x] make issues dynamic
- [x] refactor to react
- [x] add games
- [ ] add caching system 