function receivesAFunction(f) {
    f();
}

function returnsANamedFunction() {
    const named = function() {
    } 
    return named
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}