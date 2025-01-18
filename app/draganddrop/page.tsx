'use client';
import { useDragAndDrop } from "@/hooks/useDragAndDrop";

type Item = {
  id: number;
  name: string;
}

export default function DragAndDropPage() {

  const initialItems: Item[] = [
    { id: 1, name: 'Item1'},
    { id: 2, name: 'Item2'},
    { id: 3, name: 'Item3'},
    { id: 4, name: 'Item4'},
    { id: 5, name: 'Item5'},
    { id: 6, name: 'Item6'},
  ]

  const { items, onDragStart, onDragOver, onDragEnd } = useDragAndDrop<Item>(initialItems);

  return (
    <>
      <h1>Drag And Drop</h1>
      <ul>
        {items.map((item, index) => (
          <li
            key={item.id}
            draggable
            onDragStart={() => onDragStart(index)}
            onDragOver={(e) => {
              e.preventDefault();
              onDragOver(index);
            }}
            onDragEnd={onDragEnd}
          >{item.name}</li>
        ))}
      </ul>
    </>
  )
};