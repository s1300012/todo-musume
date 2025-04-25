import { useEffect, useRef, useState } from "react";
import CharacterDisplay from "./characters/CharacterDisplay";
import TaskList from "./todo/TaskList";
import { onSound } from "../utils/music/soundPlayer";
import {appBGM} from "../utils/music/musicContents"
import AppHeader from "./layout/AppHeader";
import { User } from "firebase/auth";
import background from "../assets/backgound/background.jpg"

type Props = {
  currentUser: User;
};

const Top = ({ currentUser }: Props) => {
  const characterDisplayRef = useRef<{ refreshCharacterData: () => void } | null>(null);
  const [characterUpdatedAt, setCharacterUpdatedAt] = useState(Date.now()); // 💡これがトリガー

  useEffect(() => {
    onSound(appBGM);
  }, []);

  return (
      <div className="relative h-screen w-screen overflow-hidden">
      {/* 背景画像 */}
        <div
          className="fixed top-0 left-0 h-screen w-screen bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
          }}
        />
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
        <AppHeader user={currentUser} />
    </div>
  );
};


export default Top;
