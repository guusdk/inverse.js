// Converse.js (A browser based XMPP chat client)
// http://conversejs.org
//
// Copyright (c) 2012-2016, Jan-Carel Brand <jc@opkode.com>
// Licensed under the Mozilla Public License (MPLv2)
//
/*global Backbone, define, window */

(function (root, factory) {
    define(["converse-core",
            "converse-chatview",
            "converse-controlbox",
            "converse-muc"
    ], factory);
}(this, function (converse) {
    "use strict";

    var $ = converse.env.jQuery,
        _ = converse.env._;

    converse.plugins.add('converse-inverse', {

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
                    this.$el.removeClass("fullscreen");
                    return this;
                },

                renderLoginPanel: function () {
                    this.__super__.renderLoginPanel.apply(this, arguments);
                    this.$el.addClass("fullscreen");
                    return this;
                }
            },

            ChatBoxViews: {
                showChat: function (attrs) {
                    /* With inVerse, we only have one chat visible at any one
                     * time. So before opening a chat, we make sure all other
                     * chats are hidden.
                     */
                    var _converse = this.__super__._converse;
                    var chatbox = this.getChatBox(attrs, true);
                    if (!attrs.hidden && _converse.connection.authenticated) {
                        _.each(_converse.chatboxviews.xget(chatbox.get('id')),
                            function (view) {
                                if (view.model.get('id') === 'controlbox') {
                                    return;
                                }
                                view.model.save({'hidden': true});
                            }
                        );
                        chatbox.save({'hidden': false});
                    }
                    return this.__super__.showChat.apply(this, arguments);
                }
            },

            RosterContactView: {
                openChat: function (ev) {
                    /* With inVerse, we only have one chat visible at any one
                     * time. So before opening a chat, we make sure all other
                     * chats are hidden.
                     */
                    _.each(this.__super__._converse.chatboxviews.xget('controlbox'), function (view) {
                        view.model.save({'hidden': true});
                    });
                    this.model.save({'hidden': false});
                    return this.__super__.openChat.apply(this, arguments);
                },
            },

            ChatBoxView: {
                _show: function (focus) {
                    /* With inVerse, we only have one chat visible at any one
                     * time. So before opening a chat, we make sure all other
                     * chats are hidden.
                     */
                    if (!this.model.get('hidden')) {
                        _.each(this.__super__._converse.chatboxviews.xget(this.model.get('id')), function (view) {
                            view.hide();
                            view.model.set({'hidden': true});
                        });
                        return this.__super__._show.apply(this, arguments);
                    }
                }
            },

            ChatRoomView: {
                afterShown: function (focus) {
                    /* Make sure chat rooms are scrolled down when opened
                     */
                    this.scrollDown();
                    if (focus) {
                        this.focus();
                    }
                    return this.__super__.afterShown.apply(this, arguments);
                }
            }
        }
    });
}));
