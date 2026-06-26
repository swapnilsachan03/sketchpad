import { useState } from "react";
import { Flex, Text, TextField, Button, Link, Heading } from "@radix-ui/themes";

import "./signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log({
      email,
      password,
    });
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="8"
      className="signup-container"
    >
      <Heading weight="light" size="8">
        Sketchpad
      </Heading>

      <Flex className="signup-card">
        <Flex direction="column" gap="5" width="100%">
          <Text size="6" weight="bold">
            Signup
          </Text>

          <Flex direction="column" gap="3">
            <Flex direction="column" gap="2">
              <Text as="label" size="2">
                Name
              </Text>

              <TextField.Root
                type="email"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </Flex>

            <Flex direction="column" gap="2">
              <Text as="label" size="2">
                Email
              </Text>

              <TextField.Root
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </Flex>

            <Flex direction="column" gap="2">
              <Text as="label" size="2">
                Password
              </Text>

              <TextField.Root
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </Flex>
          </Flex>

          <Button onClick={handleSubmit} size="3">
            Sign Up
          </Button>

          <Flex alignSelf="start">
            <Link href="/login" size="2" mt="-3" mb="1">
              Already have an account? Log in
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Signup;
