'use client';
import { useFetch } from "@/hooks/useFetch"

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default function FetchPage() {

  const { data, loading, error } = useFetch<Todo[]>('https://jsonplaceholder.typicode.com/todos');

  if (loading) return <>Loading...</>
  if (error) return <>Error {error}</>

  console.log(data);

  return (
    <>
      <h1>Todo一覧</h1>
      {data?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </>
  )
};