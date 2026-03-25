import type { Category } from '../../../constants/index.ts';
import { GiteaTagsDatasource } from '../../datasource/gitea-tags/index.ts';
import { GithubDigestDatasource } from '../../datasource/github-digest/index.ts';
import { GithubRunnersDatasource } from '../../datasource/github-runners/index.ts';
import { GithubTagsDatasource } from '../../datasource/github-tags/index.ts';
import type { DepTypeMetadata } from '../types.ts';

export { extractPackageFile } from './extract.ts';

export const displayName = 'GitHub Actions';
export const url = 'https://docs.github.com/en/actions';
export const categories: Category[] = ['ci'];

export const defaultConfig = {
  managerFilePatterns: [
    '/(^|/)(workflow-templates|\\.(?:github|gitea|forgejo)/(?:workflows|actions))/.+\\.ya?ml$/',
    '/(^|/)action\\.ya?ml$/',
  ],
};

export const supportedDatasources = [
  GiteaTagsDatasource.id,
  GithubDigestDatasource.id,
  GithubRunnersDatasource.id,
  GithubTagsDatasource.id,
];

export const knownDepTypes: DepTypeMetadata[] = [
  {
    depType: 'action',
    prettyDepType: 'Action',
    description:
      'A repository-based action reference in a `uses:` field (e.g. `actions/checkout@v4`)',
  },
  {
    depType: 'docker',
    prettyDepType: 'Docker',
    description:
      'A Docker image reference in a `uses:` field (e.g. `uses: docker://alpine:3`)',
  },
  {
    depType: 'container',
    prettyDepType: 'Container',
    description: "A Docker image specified in a job's `container:` field",
  },
  {
    depType: 'service',
    prettyDepType: 'Service',
    description: "A Docker image specified in a job's `services:` field",
  },
  {
    depType: 'github-runner',
    prettyDepType: 'GitHub Runner',
    description:
      'A GitHub-hosted runner version in a `runs-on:` field (e.g. `ubuntu-24.04`)',
  },
  {
    depType: 'uses-with',
    prettyDepType: 'Uses With',
    description:
      'A language/runtime version passed as an input to a versioned action (e.g. `node-version` for `actions/setup-node`)',
  },
];
