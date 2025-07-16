import { Tooltip } from '@/components';
import { useState } from 'react';

const ContactEmail = () => {
  const [tooltipTitle, setTooltipTitle] = useState('');
  const email = 'amadeuserras@gmail.com';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setTooltipTitle('Copied!');
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      setTooltipTitle('Error copying to clipboard');
    }
  };

  const handleTooltipOpen = () => {
    setTooltipTitle('Click to Copy');
  };

  return (
    <Tooltip content={tooltipTitle} onTooltipOpen={handleTooltipOpen}>
      <span
        className="border-border bg-absolute cursor-pointer rounded-sm border px-2 py-1 font-mono text-sm"
        onClick={copyToClipboard}
      >
        {email}
      </span>
    </Tooltip>
  );
};

export default ContactEmail;
