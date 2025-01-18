'use client';
import { useState } from "react";

export default function Home() {

  const [ firstName, setFirstName ] = useState<string>('');
  const [ lastName, setLastName ] = useState<string>('');

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

  return (
    <>
      First Name: <input
        value={firstName}
        onChange={handleFirstNameChange}
      /><br/><br/>
      Last Name: <input
        value={lastName}
        onChange={handleLastNameChange}
      />
    </>
  );
}
