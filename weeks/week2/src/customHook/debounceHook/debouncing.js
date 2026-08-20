let currentClock;

function searchBackend() {
  console.log("backend is calling ");
  // fetch() calling
}

function debouncedSearchBackend() {
  clearTimeout(currentClock);
  currentClock = setTimeout(searchBackend, 30); //clock start 30 sec
}

debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
 