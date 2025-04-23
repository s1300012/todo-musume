import { useEffect, useRef, useState } from "react";
import CharacterDisplay from "./characters/CharacterDisplay";
import TaskList from "./todo/TaskList";
import { onSound } from "../utils/music/soundPlayer";
import bgm from "../assets/music/あの子に会える予感的なBGM.mp3"

const Top = () => {
  const characterDisplayRef = useRef<{ refreshCharacterData: () => void } | null>(null);
  const [characterUpdatedAt, setCharacterUpdatedAt] = useState(Date.now()); // 💡これがトリガー

  useEffect(() => {
    onSound(bgm);
  }, []);

  return (
    <div>
      <TaskList
        characterDisplayRef={characterDisplayRef}
        characterUpdatedAt={characterUpdatedAt} // 渡す
      />
      <CharacterDisplay
        ref={characterDisplayRef}
        onCharacterSelected={() => {
          characterDisplayRef.current?.refreshCharacterData();
          setCharacterUpdatedAt(Date.now()); // 💡変更があったことを通知
        }}
      />
    </div>
  );
};


export default Top;
