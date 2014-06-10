ALL_TESTS = $(shell find ./test/unit ./test/e2e -name "*-test.js")
REPORTER="dot"
ONLY=.

test-node:
	./node_modules/.bin/mocha $(ALL_TESTS) --reporter=$(REPORTER) -g $(ONLY) --bail

test-watch:
	./node_modules/.bin/mocha $(ALL_TESTS) --reporter=$(REPORTER) -g $(ONLY) --bail --watch ./app ./test
