var config;
if (typeof(require) === 'undefined') {
    /* XXX: Hack to work around r.js's stupid parsing.
     * We want to save the configuration in a variable so that we can reuse it in
     * tests/main.js.
     */
    require = { // jshint ignore:line
        config: function (c) {
            config = c;
        }
    };
}

require.config({
    baseUrl: '.',
    paths: {
        "converse-inverse":         "src/converse-inverse",

        "backbone":                 "node_modules/converse.js/node_modules/backbone/backbone",
        "backbone.browserStorage":  "node_modules/converse.js/node_modules/backbone.browserStorage/backbone.browserStorage",
        "backbone.overview":        "node_modules/converse.js/node_modules/backbone.overview/backbone.overview",
        "eventemitter":             "node_modules/converse.js/node_modules/otr/build/dep/eventemitter",
        "jquery":                   "node_modules/converse.js/node_modules/jquery/dist/jquery",
        "jquery-private":           "node_modules/converse.js/src/jquery-private",
        "jquery.browser":           "node_modules/converse.js/node_modules/jquery.browser/dist/jquery.browser",
        "jquery.easing":            "node_modules/converse.js/node_modules/jquery-easing-original/index",          // XXX: Only required for https://conversejs.org website
        "moment":                   "node_modules/converse.js/node_modules/moment/moment",
        "pluggable":                "node_modules/converse.js/node_modules/pluggable.js/dist/pluggable",
        "sizzle":                   "node_modules/converse.js/node_modules/jquery/sizzle/dist/sizzle",
        "strophe":                  "node_modules/converse.js/node_modules/strophe.js/src/wrapper",
        "strophe-base64":           "node_modules/converse.js/node_modules/strophe.js/src/base64",
        "strophe-bosh":             "node_modules/converse.js/node_modules/strophe.js/src/bosh",
        "strophe-core":             "node_modules/converse.js/node_modules/strophe.js/src/core",
        "strophe-md5":              "node_modules/converse.js/node_modules/strophe.js/src/md5",
        "strophe-polyfill":         "node_modules/converse.js/node_modules/strophe.js/src/polyfills",
        "strophe-sha1":             "node_modules/converse.js/node_modules/strophe.js/src/sha1",
        "strophe-utils":            "node_modules/converse.js/node_modules/strophe.js/src/utils",
        "strophe-websocket":        "node_modules/converse.js/node_modules/strophe.js/src/websocket",
        "strophe.disco":            "node_modules/converse.js/node_modules/strophejs-plugins/disco/strophe.disco",
        "strophe.ping":             "node_modules/converse.js/node_modules/strophejs-plugins/ping/strophe.ping",
        "strophe.rsm":              "node_modules/converse.js/node_modules/strophejs-plugins/rsm/strophe.rsm",
        "strophe.vcard":            "node_modules/converse.js/node_modules/strophejs-plugins/vcard/strophe.vcard",
        "text":                     "node_modules/converse.js/node_modules/text/text",
        "tpl":                      "node_modules/converse.js/node_modules/lodash-template-loader/loader",
        "typeahead":                "node_modules/converse.js/components/typeahead.js/index",
        "lodash":                   "node_modules/converse.js/node_modules/lodash/lodash",
        "utils":                    "node_modules/converse.js/src/utils",
        "polyfill":                 "node_modules/converse.js/src/polyfill",
        
        // Converse
        "converse-api":             "node_modules/converse.js/src/converse-api",
        "converse-bookmarks":       "node_modules/converse.js/src/converse-bookmarks",
        "converse-chatview":        "node_modules/converse.js/src/converse-chatview",
        "converse-controlbox":      "node_modules/converse.js/src/converse-controlbox",
        "converse-core":            "node_modules/converse.js/src/converse-core",
        "converse-dragresize":      "node_modules/converse.js/src/converse-dragresize",
        "converse-headline":        "node_modules/converse.js/src/converse-headline",
        "converse-mam":             "node_modules/converse.js/src/converse-mam",
        "converse-minimize":        "node_modules/converse.js/src/converse-minimize",
        "converse-muc":             "node_modules/converse.js/src/converse-muc",
        "converse-notification":    "node_modules/converse.js/src/converse-notification",
        "converse-otr":             "node_modules/converse.js/src/converse-otr",
        "converse-ping":            "node_modules/converse.js/src/converse-ping",
        "converse-register":        "node_modules/converse.js/src/converse-register",
        "converse-rosterview":      "node_modules/converse.js/src/converse-rosterview",
        "converse-vcard":           "node_modules/converse.js/src/converse-vcard",

        // Off-the-record-encryption
        "bigint":               "node_modules/converse.js/3rdparty/bigint",
        "crypto":               "node_modules/converse.js/3rdparty/crypto",
        "crypto.aes":           "node_modules/converse.js/node_modules/otr/vendor/cryptojs/aes",
        "crypto.cipher-core":   "node_modules/converse.js/node_modules/otr/vendor/cryptojs/cipher-core",
        "crypto.core":          "node_modules/converse.js/node_modules/otr/vendor/cryptojs/core",
        "crypto.enc-base64":    "node_modules/converse.js/node_modules/otr/vendor/cryptojs/enc-base64",
        "crypto.evpkdf":        "node_modules/converse.js/components/crypto-js-evanvosberg/src/evpkdf",
        "crypto.hmac":          "node_modules/converse.js/node_modules/otr/vendor/cryptojs/hmac",
        "crypto.md5":           "node_modules/converse.js/components/crypto-js-evanvosberg/src/md5",
        "crypto.mode-ctr":      "node_modules/converse.js/node_modules/otr/vendor/cryptojs/mode-ctr",
        "crypto.pad-nopadding": "node_modules/converse.js/node_modules/otr/vendor/cryptojs/pad-nopadding",
        "crypto.sha1":          "node_modules/converse.js/node_modules/otr/vendor/cryptojs/sha1",
        "crypto.sha256":        "node_modules/converse.js/node_modules/otr/vendor/cryptojs/sha256",
        "salsa20":              "node_modules/converse.js/node_modules/otr/build/dep/salsa20",
        "otr":                  "node_modules/converse.js/3rdparty/otr",

        // Locales paths
        "locales":   "node_modules/converse.js/src/locales",
        "jed":       "node_modules/converse.js/node_modules/jed/jed",
        "af":        "node_modules/converse.js/locale/af/LC_MESSAGES/converse.json",
        "ca":        "node_modules/converse.js/locale/ca/LC_MESSAGES/converse.json",
        "de":        "node_modules/converse.js/locale/de/LC_MESSAGES/converse.json",
        "en":        "node_modules/converse.js/locale/en/LC_MESSAGES/converse.json",
        "es":        "node_modules/converse.js/locale/es/LC_MESSAGES/converse.json",
        "fr":        "node_modules/converse.js/locale/fr/LC_MESSAGES/converse.json",
        "he":        "node_modules/converse.js/locale/he/LC_MESSAGES/converse.json",
        "hu":        "node_modules/converse.js/locale/hu/LC_MESSAGES/converse.json",
        "id":        "node_modules/converse.js/locale/id/LC_MESSAGES/converse.json",
        "it":        "node_modules/converse.js/locale/it/LC_MESSAGES/converse.json",
        "ja":        "node_modules/converse.js/locale/ja/LC_MESSAGES/converse.json",
        "nb":        "node_modules/converse.js/locale/nb/LC_MESSAGES/converse.json",
        "nl":        "node_modules/converse.js/locale/nl/LC_MESSAGES/converse.json",
        "pl":        "node_modules/converse.js/locale/pl/LC_MESSAGES/converse.json",
        "pt_BR":     "node_modules/converse.js/locale/pt_BR/LC_MESSAGES/converse.json",
        "ru":        "node_modules/converse.js/locale/ru/LC_MESSAGES/converse.json",
        "uk":        "node_modules/converse.js/locale/uk/LC_MESSAGES/converse.json",
        "zh":        "node_modules/converse.js/locale/zh/LC_MESSAGES/converse.json",

        "moment_with_locales": "node_modules/converse.js/3rdparty/moment_locales",
        'moment_af':        "node_modules/converse.js/node_modules/moment/locale/af",
        'moment_de':        "node_modules/converse.js/node_modules/moment/locale/de",
        'moment_es':        "node_modules/converse.js/node_modules/moment/locale/es",
        'moment_fr':        "node_modules/converse.js/node_modules/moment/locale/fr",
        'moment_he':        "node_modules/converse.js/node_modules/moment/locale/he",
        'moment_hu':        "node_modules/converse.js/node_modules/moment/locale/hu",
        'moment_id':        "node_modules/converse.js/node_modules/moment/locale/id",
        'moment_it':        "node_modules/converse.js/node_modules/moment/locale/it",
        'moment_ja':        "node_modules/converse.js/node_modules/moment/locale/ja",
        'moment_nb':        "node_modules/converse.js/node_modules/moment/locale/nb",
        'moment_nl':        "node_modules/converse.js/node_modules/moment/locale/nl",
        'moment_pl':        "node_modules/converse.js/node_modules/moment/locale/pl",
        'moment_pt-br':     "node_modules/converse.js/node_modules/moment/locale/pt-br",
        'moment_ru':        "node_modules/converse.js/node_modules/moment/locale/ru",
        'moment_uk':        "node_modules/converse.js/node_modules/moment/locale/uk",
        'moment_zh':        "node_modules/converse.js/node_modules/moment/locale/zh-cn",

        // Templates
        "action":                   "node_modules/converse.js/src/templates/action",
        "add_contact_dropdown":     "node_modules/converse.js/src/templates/add_contact_dropdown",
        "add_contact_form":         "node_modules/converse.js/src/templates/add_contact_form",
        "avatar":                   "src/templates/avatar",
        "bookmark":                 "node_modules/converse.js/src/templates/bookmark",
        "bookmarks_list":           "node_modules/converse.js/src/templates/bookmarks_list",
        "change_status_message":    "node_modules/converse.js/src/templates/change_status_message",
        "chat_status":              "node_modules/converse.js/src/templates/chat_status",
        "chatarea":                 "node_modules/converse.js/src/templates/chatarea",
        "chatbox":                  "src/templates/chatbox",
        "chatbox_minimize":         "node_modules/converse.js/src/templates/chatbox_minimize",
        "chatroom":                 "node_modules/converse.js/src/templates/chatroom",
        "chatroom_head":            "node_modules/converse.js/src/templates/chatroom_head",
        "chatroom_bookmark_form":   "node_modules/converse.js/src/templates/chatroom_bookmark_form",
        "chatroom_bookmark_toggle": "node_modules/converse.js/src/templates/chatroom_bookmark_toggle",
        "chatroom_form":            "node_modules/converse.js/src/templates/chatroom_form",
        "chatroom_nickname_form":   "node_modules/converse.js/src/templates/chatroom_nickname_form",
        "chatroom_password_form":   "node_modules/converse.js/src/templates/chatroom_password_form",
        "chatroom_sidebar":         "node_modules/converse.js/src/templates/chatroom_sidebar",
        "chatroom_toolbar":         "node_modules/converse.js/src/templates/chatroom_toolbar",
        "chatrooms_tab":            "node_modules/converse.js/src/templates/chatrooms_tab",
        "chats_panel":              "node_modules/converse.js/src/templates/chats_panel",
        "choose_status":            "node_modules/converse.js/src/templates/choose_status",
        "contacts_panel":           "node_modules/converse.js/src/templates/contacts_panel",
        "contacts_tab":             "node_modules/converse.js/src/templates/contacts_tab",
        "controlbox":               "src/templates/controlbox",
        "controlbox_toggle":        "node_modules/converse.js/src/templates/controlbox_toggle",
        "field":                    "node_modules/converse.js/src/templates/field",
        "form_captcha":             "node_modules/converse.js/src/templates/form_captcha",
        "form_checkbox":            "node_modules/converse.js/src/templates/form_checkbox",
        "form_input":               "node_modules/converse.js/src/templates/form_input",
        "form_select":              "node_modules/converse.js/src/templates/form_select",
        "form_textarea":            "node_modules/converse.js/src/templates/form_textarea",
        "form_username":            "node_modules/converse.js/src/templates/form_username",
        "group_header":             "node_modules/converse.js/src/templates/group_header",
        "info":                     "node_modules/converse.js/src/templates/info",
        "login_panel":              "src/templates/login_panel",
        "login_tab":                "node_modules/converse.js/src/templates/login_tab",
        "message":                  "node_modules/converse.js/src/templates/message",
        "new_day":                  "node_modules/converse.js/src/templates/new_day",
        "occupant":                 "node_modules/converse.js/src/templates/occupant",
        "pending_contact":          "node_modules/converse.js/src/templates/pending_contact",
        "pending_contacts":         "node_modules/converse.js/src/templates/pending_contacts",
        "register_panel":           "src/templates/register_panel",
        "register_tab":             "node_modules/converse.js/src/templates/register_tab",
        "registration_form":        "node_modules/converse.js/src/templates/registration_form",
        "registration_request":     "node_modules/converse.js/src/templates/registration_request",
        "requesting_contact":       "node_modules/converse.js/src/templates/requesting_contact",
        "requesting_contacts":      "node_modules/converse.js/src/templates/requesting_contacts",
        "room_description":         "node_modules/converse.js/src/templates/room_description",
        "room_item":                "node_modules/converse.js/src/templates/room_item",
        "room_panel":               "node_modules/converse.js/src/templates/room_panel",
        "roster":                   "node_modules/converse.js/src/templates/roster",
        "roster_item":              "node_modules/converse.js/src/templates/roster_item",
        "search_contact":           "node_modules/converse.js/src/templates/search_contact",
        "select_option":            "node_modules/converse.js/src/templates/select_option",
        "status_option":            "node_modules/converse.js/src/templates/status_option",
        "toggle_chats":             "node_modules/converse.js/src/templates/toggle_chats",
        "toolbar":                  "node_modules/converse.js/src/templates/toolbar",
        "toolbar_otr":              "node_modules/converse.js/src/templates/toolbar_otr",
        "trimmed_chat":             "node_modules/converse.js/src/templates/trimmed_chat",
        "vcard":                    "node_modules/converse.js/src/templates/vcard"
    },

    map: {
        // '*' means all modules will get 'jquery-private'
        // for their 'jquery' dependency.
        '*': {
            'jquery': 'jquery-private',
            "underscore": "lodash"
         },
        // 'jquery-private' wants the real jQuery module
        // though. If this line was not here, there would
        // be an unresolvable cyclic dependency.
        'jquery-private': { 'jquery': 'jquery' }
    },

    lodashLoader: {
        // Configuration for requirejs-tpl
        // Use Mustache style syntax for variable interpolation
        templateSettings: {
            'escape': /\{\{\{([\s\S]+?)\}\}\}/g,
            'evaluate': /\{\[([\s\S]+?)\]\}/g,
            'interpolate': /\{\{([\s\S]+?)\}\}/g
        }
    },

    // define module dependencies for modules not using define
    shim: {
        'crypto.aes':           { deps: ['crypto.cipher-core'] },
        'crypto.cipher-core':   { deps: ['crypto.enc-base64', 'crypto.evpkdf'] },
        'crypto.enc-base64':    { deps: ['crypto.core'] },
        'crypto.evpkdf':        { deps: ['crypto.md5'] },
        'crypto.hmac':          { deps: ['crypto.core'] },
        'crypto.md5':           { deps: ['crypto.core'] },
        'crypto.mode-ctr':      { deps: ['crypto.cipher-core'] },
        'crypto.pad-nopadding': { deps: ['crypto.cipher-core'] },
        'crypto.sha1':          { deps: ['crypto.core'] },
        'crypto.sha256':        { deps: ['crypto.core'] },
        'bigint':               { deps: ['crypto'] },
        'strophe.ping':         { deps: ['strophe'] },
        'strophe.register':     { deps: ['strophe'] },
        'strophe.vcard':        { deps: ['strophe'] }
    }
});
