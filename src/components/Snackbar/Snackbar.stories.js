import React from "react";
import { storiesOf } from "@storybook/react";

<<<<<<< HEAD
import { Snackbar, Button, Toolbar } from "../";
=======
import Snackbar from "./Snackbar";
>>>>>>> e381299c69913055c4082f7961b260f60f4f933b

storiesOf("Snackbar", module)
  .addDecorator(story => (
    <div
      style={{
        padding: "5rem",
        background: "teal"
      }}
    >
      {story()}
    </div>
  ))
  .add("default", () => (
<<<<<<< HEAD
    <Snackbar>
      Your post has been submitted successfully!
      <Toolbar style={{ marginTop: "0.5rem", marginBottom: "-0.5rem" }}>
        <Button variant="flat" fullWidth>
          OK
        </Button>
        <Button variant="flat" fullWidth disabled>
          Cancel
        </Button>
      </Toolbar>
    </Snackbar>
=======
    <Snackbar>Your post has been submitted successfully!</Snackbar>
>>>>>>> e381299c69913055c4082f7961b260f60f4f933b
  ));
