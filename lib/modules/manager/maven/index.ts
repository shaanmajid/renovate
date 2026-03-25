import type { Category } from '../../../constants/index.ts';
import { DockerDatasource } from '../../datasource/docker/index.ts';
import { MavenDatasource } from '../../datasource/maven/index.ts';
import type { DepTypeMetadata } from '../types.ts';

export { extractAllPackageFiles } from './extract.ts';
export { bumpPackageVersion, updateDependency } from './update.ts';

export const url = 'https://maven.apache.org';
export const categories: Category[] = ['java'];

export const defaultConfig = {
  managerFilePatterns: [
    '/(^|/|\\.)pom\\.xml$/',
    '/^(((\\.mvn)|(\\.m2))/)?settings\\.xml$/',
    '/(^|/)\\.mvn/extensions\\.xml$/',
  ],
};

export const supportedDatasources = [MavenDatasource.id, DockerDatasource.id];

export const knownDepTypes: DepTypeMetadata[] = [
  {
    depType: 'compile',
    prettyDepType: 'Compile',
    description:
      'Dependency with `compile` scope (default); available on all classpaths',
  },
  {
    depType: 'provided',
    prettyDepType: 'Provided',
    description:
      'Dependency with `provided` scope; expected to be supplied by the JDK or container at runtime',
  },
  {
    depType: 'runtime',
    prettyDepType: 'Runtime',
    description:
      'Dependency with `runtime` scope; required at runtime but not for compilation',
  },
  {
    depType: 'test',
    prettyDepType: 'Test',
    description:
      'Dependency with `test` scope; only used for test compilation and execution',
  },
  {
    depType: 'system',
    prettyDepType: 'System',
    description:
      'Dependency with `system` scope; similar to `provided` but the JAR is specified explicitly',
  },
  {
    depType: 'import',
    prettyDepType: 'Import',
    description:
      'Dependency with `import` scope; used to import dependency management from another POM (BOM)',
  },
  {
    depType: 'optional',
    prettyDepType: 'Optional',
    description:
      'Optional dependency (declared with `<optional>true</optional>`)',
  },
  {
    depType: 'build',
    prettyDepType: 'Build',
    description:
      'A build plugin or extension (`<plugin>` or `<extension>` element)',
  },
  {
    depType: 'parent',
    prettyDepType: 'Parent',
    description: 'The parent POM (`<parent>` element)',
  },
];
