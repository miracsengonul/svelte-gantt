import _svelteGanttDependencies from './GanttDependencies.svelte';
import { ComponentCreator, Component } from '../../core/svelte';
import { DependencyModel } from './dependency';

var SvelteGanttDependencies = _svelteGanttDependencies as any as ComponentCreator<Component>;

export { SvelteGanttDependencies, DependencyModel };