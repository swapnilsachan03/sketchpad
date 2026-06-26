import { Flex, Text } from "@radix-ui/themes";
import { PlusCircle } from "lucide-react";

import "./new-sketch.css";

type Props = {
  onOpen: () => void;
};

const NewSketch = (props: Props) => {
  const { onOpen } = props;

  return (
    <Flex
      width="280px"
      height="244px"
      align="center"
      justify="center"
      className="new-sketch-card"
      onClick={onOpen}
    >
      <Flex align="center" direction="column" gap="2">
        <PlusCircle size={60} color="gray" absoluteStrokeWidth />

        <Text size="3" color="gray" weight="medium">
          New Sketch
        </Text>
      </Flex>
    </Flex>
  );
};

export default NewSketch;
