import { useState } from "react";

export const useDragAndDrop = <T>(initialItems: T[]) => {

  const [ items, setItems ] = useState<T[]>(initialItems);
  const [ draggingIndex, setDraggingIndex ] = useState<number | null>(null);

  const onDragStart = (index: number) => {
    setDraggingIndex(index);
  };

  const onDragOver = (index: number) => {
    if (draggingIndex === null || draggingIndex === index) return;

    const updateItems = [...items];
    const [draggedItem] = updateItems.splice(draggingIndex, 1);
    updateItems.splice(index, 0, draggedItem);

    setDraggingIndex(index);
    setItems(updateItems);
  };

  const onDragEnd = () => {
    setDraggingIndex(null);
  }

  return { items, onDragStart, onDragOver, onDragEnd };
};