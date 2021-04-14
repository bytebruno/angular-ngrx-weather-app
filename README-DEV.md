# README-DEV

## Archictecture

Project created with Angular 11 version, added NGRX for the application state management and Angular Material to use some material components.

#### Main modules:

##### Eager Loaded

- Core module
- App and Routing module

##### Lazy Loaded

- Shared module (not implemented due to no necessity for the current features)
- Lazy Feature A,B,C...

The eager part will load in main.js that has AppModule wich imports CoreModule and AppRoutingModule. CoreModule should only be imported once (in AppModule) and have only basic layout and core services that are used throught the whole app.
The lazy loaded features will be loaded as a result of user navigation. SharedModule should be imported in the lazy features.

The main idea is to have the smallest possible bundle with this approach. Of course there's others possibilities but thinking about of how the project can possibly grow, I think it's a good approach.

### NGRX

##### Centralized, Immutable State

All relevant application state exists in one location. This makes it easier to track down problems.

##### Performance

Since state is centralized at the top of your application, data updates can flow down through your components relying on slices of store. Wich works great with OnPush change detection.

##### Testability

All state updates are handled in reducers, which are pure functions. Pure functions are extremely simple to test, as it is simply input in, assert against output.

## Performance

- All of the components of this app uses OnPush change detection strategy.
- Always unsubscribe! I didn't need to unsubscribe because I have used the async pipe on
  all observables.
- Used trackBy on \*ngFor. I know that were small lists, but I know this is important
  to prevent re-rendering all the list again if only some item has changed.
- Lazy loading features.

## Structure (summary)

```
 |-- app
        |-- core
            |-- layout
            |-- services
            |-- core.module
        |-- shared (if exists)
            |-- shared.module
            |-- components,etc...
        |-- app.module
        |-- app-routing.module
        |-- features
            |-- weather
                |-- components
                    |-- cities-list
                    |-- city-card
                    |-- city-details
                        |-- components (only used by city-details component)
                            |-- hourly-row
                |-- model
                |-- pipes
                |-- services
                |-- state
                    |-- weather.actions
                    |-- weather.effects
                    |-- weather.reducer
                    |-- weather.selectors
                |-- utils
                    |-- mocks
                    |-- ...
                |-- weather.module
                |-- weather.routing.module
```

## Code consistency

- Added beautify for adjust html files
- Added prettier to adjust other files
- Added lint:fix and style:fix to fix files automatically
- Created specific configurations for vscode.

I created the things above because I know the importance of this matter. I like the [standardjs](https://standardjs.com/) style guide. However, code consistency should be discussed by the team members to achieve the best choice for them and for the company.

## What was I going to do next?

- Handle errors on requests and show to user with a snackbar or something alike
- Store data on session storage to avoid unecessarily requests (only send new requests after 5min passed for example...)
