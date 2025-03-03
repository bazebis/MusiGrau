import { useChatStore } from "@/stores/useChatStore";
import { Song } from "@/types";
import { ListPlus } from "lucide-react";

interface AddToQueueButtonProps {
  song: Song;
}

const AddToQueueButton: React.FC<AddToQueueButtonProps> = ({ song }) => {
  const addSongToPlaylist = useChatStore((state) => state.addSongToPlaylist);

  const handleAddToQueue = () => {
    addSongToPlaylist(song._id);
  };

  return (
    <button
      onClick={handleAddToQueue}
      className="px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
    >
      <ListPlus className="size-5 text-black" />
    </button>
  );
};

export default AddToQueueButton;
