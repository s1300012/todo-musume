import Modal from "../common/Modal";

type Task = {
  id: string;
  title: string;
  dueDate: string;
  dueTime: string;
  color: string;
  level: number;
  content: string;
};

type Props = {
  isOpen: boolean;
  task: Task | null;
  onCancel: () => void;
  onCompleted: () => void;
};

const CompleteTaskModal = ({ isOpen, task, onCancel, onCompleted }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <div className="text-center space-y-6">
        <p className="text-lg font-semibold">このタスクを完了しますか？</p>

        {task && (
          <div className="rounded p-4 text-left shadow bg-gray-50">
            <div className="flex items-start gap-4">
              <div
                className="w-8 h-8 rounded-full mt-1"
                style={{ backgroundColor: task.color }}
              />
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">タイトル:</span> {task.title}
                </p>
                <p>
                  <span className="font-semibold">期限: </span>
                  <span>{task.dueDate} {"  "} {task.dueTime && ` ${task.dueTime}`}</span>
                </p>
                <p>
                  <span className="font-semibold">レベル:</span> {task.level}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center space-x-4">
          <button
            onClick={onCompleted}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            完了
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            戻る
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CompleteTaskModal;
