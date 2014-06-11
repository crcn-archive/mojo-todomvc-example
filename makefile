ALL_TESTS = $(shell find ./test/unit -name "*-test.js")
REPORTER="dot"
ONLY=.

test-node:
	./node_modules/.bin/mocha $(ALL_TESTS) --reporter=$(REPORTER) -g $(ONLY) --bail

test-watch:
	./node_modules/.bin/mocha $(ALL_TESTS) --reporter=$(REPORTER) -g $(ONLY) --bail --watch ./app ./test


test-cov:
	NODE_ENV=TEST_COV \
	./node_modules/.bin/istanbul cover \
	./node_modules/.bin/_mocha -- $(ALL_TESTS) --ignore-leaks --bail
