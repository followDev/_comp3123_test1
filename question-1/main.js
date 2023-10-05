const lowerCaseWords = (arr) => {
  return new Promise((resolve, reject) => {
    const filteredWords = arr.filter((item) => typeof item === "string");
    const lowerCasedWords = filteredWords.map((word) => word.toLowerCase());

    if (filteredWords.length > 0) {
      resolve(lowerCasedWords);
    } else {
      reject(new Error("No strings found in the array"));
    }
  });
};

const myArray = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(myArray)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });
