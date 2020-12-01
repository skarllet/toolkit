import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

export default [
  {
    input: "src/index.ts",
    external: [
      ...Object.keys(pkg.dependencies || {})
    ],
    output: [
      {
        format: 'cjs',
        file: pkg.main,
      },
      {
        format: 'es',
        file: pkg.module,
      },
    ],
    plugins: [
      typescript(),
    ]
  }
];
