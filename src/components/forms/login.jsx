import React from "react";
import { Box } from "../styledComponent/global";
import { Container } from "../styledComponent/global";
import FormControl from "@mui/material/FormControl";
import Input from "../customMuiGems/InputField";

export default function Login() {
  return (
    <Container>
      <Box>
        <FormControl variant="standard">
            <Input />
            <Input />

        </FormControl>
      </Box>
    </Container>
  );
}
