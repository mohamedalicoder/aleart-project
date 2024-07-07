import './index.scss';

import { ReactElement, ReactNode } from 'react';
import { X } from 'lucide-react';

interface IProps {
  title: string;
  icon: ReactNode; // Change icon type to ComponentType
  description: string;
  type?: string; // Add type prop to accept custom type
}
const Alert = ({
  title,
  description,
  icon,
  type,
}: IProps): ReactElement => {
  // Rename icon to Icon
  return (
    <div className={type}>
      <div className='alert-header'>
        <div className='title'>
          <span>
            {icon} {/* Use Icon as a component */}
          </span>
          <h4>{title}</h4>
        </div>
        <X className='close' size={25} />
      </div>

      <p>{description}</p>
    </div>
  );
};

export default Alert;
