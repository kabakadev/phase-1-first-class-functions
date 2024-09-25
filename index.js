function receivesAFunction(callFunc) {
  return callFunc();
}
function returnsANamedFunction() {
  return function namedFunc() {
    return "this is a named func";
  };
}
function returnsAnAnonymousFunction() {
  return function () {
    return "this is an anonymous function";
  };
}
