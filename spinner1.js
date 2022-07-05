let timer = 0;

setTimeout(() => {
  process.stdout.write('\r|   ');
}, timer);

timer += 200;

setTimeout(() => {
  process.stdout.write('\r/   ');
}, timer);

timer += 200;


setTimeout(() => {
  process.stdout.write('\r-   ');
}, timer);

timer += 200;


setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, timer);

timer += 200;


setTimeout(() => {
  process.stdout.write('\r|   ');
}, timer);
