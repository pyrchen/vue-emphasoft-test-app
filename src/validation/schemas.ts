import { RuleExpression } from 'vee-validate';

export const LogInSchema: Record<string, RuleExpression<unknown>> = {
  username: 'required|minMaxLength:4,16|noExtraSymbols',
  password: 'required|minMaxLength:6,30',
};

export const EditUserSchema: Record<string, RuleExpression<unknown>> = {
  username: LogInSchema.username,
  first_name: 'required|minMaxLength:2,16|eng',
  last_name: 'required|minMaxLength:2,24|eng',
};
