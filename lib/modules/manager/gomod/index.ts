import type { Category } from '../../../constants/index.ts';
import { GoDatasource } from '../../datasource/go/index.ts';
import { GolangVersionDatasource } from '../../datasource/golang-version/index.ts';
import type { DepTypeMetadata } from '../types.ts';
import { updateArtifacts } from './artifacts.ts';
import { extractPackageFile } from './extract.ts';
import { updateDependency } from './update.ts';

export { extractPackageFile, updateDependency, updateArtifacts };

export const displayName = 'Go Modules';
export const url = 'https://go.dev/ref/mod';
export const categories: Category[] = ['golang'];

export const defaultConfig = {
  managerFilePatterns: ['/(^|/)go\\.mod$/'],
  pinDigests: false,
};

export const supportedDatasources = [
  GoDatasource.id,
  GolangVersionDatasource.id,
];

export const knownDepTypes: DepTypeMetadata[] = [
  {
    depType: 'golang',
    prettyDepType: 'Go Version',
    description: 'The `go` directive specifying the minimum Go version',
  },
  {
    depType: 'toolchain',
    prettyDepType: 'Toolchain',
    description:
      'The `toolchain` directive specifying the Go toolchain version',
  },
  {
    depType: 'require',
    prettyDepType: 'Require',
    description: 'A direct module dependency in a `require` block',
  },
  {
    depType: 'indirect',
    prettyDepType: 'Indirect Require',
    description:
      'An indirect module dependency (annotated with `// indirect` in a `require` block)',
  },
  {
    depType: 'replace',
    prettyDepType: 'Replace',
    description: 'A module replacement directive in a `replace` block',
  },
  {
    depType: 'tool',
    prettyDepType: 'Tool',
    description: 'A tool dependency in a `tool` block (Go 1.24+)',
  },
];
