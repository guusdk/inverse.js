// Converse.js (A browser based XMPP chat client)
// http://conversejs.org
//
// Copyright (c) 2012-2016, Jan-Carel Brand <jc@opkode.com>
// Licensed under the Mozilla Public License (MPLv2)
//
/*global Backbone, define, window */

(function (root, factory) {
    define("converse-inverse", [
            "converse-core",
            "converse-api",
            "converse-chatview",
            "converse-controlbox",
            "converse-muc"
    ], factory);
}(this, function (converse, converse_api) {
    "use strict";

    var $ = converse_api.env.jQuery,
        _ = converse_api.env._;

    converse_api.plugins.add('inverse', {

        overrides: {
            // overrides mentioned here will be picked up by converse.js's
            // plugin architecture they will replace existing methods on the
            // relevant objects or classes.
            //
            // new functions which don't exist yet can also be added.
            ControlBoxView: {
                close: function (ev) {
                    if (ev && ev.preventDefault) {
                        ev.preventDefault();
                    }
                    // The controlbox cannot be closed.
                },
                hide: function (ev) {
                    if (ev && ev.preventDefault) {
                        ev.preventDefault();
                    }
                    // The controlbox cannot be hidden
                },

                renderContactsPanel: function () {
                    this.__super__.renderContactsPanel.apply(this, arguments);
                    this.$el.removeClass("login");
                    return this;
                },

                renderLoginPanel: function () {
                    /* Also render a registration panel, when rendering the
                     * login panel.
                     */
                    this.__super__.renderLoginPanel.apply(this, arguments);
                    this.$el.addClass("login");
                    return this;
                }
            },

            ChatBoxViews: {
                showChat: function (attrs) {
                    var chatbox = this.getChatBox(attrs, true);
                    var converse = this.__super__.converse;
                    if (!attrs.hidden && converse.connection.authenticated) {
                        _.each(converse.chatboxviews.xget(chatbox.get('id')), function (view) {
                            if (view.model.get('id') === 'controlbox') {
                                return;
                            }
                            view.model.save({'hidden': true});
                        });
                        chatbox.save({'hidden': false});
                    }
                    return this.__super__.showChat.apply(this, arguments);
                }
            },

            RosterContactView: {
                openChat: function (ev) {
                    _.each(this.__super__.converse.chatboxviews.getAll(), function (view) {
                        view.model.save({'hidden': true});
                    });
                    this.model.save({'hidden': false});
                    return this.__super__.openChat.apply(this, arguments);
                },
            },

            ChatBoxView: {
                show: function (ev) {
                    if (!this.model.get('hidden')) {
                        _.each(this.__super__.converse.chatboxviews.xget(this.model.get('id')), function (view) {
                            view.hide();
                            view.model.set({'hidden': true});
                        });
                        return this.__super__.show.apply(this, arguments);
                    }
                }
            }
        },

        initialize: function () {
            /* The initialize function gets called as soon as the plugin is
             * loaded by converse.js's plugin machinery.
             */
            var converse = this.converse;
        }
    });
}));
