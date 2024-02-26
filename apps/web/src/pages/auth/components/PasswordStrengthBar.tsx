import PasswordStrength from 'react-password-strength-bar';
import { passwordConstraints } from '@teleflow/shared';

export function PasswordStrengthBar({ password }: { password: string }) {
  return <PasswordStrength password={password} minLength={passwordConstraints.minLength} />;
}
