# Collaborate

Collaborate is a statefull component, part of the OCE suite. It can be installed as any other npm module and imported into your application. It includes: 
- A profile page
- An agent page for each agent a user has a relationship with feed, members, plans and resources tab
- A kanban view for each plan

Btw Collaborate is currently a submodule of [dashboard](github.com/opencooperativeecosystem/dashboard), and it depends on a specific valueflows graphql layer to fetch/update data.

## Getting Started

```npm install collaborate``` 

### Basic Example

```js
import Collaborate from 'collaborate'

ReactDOM.render(
  <ApolloProvider client={client}>
      <Router>
        <AppTemplate>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={() => (<h1>overview</h1>)} />
          <Route path='/work' component={Work} />
          <Route path='/settings' component={Settings} />
        </AppTemplate>
      </Router>
  </ApolloProvider>,
document.getElementById('root')
)
```

### Running locally

The collaborate app comes together with a `demo` folder, that includes the app inside a dashboard and handles mainly the login part with the graphql API (TODO: setup a local graphql instance)

```
git clone https://github.com/opencooperativeecosystem/collaborate.git
cd collaborate
npm install
npm start
```
Open on your browser localhost:3000


## Running the tests

TODO

## Built With

* [React](http://github.com/reactjs/)
* [Apollo](https://github.com/apollographql/)
* [PostCSS](https://github.com/postcss/)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Ivan Minutillo** - *Initial work* - [Bernini](https://github.com/ivanminutillo)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

