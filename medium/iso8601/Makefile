.PHONY: all test node_modules clean

NODE_BIN=./node_modules/.bin

all: node_modules lint test

test:
	$(NODE_BIN)/mocha

lint:
	$(NODE_BIN)/jshint src/

node_modules: package.json
	npm install

clean:
	npm cache clean
	-rm -R node_modules/
