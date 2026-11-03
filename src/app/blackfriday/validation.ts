const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LOCAL_LENGTH = 64;
const MAX_EMAIL_DOMAIN_LENGTH = 255;

export const isValidEmail = (value: string) => {
  const email = value.trim().toLowerCase();
  const at = email.indexOf("@");
  if (at < 1 || at !== email.lastIndexOf("@")) return false;

  const local = email.slice(0, at);
  const domain = email.slice(at + 1);
  if (
    local.length > MAX_EMAIL_LOCAL_LENGTH ||
    domain.length < 3 ||
    domain.length > MAX_EMAIL_DOMAIN_LENGTH
  ) {
    return false;
  }
  if (local.includes(" ") || domain.includes(" ")) return false;

  const lastDot = domain.lastIndexOf(".");
  if (lastDot < 1 || lastDot === domain.length - 1) return false;
  if (domain.includes("..")) return false;

  return true;
};

export const isValidName = (value: string) => {
  const name = value.trim();
  return name.length >= 2 && name.length <= MAX_NAME_LENGTH && /\p{L}/u.test(name);
};

export const phoneDigits = (value: string) => {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("55") && (digits.length === 12 || digits.length === 13)) {
    digits = digits.slice(2);
  }
  return digits.slice(0, 11);
};

export const isValidPhone = (value: string) => {
  const digits = phoneDigits(value);
  if (digits.length !== 10 && digits.length !== 11) return false;

  const ddd = Number(digits.slice(0, 2));
  if (!Number.isInteger(ddd) || ddd < 11 || ddd > 99) return false;

  const first = digits[2];
  if (digits.length === 11) return first === "9";
  return first >= "2" && first <= "5";
};

export const normalizePhone = (value: string) => {
  const masked = maskPhone(value);
  if (!isValidPhone(masked)) return null;
  return masked;
};

export const maskPhone = (value: string) => {
  const digits = phoneDigits(value);
  if (!digits) return "";
  if (digits.length === 1) return `(${digits}`;

  const ddd = digits.slice(0, 2);
  const rest = digits.slice(2);
  if (!rest) return `(${ddd}) `;

  const mobile = rest[0] === "9";
  if (mobile) {
    if (rest.length <= 5) return `(${ddd}) ${rest}`;
    return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5, 9)}`;
  }

  if (rest.length <= 4) return `(${ddd}) ${rest}`;
  return `(${ddd}) ${rest.slice(0, 4)}-${rest.slice(4, 8)}`;
};
