import "./index.scss";

import { ReactElement } from 'react';
import { X } from 'lucide-react';

interface IProps {
  title: string;
  icon: React.ComponentType; // Change icon type to ComponentType
  description: string;
  styles?: string; // Add styles prop to accept custom styles
}
const Alert = ({ title, description, icon: Icon,styles }: IProps): ReactElement => { // Rename icon to Icon
  return (
    <div  className={styles}>
      <div className="titles">
        <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , width:"120px"}}>
        <Icon /> {/* Use Icon as a component */}
        <h4>{title}</h4>
        </div>
     
      <span>
      <X />
      </span>
      </div>
     
      <p>{description}</p>
    </div>
  );
}

export default Alert
