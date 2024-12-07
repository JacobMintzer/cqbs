import mantine from 'eslint-config-mantine';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';

export default tseslint.config(...mantine, {
  ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}'],
  plugins: { ["react"]: react },
  rules: {
    "react/jsx-key": "error"
  }
});
