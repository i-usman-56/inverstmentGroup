import React from 'react';
import PropTypes from 'prop-types';

const InputFields = ({
  type,
  name,
  title,
  value,
  onChange,
  error = '', // Default parameter
  autocomplete = 'off', // Default parameter
  bgwhite = false // Default parameter
}) => (
  <div>
    <input
      type={type}
      name={name}
      id={name} // Use unique ID if needed
      value={value}
      onChange={onChange}
      className={`${
        bgwhite ? 'bg-white' : 'bg-[#F3F3F3]'
      } rounded-sm outline-none focus:outline-none h-[40px] w-full pl-5 text-[#3C3C3C] text-[14px] leading-[16.7px] tracking-[-1.7%] font-bold ${
        error ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-black'
      } border-2`}
      placeholder={title}
      style={{ color: '#3C3C3C' }}
      autoComplete={autocomplete}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

InputFields.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  autocomplete: PropTypes.string,
  bgwhite: PropTypes.bool
};

export default InputFields;
