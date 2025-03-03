import { Button } from "@/components/ui/button";
import { ListPlus, Play } from "lucide-react";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { Song } from "@/types";
import { useAuthStore } from "@/stores/useAuthStore"; // Correção: Usando a store de autenticação

interface PlayButtonProps {
  song: Song;
}

const PlayButton: React.FC<PlayButtonProps> = ({ song }) => {
  const addToQueue = usePlayerStore((state) => state.addToQueue);
  const { isAdmin } = useAuthStore(); // Obtém a informação se o usuário é admin

  return (
    <div className="flex gap-2">
      {/* Botão de adicionar à fila - visível para todos */}
      <Button
        size="icon"
        variant="ghost"
        className="hover:text-white text-zinc-400"
        onClick={() => addToQueue(song)}
      >
        <ListPlus className="h-5 w-5" />
      </Button>

      {/* Botão de Play - apenas admins podem ver */}
      {isAdmin && (
        <Button
          size="icon"
          variant="ghost"
          className="hover:text-white text-green-400"
          onClick={() => console.log("Tocar música", song.title)}
        >
          <Play className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default PlayButton;
