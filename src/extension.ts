import { ExtensionContext, commands } from 'vscode';

import { runCommand } from './command';


export function activate(context: ExtensionContext) {

	context.subscriptions.push(commands.registerCommand('tortoise-svn-tools.showLog', runCommand('log')));
	context.subscriptions.push(commands.registerCommand('tortoise-svn-tools.showDiff', runCommand('diff')));
	context.subscriptions.push(commands.registerCommand('tortoise-svn-tools.getBlame', runCommand('blame /startrev 1 /endrev HEAD')));
	context.subscriptions.push(commands.registerCommand('tortoise-svn-tools.getLatest', runCommand('update')));
	context.subscriptions.push(commands.registerCommand('tortoise-svn-tools.commitChanges', runCommand('commit')));
}

export function deactivate() {}
