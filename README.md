# inVerse

inVerse is a fullscreen, single-page, XMPP-chat application.

It's only HTML, Javascript and CSS with no backend required except an XMPP
server and it's based on [converse.js](https://conversejs.org) of which it
is a plugin.

**Please note**:

This is alpha software in the sense that there are still various missing
features which are necessary to make it useful for everyday use.

Pull requests and support welcome!

Two important and lacking features are:

* Per contact and per chat room unread messages indicators.
* A list of currently open conversations

That said, I do use and dogfood inVerse daily and it's still usable within the
limitations mentioned above.

## Setup instructions

Currently there aren't yet any final builds of inVerse.

The only way to run it is to load all the individual, uncompressed files via
require.js.

Getting this to work is simple granted you have a \*nix machine with GNUMake
installed.

If so you can simply run

    make serve

Various dependencies will be installed, CSS might be generated and
eventually you should see something like this:

    ./node_modules/.bin/http-server -p 8001 -c -1
    Starting up http-server, serving ./ on: http://0.0.0.0:8001
    Hit CTRL-C to stop the server

You can then open https://localhost:8001/index.html to serve inVerse.

## Licence

`inVerse` is released under the [Mozilla Public License (MPL)](https://www.mozilla.org/MPL/2.0/index.txt).

## Features

- Single-user chat
- Contacts and groups
- Multi-user chat rooms [XEP 45](http://xmpp.org/extensions/xep-0045.html)
- Direct invitations to chat rooms [XEP 249](http://xmpp.org/extensions/xep-0249.html)
- vCard support [XEP 54](http://xmpp.org/extensions/xep-0054.html)
- Service discovery [XEP 30](http://xmpp.org/extensions/xep-0030.html)
- In-band registration [XEP 77](http://xmpp.org/extensions/xep-0077.html)
- Chat room bookmarks [XEP 48](http://xmpp.org/extensions/xep-0048.html)
- Roster item exchange [XEP 144](http://xmpp.org/extensions/tmp/xep-0144-1.1.html)
- Chat statuses (online, busy, away, offline)
- Custom status messages
- Desktop notifications
- Typing and state notifications [XEP 85](http://xmpp.org/extensions/xep-0085.html)
- Messages appear in all connnected chat clients [XEP 280](http://xmpp.org/extensions/xep-0280.html)
- Third person "/me" messages [XEP 245](http://xmpp.org/extensions/xep-0245.html)
- XMPP Ping [XEP 199](http://xmpp.org/extensions/xep-0199.html)
- Server-side archiving of messages [XEP 313](http://xmpp.org/extensions/xep-0313.html)
- Client state indication [XEP 352](http://xmpp.org/extensions/xep-0352.html)
- Off-the-record encryption
- Translated into 16 languages
