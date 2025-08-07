export default function formatPhoneNumber(value) {
  if (!value) return value; // Handle empty input

  const phoneNumber = ("" + value).replace(/[^\d]/g, ""); // Remove non-digits
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber; // 1-3 digits

  if (phoneNumberLength < 7) {
    // 4-6 digits
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  // 7+ digits
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
}
