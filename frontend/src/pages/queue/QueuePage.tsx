import { usePlayerStore } from "@/stores/usePlayerStore";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableItem from "./components/SortableItem";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"; // ✅ Importando ScrollArea

export default function QueuePage() {
  const { queue, removeFromQueue, clearQueue, reorderQueue } = usePlayerStore();
  const [items, setItems] = useState(queue);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item._id === active.id);
      const newIndex = items.findIndex((item) => item._id === over.id);
      const newOrder = arrayMove(items, oldIndex, newIndex);
      setItems(newOrder);
      reorderQueue(oldIndex, newIndex);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Fila de Reprodução</h1>
      <Card>
        <CardContent>
          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={items.map((song) => song._id)} strategy={verticalListSortingStrategy}>
              {/* ✅ Adicionando ScrollArea */}
              <ScrollArea className="h-80 overflow-y-auto">
                <div className="space-y-2">
                  {items.map((song) => (
                    <SortableItem key={song._id} id={song._id} song={song} onRemove={removeFromQueue} />
                  ))}
                </div>
              </ScrollArea>
            </SortableContext>
          </DndContext>
          <div className="mt-4 flex justify-between">
            <Button variant="outline" onClick={clearQueue}>Limpar Fila</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
