import { useState } from "react";

export const useVisible = (initialVisible: boolean): [
  boolean,
  () => void
] => {
  const [ visible, setVisible ] = useState<boolean>(initialVisible);

  const toggleVisible = () => {
    setVisible(!visible);
  }

  return [ visible, toggleVisible ];
};