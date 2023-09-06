import React from 'react';

interface ModalDialogLayoutProps {
  children: React.ReactElement;
}

const ModalDialogLayout = ({ children }: ModalDialogLayoutProps) => {
  return <div>{children}</div>;
};

export default ModalDialogLayout;
