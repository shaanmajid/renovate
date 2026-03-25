import type { Category } from '../../../constants/index.ts';
import { DockerDatasource } from '../../datasource/docker/index.ts';
import type { DepTypeMetadata } from '../types.ts';
import { extractPackageFile } from './extract.ts';

export { extractPackageFile };

export const url = 'https://docs.docker.com/build/concepts/dockerfile';
export const categories: Category[] = ['docker'];

export const defaultConfig = {
  managerFilePatterns: [
    '/(^|/|\\.)([Dd]ocker|[Cc]ontainer)file$/',
    '/(^|/)([Dd]ocker|[Cc]ontainer)file[^/]*$/',
  ],
};

export const supportedDatasources = [DockerDatasource.id];

export const knownDepTypes: DepTypeMetadata[] = [
  {
    depType: 'syntax',
    prettyDepType: 'Syntax',
    description:
      'The `# syntax=` parser directive at the top of the Dockerfile',
  },
  {
    depType: 'stage',
    prettyDepType: 'Stage',
    description: 'An intermediate `FROM` instruction in a multi-stage build',
  },
  {
    depType: 'final',
    prettyDepType: 'Final',
    description:
      'The last `FROM` instruction in the Dockerfile (the final build stage)',
  },
];
