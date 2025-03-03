import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GripVertical, Trash2 } from "lucide-react";

interface SortableItemProps {
  id: string;
  song: { _id: string; title: string; artist: string };
  onRemove: (id: string) => void;
}

export default function SortableItem({ id, song, onRemove }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card ref={setNodeRef} style={style} className="flex items-center justify-between p-3">
      <div {...attributes} {...listeners} className="cursor-grab flex items-center gap-2">
        <GripVertical className="text-gray-400" />
        <span className="font-medium">{song.title}</span> - <span className="text-gray-500">{song.artist}</span>
      </div>
      <Button variant="destructive" size="icon" onClick={() => onRemove(song._id)}>
        <Trash2 size={16} />
      </Button>
    </Card>
  );
}
