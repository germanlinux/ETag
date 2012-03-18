all: compile test 

test:
	node tests/run.js

compile:
	@find *coffee| xargs -n 1 -t coffee -c 
	@find tests/*coffee| xargs -n 1 -t coffee -c 

