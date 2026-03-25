import type { Category } from '../../../constants/index.ts';
import { GithubTagsDatasource } from '../../datasource/github-tags/index.ts';
import { NodeVersionDatasource } from '../../datasource/node-version/index.ts';
import { NpmDatasource } from '../../datasource/npm/index.ts';
import type { DepTypeMetadata } from '../types.ts';

export { updateArtifacts } from './artifacts.ts';
export { detectGlobalConfig } from './detect.ts';
export { extractAllPackageFiles } from './extract/index.ts';
export { getRangeStrategy } from './range.ts';
export {
  bumpPackageVersion,
  updateDependency,
  updateLockedDependency,
} from './update/index.ts';

export const supportsLockFileMaintenance = true;
export const lockFileNames = [
  'package-lock.json',
  'pnpm-lock.yaml',
  'yarn.lock',
];

export const displayName = 'npm';
export const url = 'https://docs.npmjs.com';
export const categories: Category[] = ['js'];

export const defaultConfig = {
  managerFilePatterns: [
    '/(^|/)package\\.json$/',
    '/(^|/)pnpm-workspace\\.yaml$/',
    '/(^|/)\\.yarnrc\\.yml$/',
  ],
  digest: {
    prBodyDefinitions: {
      Change:
        '{{#if displayFrom}}`{{{displayFrom}}}` → {{else}}{{#if currentValue}}`{{{currentValue}}}` → {{/if}}{{/if}}{{#if displayTo}}`{{{displayTo}}}`{{else}}`{{{newValue}}}`{{/if}}',
    },
  },
  prBodyDefinitions: {
    Change:
      "[{{#if displayFrom}}`{{{displayFrom}}}` → {{else}}{{#if currentValue}}`{{{currentValue}}}` → {{/if}}{{/if}}{{#if displayTo}}`{{{displayTo}}}`{{else}}`{{{newValue}}}`{{/if}}]({{#if depName}}https://renovatebot.com/diffs/npm/{{replace '/' '%2f' depName}}/{{{currentVersion}}}/{{{newVersion}}}{{/if}})",
  },
};

export const supportedDatasources = [
  GithubTagsDatasource.id,
  NpmDatasource.id,
  NodeVersionDatasource.id,
];

export const knownDepTypes: DepTypeMetadata[] = [
  {
    depType: 'dependency',
    prettyDepType: 'Dependency',
    description: 'Listed under `dependencies`',
  },
  {
    depType: 'devDependency',
    prettyDepType: 'Dev Dependency',
    description: 'Listed under `devDependencies`',
  },
  {
    depType: 'optionalDependency',
    prettyDepType: 'Optional Dependency',
    description: 'Listed under `optionalDependencies`',
  },
  {
    depType: 'peerDependency',
    prettyDepType: 'Peer Dependency',
    description: 'Listed under `peerDependencies`',
  },
  {
    depType: 'engine',
    prettyDepType: 'Engine',
    description: 'Listed under `engines`',
  },
  {
    depType: 'volta',
    prettyDepType: 'Volta',
    description: 'Listed under `volta`',
  },
  {
    depType: 'resolutions',
    prettyDepType: 'Resolutions',
    description: 'Listed under `resolutions` (Yarn)',
  },
  {
    depType: 'packageManager',
    prettyDepType: 'Package Manager',
    description: 'Listed under `packageManager`',
  },
  {
    depType: 'overrides',
    prettyDepType: 'Overrides',
    description: 'Listed under `overrides`',
  },
  {
    depType: 'pnpm.overrides',
    prettyDepType: 'pnpm Overrides',
    description: 'Listed under `pnpm.overrides`',
  },
];
