// const data = "I love JavaScript";

// await Bun.write("output.txt", data);

const file = await Bun.file("output.txt");
console.log(await file.text());
