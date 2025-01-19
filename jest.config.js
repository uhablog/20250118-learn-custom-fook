import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './', // Next.jsのプロジェクトルート
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

export default createJestConfig(customJestConfig);
