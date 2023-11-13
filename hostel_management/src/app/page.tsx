'use client';
'use client';
import React, { useState, ChangeEvent, useRef } from 'react';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>(new Array(6).fill(null));

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    // Move focus to the next input field if the current input has a value
    if (e.target.value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleVerify = () => {
    const enteredOTP = otp.join('');
    console.log('Entered OTP:', enteredOTP);
  };

  return (
    <div className="mobile-OTP-container">
      <div className="mobile-OTP">
        <div className="overlap-group">
          <div className="text-wrapper">Change</div>
          <p className="div">Please enter the OTP sent to</p>
          <div className="text-wrapper-2">hostelmanagement@info.com</div>
          <p className="p">Didn’t get verification code ?</p>
          <div className="text-wrapper-3">Resend</div>
          <div className="text-wrapper-4">Enter verification code</div>
          <div className="otp-input-container">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                className={`rectangle rectangle-${index + 1}`}
                maxLength={1}
                value={value}
                onChange={(e) => handleChange(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </div>
          <div className="OTP-verification">OTP VERIFICATION</div>
          <div className="rectangle-7" />
          <div className="overlap">
            <button className="verify-proceed" onClick={handleVerify}>
              Verify &amp; Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
