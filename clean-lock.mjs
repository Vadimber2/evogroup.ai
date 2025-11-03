import fs from "fs";

const lock = JSON.parse(fs.readFileSync("package-lock.json", "utf8"));
const entries = lock.packages || lock.dependencies || {};

for (const key of Object.keys(entries)) {
    if (key.includes("darwin")) {
        delete entries[key];
    }
}

fs.writeFileSync("package-lock.json", JSON.stringify(lock, null, 2));
console.log("✅ Darwin-specific packages removed");
