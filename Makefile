# You can set these variables from the command line.
BOWER           ?= node_modules/.bin/bower
BUNDLE          ?= ./.bundle/bin/bundle
SASS            ?= ./.bundle/bin/sass
HTTPSERVE		?= ./node_modules/.bin/http-server

.PHONY: all
all: dev css

.PHONY: help
help:
	@echo "Please use \`make <target>' where <target> is one of the following:"
	@echo ""
	@echo " all           A synonym for 'make dev'."
	@echo " changes       Make an overview of all changed/added/deprecated items added to the documentation."
	@echo " clean         Remove downloaded the stamp-* guard files as well as all NPM, bower and Ruby packages."
	@echo " dev           Set up the development environment. To force a fresh start, run 'make clean' first."
	@echo " css           Generate CSS from the Sass files."
	@echo " serve         Serve this directory via a webserver on port 8000."
	@echo " stamp-bower   Install bower dependencies and create the guard file stamp-bower which will prevent those dependencies from being installed again."
	@echo " stamp-npm     Install NPM dependencies and create the guard file stamp-npm which will prevent those dependencies from being installed again."
	@echo " stamp-bundler Install Bundler (Ruby) dependencies and create the guard file stamp-bundler which will prevent those dependencies from being installed again."
	@echo " watch         Tells Sass to watch the .scss files for changes and then automatically update the CSS files."

########################################################################
## Miscellaneous

.PHONY: serve
serve: stamp-npm
	$(HTTPSERVE) -p 8001 -c -1

########################################################################
## Install dependencies

stamp-npm: package.json
	npm install
	cd node_modules/converse.js && make dev && cd ../../
	touch stamp-npm

stamp-bower: stamp-npm bower.json
	$(BOWER) install
	touch stamp-bower

stamp-bundler: Gemfile
	mkdir -p .bundle
	gem install --user bundler --bindir .bundle/bin
	$(BUNDLE) install --path .bundle --binstubs .bundle/bin
	touch stamp-bundler

.PHONY: clean
clean:
	-rm -f stamp-npm stamp-bower stamp-bundler
	-rm -rf node_modules components .bundle

.PHONY: dev
dev: stamp-bower stamp-bundler


########################################################################
## Builds

.PHONY: css
css: css/inverse.css

css/inverse.css:: stamp-bundler stamp-bower sass FORCE
	$(SASS) -I ./components/bourbon/app/assets/stylesheets/ sass/inverse.scss css/inverse.css

.PHONY: watch
watch: stamp-bundler
	$(SASS) --watch -I ./components/bourbon/app/assets/stylesheets/ sass/inverse.scss:css/inverse.css

FORCE:
