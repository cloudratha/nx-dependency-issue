import { applicationGenerator } from '@nrwl/next';
import { Tree } from '@nrwl/devkit';
import { PluginGeneratorSchema } from './schema';

export default async function (tree: Tree, options: PluginGeneratorSchema) {
  applicationGenerator(tree, {
    name: 'test',
  });
}
