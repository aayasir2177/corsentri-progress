import {defineConfig,globalIgnores} from 'eslint/config';
import next from 'eslint-config-next/core-web-vitals';
export default defineConfig([...next,{rules:{'@next/next/no-img-element':'off','react-hooks/set-state-in-effect':'off','react/no-unescaped-entities':'off'}},globalIgnores(['out/**','.next/**'])]);
