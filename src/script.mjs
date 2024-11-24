import fs from "fs";
import exercises from "./exercises.json" with { type: "json" };
// import mesocycleAdditions from "./mesocycleAdditions.json" with { type: "json" };

console.log(mesocycleAdditions);

export async function updateJson(filePath, newData) {
  try {
    // get existing file
    const fileData = await fs.readFile(filePath, "utf8", propertyToUpdate);
    const jsonData = JSON.parse(fileData);

    // update new data
    jsonData.propertyToUpdate.push(newData);

    // write to file
    await fs.writeFile(filePath, JSON.stringify(jsonData, null, 4));
    console.log("json updated");
  } catch (error) {
    console.error("Error updating JSON: ", error);
    throw error;
  }
}

export function helloWorld() {
  console.log("Hello world!");
}
