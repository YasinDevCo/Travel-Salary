export const handleInput = (e, index, otpValues, setOtpValues, inputRefs) => {
  const value = e.target.value;

  if (!/^[0-9]*$/.test(value)) {
    e.target.value = "";
    return;
  }

  const newOtpValues = [...otpValues];
  newOtpValues[index] = value;
  setOtpValues(newOtpValues);

  if (value.length === 1 && index < inputRefs.current.length - 1) {
    inputRefs.current[index + 1].focus();
  } else if (value.length === 0 && index > 0) {
    inputRefs.current[index - 1].focus();
  }
};
