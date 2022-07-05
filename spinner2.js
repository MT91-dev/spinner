const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
let timer = 200;

for (let element of spinner){
  setTimeout(() => {
    process.stdout.write(element);
  }, timer);
  timer += 200;
};