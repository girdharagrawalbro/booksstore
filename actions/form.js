"use server"

import fs from "fs/promises"

export const submitAction = async (e) => {
    console.log(e.get("name"))
    let a = await fs.writeFile("data.txt", `Name is ${e.get("name")}, ${e.get("email")}, ${e.get("message")}`)
    console.log(a)
  }