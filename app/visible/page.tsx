'use client';
import { useVisible } from "@/hooks/useVisible";

export default function VisiblePage() {

  const [ visible, toggleVisible ] = useVisible(true);

  return (
    <div>
      <h1>Visible Page</h1>
      <button onClick={toggleVisible}>Toggle Visibility</button>
      { visible && <p>Visible</p> }
    </div>
  );
}