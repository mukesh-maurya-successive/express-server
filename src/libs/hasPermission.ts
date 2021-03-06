import { permissions } from './constants';

export default function hasPermission(module: string, role: string, type: string): boolean {
  const permission = permissions[module];
  if (!permission || !permission[type]) {
    console.log(`\n ${role} do not have permission to ${type}  for the module ${module}`);
    return false;
  }
  if (!permission[type].includes(role)) {
    console.log(`\n ${role} do not have permission to ${type} for the module ${module}`);
    return false;
  }
  console.log(`\n ${role} has permission to ${type} for the module ${module}`);
  return true;
}
