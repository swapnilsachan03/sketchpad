import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";

type Props = {
  onClose: () => void;
};

const CreateSketchModal = (props: Props) => {
  const { onClose } = props;

  const [title, setTitle] = useState("");

  return (
    <Dialog.Root open onOpenChange={onClose}>
      <Dialog.Content maxWidth="450px">
        <Dialog.Title mb="0">New sketch</Dialog.Title>

        <Dialog.Description size="2" mb="4">
          Create a brand new sketchboard.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="2" weight="bold">
              Name
            </Text>

            <TextField.Root
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Enter sketch title"
            />
          </label>
        </Flex>

        <Flex gap="2" mt="6" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>

          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CreateSketchModal;
