# Coffee API
### Test Submission by Tony Klinakis

## Getting Started

> Note: `Block` elements in this document are navigable when referring to files or components; you can 
> click them and go to the code immediately.

Run the following commands to get the app started right away:

```bash
yarn && yarn run start
```

The best place to start examining the code is [`App.js`][c-app], which sets up the Context and routing, followed
by [`router.js`][c-router]

## Operational Walkthrough

The first thing the App does is to fetch data from the API. Since the [`Dashboard`][c-dash] component is on the
default route, the task of loading the data falls to one of its children, [`CoffeeView`][c-coffeeview].

If a user goes to the `/admin/cart` route instead, their Coffee store will not be populated. 
This has no adverse effects in our case, because the presence of the coffee store does not impact 
their view of the cart.

## Store

There are two Stores in the app, [`coffee`][st-coffee] and [`basket`][st-basket], providing the items from
the API and the user cart respectively. Each Store supports its own actions.

The stores were kept separate to avoid filtering entries at
render time. In hindsight, it might have been worth using one store for both collections,
as the [`CartDetails`][c-cart-details] component (responsible for rendering the cart and ingredients)
combines the two anyway.

Since hot and iced coffees use the same ID range, the Store saves two additional fields: `type` and `uid`.
`type` is either `iced` or `hot`, and the unique ID (`uid`) is a concatenation of type and ID.

## Layout

The layout is based on Creative Tim's excellent Material Dashboard UI, with minor CSS tweaks. As a result there
might be a number of components which are not used in this test. The best way to see what is in use is by
following the Routing declarations, found in the [`router.js`][c-router] file. This file also populates the 
sidebar.

[c-coffeeview]: ./src/components/CoffeeView/index.js
[c-dash]: ./src/views/Dashboard/Dashboard.js
[c-app]: ./src/App.js
[c-router]: ./src/routes.js
[c-cart-details]: ./src/components/CartDetails/index.js
[st-coffee]: ./src/store/coffee.js
[st-basket]: ./src/store/basket.js
