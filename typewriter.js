const sentence = "hello there from lighthouse labs";
let start = 0;
for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), start);
  start += 50;
}
setTimeout(() => process.stdout.write('\n'), sentence.length * 50 + 50);