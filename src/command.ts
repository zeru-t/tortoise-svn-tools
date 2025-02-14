import { exec } from 'child_process';


export function runCommand(command: string) {
	return (...args: any[]) => {
		const path = args?.[0]?.fsPath;

		if (!path) return;

		exec(`TortoiseProc.exe /path:"${path}" /command:${command}`);
	};
}
