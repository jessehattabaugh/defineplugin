# defineplugin
testing the behavior of the webpack defineplugin

## purpose

I made this branch to experiment with the behavior of DefinePlugin when multiple instances are used.

## conclusion

The first DefinePlugin replaces it's variables, so that when the second runs the variables no longer exist. Therefore you can't override variables that are set by one DefinePlugin in a subsequent instance.
