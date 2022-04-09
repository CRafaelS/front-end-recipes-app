export default function validadeLogin({ email }, password) {
  const MIN_PASSWORD_LENGTH = 7;
  const emailRegex = /.+@.+\.com/;
  return (
    emailRegex.test(email) && password.length >= MIN_PASSWORD_LENGTH
  );
}
