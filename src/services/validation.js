// validate.js
export const validatePassword = (password) => {
  if (password.length < 8) {
    return "رمز عبور باید حداقل ۸ کاراکتر باشد.";
  } else if (!/[A-Z]/.test(password)) {
    return "رمز عبور باید حداقل شامل یک حرف بزرگ باشد.";
  } else if (!/[a-z]/.test(password)) {
    return "رمز عبور باید حداقل شامل یک حرف کوچک باشد.";
  } else if (!/[0-9]/.test(password)) {
    return "رمز عبور باید حداقل شامل یک عدد باشد.";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return "رمز عبور باید حداقل شامل یک کاراکتر خاص باشد.";
  } else if (
    password.toLowerCase().includes("password") ||
    password === "12345678"
  ) {
    return "رمز عبور نباید شامل کلمه 'password' یا '12345678' باشد.";
  }
  return null;
};

export const validateUsername = (username) => {
  if (username.length < 7) {
    return "نام کاربری باید حداقل ۷ کاراکتر باشد.";
  } else if (!/^[a-zA-Z]/.test(username)) {
    return "نام کاربری باید با حرف شروع شود.";
  } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
    return "نام کاربری فقط می‌تواند شامل حروف و اعداد باشد.";
  }
  return null;
};

export const validateNationalCode = (nationalCode) => {
  if (!/^\d{10}$/.test(nationalCode)) {
    return "کد ملی باید ۱۰ رقم عددی باشد.";
  }

  const check = parseInt(nationalCode[9]);
  const sum = [...nationalCode]
    .slice(0, 9)
    .reduce((acc, digit, index) => acc + parseInt(digit) * (10 - index), 0);

  const remainder = sum % 11;

  if (
    (remainder < 2 && check === remainder) ||
    (remainder >= 2 && check === 11 - remainder)
  ) {
    return null;
  }

  return "کد ملی نامعتبر است.";
};

export const validateName = (name) => {
  if (name.length < 2) {
    return "نام باید حداقل ۲ کاراکتر باشد.";
  } else if (!/^[\u0600-\u06FF\s]+$/.test(name)) {
    return "نام فقط می‌تواند شامل حروف فارسی و فاصله باشد.";
  }
  return null;
};

export const validatePhoneNumber = (phoneNumber) => {
  if (!/^\d{11}$/.test(phoneNumber)) {
    return "شماره تماس باید ۱۱ رقم عددی باشد.";
  } else if (!/^09\d{9}$/.test(phoneNumber)) {
    return "شماره تماس باید با 09 شروع شود.";
  }
  return null;
};

export const validateBirthDate = (birthDate) => {
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!datePattern.test(birthDate)) {
    return "تاریخ تولد باید در قالب YYYY-MM-DD باشد.";
  }
  const currentDate = new Date();
  const selectedDate = new Date(birthDate);

  if (selectedDate >= currentDate) {
    return "تاریخ تولد نمی‌تواند در آینده باشد.";
  }

  return null;
};

// // validation.js
// export const validateDateOfBirth = ({ day, month, year }) => {
//   if (!day || !month || !year) {
//     return "لطفاً تمام فیلدهای تاریخ تولد را تکمیل کنید.";
//   }

//   // بررسی صحت تاریخ
//   const date = new Date(year, month - 1, day);
//   if (
//     date.getFullYear() !== parseInt(year) ||
//     date.getMonth() !== month - 1 ||
//     date.getDate() !== parseInt(day)
//   ) {
//     return "تاریخ انتخابی معتبر نیست.";
//   }

//   return null;
// };


export const validateGender = (gender) => {
  if (!gender) {
    return "جنسیت را مشخص کنید";
  }
  return null;
};
