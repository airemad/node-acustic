<p align="center"><h1 align="center">
  @airemad/node-acustic
</h1>

<p align="center">
  Node.js Libary to collect, analyze and digest the Acustic Pollution in Madrid
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/@airemad/node-acustic"><img src="https://badgen.net/npm/v/@airemad/node-acustic" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/@airemad/node-acustic"><img src="https://badgen.net/npm/license/@airemad/node-acustic" alt="license"/></a>
  <a href="https://www.npmjs.org/package/@airemad/node-acustic"><img src="https://badgen.net/npm/dt/@airemad/node-acustic" alt="downloads"/></a>
  <a href="https://snyk.io/test/github/airemad/node-acustic"><img src="https://snyk.io/test/github/airemad/node-acustic/badge.svg" alt="Known Vulnerabilities"/></a>
</p>


# About

Node.js Libary to collect, analyze and digest the Acustic Pollution in Madrid

## ❤️ Awesome Features:
- debug is supported 💪
- Out of the box simple Interface. 🔥
- Check report integrity against Json Schemas 🧐
- Includes context info like hash, timestamp, source... 🥷
- Easy to use and great test coverage ✅

## Installation

```bash
npm install @airemad/node-acustic
```

## Usage

```js
const { getLastReport } = require('@airemad/node-acustic')

;(async () => {
    const {data, hash, source, timestamp} = await getLastReport()
    console.log(hash)      // 1369f90ec7205649da9abbbc98f63e35
    console.log(source)    // https://www.mambiente.madrid.es/opendata/ruido.txt
    console.log(timestamp) // 1651271749972
    console.log(data)
/*
[
    ...,
    {
        id: '86',
        uuid: '271a6e0a-9d62-49cd-a772-57c1b492441f',
        name: 'Tres Olivos',
        period: 'night',
        date: '2022-04-21',
        laeq: 47,
        las01: 58,
        las10: 51,
        las50: 39,
        las90: 36,
        las99: 36
    }
]
*/

})()
```

## Built With

Development only:

- [Standard](https://www.npmjs.com/package/standard) - Linting propuses
- [Husky](https://www.npmjs.com/package/husky) - Git Hooks
- [Commitlint](https://www.npmjs.com/package/@commitlint/cli) - Linting commit messages
- [Jest](https://www.npmjs.com/package/jest) - Testing
- [Standard](https://www.npmjs.com/package/standard) - Linting
- [Standard-version](https://www.npmjs.com/package/standard-version) - Manage changelog and releases

Production only:

- [@airemad/stations](https://www.npmjs.com/package/@airemad/stations) - Stations information
- [node-fetch](https://www.npmjs.com/package/node-fetch) - HTTP Library to download reports
- [debug](https://www.npmjs.com/package/debug) - Manage debugging info
- [ajv](https://www.npmjs.com/package/ajv) - Json Schemas
- [ajv-formats](https://www.npmjs.com/package/ajv-formats) - Extend Json Schemas

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/airemad/node-acustic/tags).

## Authors

- **Ulises Gascón** - Initial work- - [@ulisesGascon](https://github.com/ulisesGascon)

See also the list of [contributors](https://github.com/airemad/node-acustic/contributors) who participated in this project.

## License

This project is licensed under the GNU AGPL3.0 License - see the [LICENSE.md](LICENSE.md) file for details

## Data sources

We use [Madrid Datos Abiertos](https://datos.madrid.es/portal/site/egob):
- [Dataset: Contaminación acústica. Datos diarios](https://datos.madrid.es/sites/v/index.jsp?vgnextoid=b8c427a272e4e410VgnVCM2000000c205a0aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD)

