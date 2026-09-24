import { spawn, spawnSync, type ChildProcess, type SpawnOptions, type SpawnSyncOptions, type SpawnSyncReturns } from "node:child_process";

export function toBashPath(filePath: string): string {
  if (process.platform === "win32") {
    return filePath.replace(/\\/g, "/");
  }
  return filePath;
}

export function spawnScript(
  scriptPath: string,
  args: readonly string[] = [],
  options: SpawnOptions = {},
): ChildProcess {
  if (process.platform === "win32") {
    return spawn("bash", [toBashPath(scriptPath), ...args], options);
  }
  return spawn(scriptPath, [...args], options);
}

export function spawnScriptSync(
  scriptPath: string,
  args: readonly string[] = [],
  options: SpawnSyncOptions = {},
): SpawnSyncReturns<string | Buffer> {
  if (process.platform === "win32") {
    return spawnSync("bash", [toBashPath(scriptPath), ...args], options);
  }
  return spawnSync(scriptPath, [...args], options);
}
