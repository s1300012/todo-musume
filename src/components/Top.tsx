import { useRef } from "react";
import CharacterDisplay from "./characters/CharacterDisplay";
import TaskList from "./todo/TaskList";

const Top = () => {
  const characterDisplayRef = useRef<{ refreshCharacterData: () => void }>(null);

  return (
    <div>
      <TaskList characterDisplayRef={characterDisplayRef} />
      <CharacterDisplay ref={characterDisplayRef} />
    </div>
  );
};

export default Top;
