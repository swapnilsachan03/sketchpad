import { Em, Flex, Heading } from "@radix-ui/themes";
import ProfileButton from "@components/profile-button";
import NewSketch from "./components/new-sketch";
import CreateSketchModal from "./components/create-sketch-modal";
import { useState } from "react";

const Home = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const toggleCreateModalOpen = () => setIsCreateModalOpen(prev => !prev);

  return (
    <Flex direction="column" gap="8" p="8" height="100vh">
      <Flex align="start" justify="between" width="100%">
        <Flex direction="column" gap="1">
          <Heading size="8" weight="light">
            Projects
          </Heading>

          <Em>Recent sketches and drawings</Em>
        </Flex>

        <ProfileButton />
      </Flex>

      <Flex wrap="wrap">
        <NewSketch onOpen={toggleCreateModalOpen} />
      </Flex>

      {isCreateModalOpen ? (
        <CreateSketchModal onClose={toggleCreateModalOpen} />
      ) : null}
    </Flex>
  );
};

export default Home;
