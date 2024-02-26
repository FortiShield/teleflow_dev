export * from './handlebarHelpers';
export * from './getTemplateVariables';

export const teleflowReservedVariableNames = ['body'];

export function isReservedVariableName(variableName: string) {
  return teleflowReservedVariableNames.includes(variableName);
}
