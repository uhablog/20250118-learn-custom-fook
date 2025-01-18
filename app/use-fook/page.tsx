'use client';
import { useInput } from "@/hooks/useInput";

export default function useFookPage() {

  const [ firstName, changeFirstName ] = useInput();
  const [ lastName, changeLastName ] = useInput();

  return (
    <>
      First Name: 
      <input
        value={firstName}
        onChange={changeFirstName}
      /><br/><br/>
      Last Name:
      <input
        value={lastName}
        onChange={changeLastName}
      />
    </>
  )
}