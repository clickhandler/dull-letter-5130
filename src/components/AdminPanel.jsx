import React, { useState } from "react";

import { Button, Stack } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const AdminPanel = () => {
  const [headOne, setHeadOne] = useState("");
  const [para, setPara] = useState("");
  const [date, setDate] = useState("");
  const [Img, setImg] = useState("");

  function AddData(e) {
    e.preventDefault();
    let data = { headOne, para, date, Img };
    fetch("http://localhost:3000/calenders", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type":"application/json",
      },
     
    }).then((result) => {
      result
        .json()
        .then((response) => {
          console.log(response);
        })
        .catch((Err) => {
          console.log("Error");
        });
    });
    console.log(data);

    setHeadOne("");

    setPara("");
    setDate("");
    setImg("");
  }

  return (
    <>
      <div>
        <h1>AdminPanel</h1>
        <form style={{ width: "50%", margin: "auto" }} onSubmit={AddData}>
          <Stack>
            <Input
              type="text"
              placeholder="Heading"
              value={headOne}
              onChange={(e) => setHeadOne(e.target.value)}
            />

            <Input
              type="text"
              placeholder="Para"
              value={para}
              onChange={(e) => setPara(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Image Url"
              value={Img}
              onChange={(e) => setImg(e.target.value)}
            />
            <Button colorScheme="blue" type="submit">
              Add data
            </Button>
          </Stack>
        </form>
      </div>
    </>
  );
};

export default AdminPanel;
