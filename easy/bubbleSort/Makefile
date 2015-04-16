.PHONY: all test

NODE_BIN=./node_modules/.bin

all: lint test

test:
	$(NODE_BIN)/mocha

lint:
	$(NODE_BIN)/jshint src/

