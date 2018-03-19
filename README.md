# Collaborate

Collaborate is a statefull component, part of the OCE suite. It can be installed as any other npm module and imported into your application. It includes: 
- A profile page
- An agent page for each agent a user has a relationship with feed, members, plans and resources tab
- A kanban view for each plan
Btw Collaborate its currently a submodule of the [dashboard](github.com/opencooperativeecosystem/dashboard), and it depends on a specific valueflows graphql layer to fetch/update data.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

The collaborate app comes together with a `demo` folder, that includes the app inside a dashboard and handles mainly the login part with the graphql API (TODO: setup a local graphql instance)

```
git clone https://github.com/opencooperativeecosystem/collaborate.git
cd collaborate
npm install
npm start
```
Open on your browser localhost:3000

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Ivan Minutillo** - *Initial work* - [Bernini](https://github.com/ivanminutillo)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

