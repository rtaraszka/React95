import React from "react";
import { storiesOf } from "@storybook/react";

import Snackbar from "./Snackbar";

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
    <Snackbar>Your post has been submitted successfully!</Snackbar>
  ));
