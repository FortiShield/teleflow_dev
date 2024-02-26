export const areTeleflowEmailCredentialsSet = () => {
  return (
    typeof process.env.TELEFLOW_EMAIL_INTEGRATION_API_KEY !== 'undefined' &&
    process.env.TELEFLOW_EMAIL_INTEGRATION_API_KEY !== ''
  );
};

export const areTeleflowSmsCredentialsSet = () => {
  const isAccountSidSet =
    typeof process.env.TELEFLOW_SMS_INTEGRATION_ACCOUNT_SID !== 'undefined' &&
    process.env.TELEFLOW_SMS_INTEGRATION_ACCOUNT_SID !== '';
  const isTokenSet =
    typeof process.env.TELEFLOW_SMS_INTEGRATION_TOKEN !== 'undefined' &&
    process.env.TELEFLOW_SMS_INTEGRATION_TOKEN !== '';
  const isSenderSet =
    typeof process.env.TELEFLOW_SMS_INTEGRATION_SENDER !== 'undefined' &&
    process.env.TELEFLOW_SMS_INTEGRATION_SENDER !== '';

  return isAccountSidSet && isTokenSet && isSenderSet;
};
