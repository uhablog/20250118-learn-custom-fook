import fetchMock from 'jest-fetch-mock';
import { renderHook, waitFor } from '@testing-library/react';
import { describe, beforeEach, test, expect } from '@jest/globals';
import { useFetch } from "./useFetch";

describe('useFetchData', () => {
  const mockData = { message: 'Hello, World!'};

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('should fetch data successfully', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const { result } = renderHook(() => useFetch<{message: string}>('https://api.example.com/data'));

    // 初期状態をテスト
    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();

    // 非同期処理の完了を待つ
    await waitFor(() => expect(result.current.loading).toBe(false));

    // 最終状態をテスト
    expect(result.current.data).toEqual(mockData);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });
});
