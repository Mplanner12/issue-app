"use client";
import React from "react";
import { TextField } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";
import dynamic from "next/dynamic";
// import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
    ssr: false,
  });
  return (
    <Form className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Slot></TextField.Slot>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMDE placeholder="Description" />
      <Button>Submit New Issue</Button>
    </Form>
  );
};

export default NewIssuePage;
