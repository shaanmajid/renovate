import type { DepTypeMetadata } from '../types.ts';

export const knownDepTypes = [
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
] as const satisfies DepTypeMetadata[];

export type DockerfileDepType = (typeof knownDepTypes)[number]['depType'];
