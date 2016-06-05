// Converse.js (A browser based XMPP chat client)
// http://conversejs.org
//
// Copyright (c) 2012-2016, Jan-Carel Brand <jc@opkode.com>
// Licensed under the Mozilla Public License (MPLv2)
//
/*global Backbone, define, window */

(function (root, factory) {
    define("converse-universe", [
            "converse-core",
            "converse-api",
            "converse-chatview",
            "converse-muc"
    ], factory);
}(this, function (converse, converse_api) {
    "use strict";

    var $ = converse_api.env.jQuery,
        _ = converse_api.env._;

    converse_api.plugins.add('universe', {

        overrides: {
            // overrides mentioned here will be picked up by converse.js's
            // plugin architecture they will replace existing methods on the
            // relevant objects or classes.
            //
            // new functions which don't exist yet can also be added.
        },

        initialize: function () {
            /* The initialize function gets called as soon as the plugin is
             * loaded by converse.js's plugin machinery.
             */
            var converse = this.converse;
        }
    });
}));
