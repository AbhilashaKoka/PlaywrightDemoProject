import { test } from "@playwright/test"

test("Product Page Add to Basket",async ({page}) => {
await page.goto("localhost:2221")
await page.pause()
})

// const addTwoNumber = (a,b) => {
//     console.log("Adding up to two number:")
//     return  a + b
// }