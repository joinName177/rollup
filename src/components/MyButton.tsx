import React from 'react';
import { Button } from 'antd';

interface MyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ children, onClick }) => {
  return (
    <Button type='primary' onClick={onClick}>
      {children}
    </Button>
  );
};

export default MyButton;
