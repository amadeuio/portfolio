import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import styles from './ContactEmail.module.scss';

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
    <Tooltip
      componentsProps={{
        tooltip: {
          sx: {
            padding: 1.3,
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: 11,
          },
        },
      }}
      placement="top"
      onOpen={handleTooltipOpen}
      title={tooltipTitle}
      arrow
    >
      <span className={styles.email} onClick={copyToClipboard}>
        {email}
      </span>
    </Tooltip>
  );
};

export default ContactEmail;
