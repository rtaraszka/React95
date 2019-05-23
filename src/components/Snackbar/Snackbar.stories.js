import React from "react";
import { storiesOf } from "@storybook/react";

import { Snackbar, Button, Toolbar } from "../";

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
  ));
