import './App.css';
import Alert from './components/ui/Alert/Alert';
import { BellRing } from 'lucide-react';
import { NotebookPen } from 'lucide-react';
import { Ban } from 'lucide-react';
import { Box } from 'lucide-react';
import { BicepsFlexed } from 'lucide-react';
function App() {
  return (
    <>
      <Alert title='Alert Title' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Vitae eum saepe praesentium ullam magnam dolorum ut eos a 
        ipsam sint. A, odio minima? Velit aliquid sunt fuga accusamus,
         beatae aliquam.' icon={<BellRing/>} type="alert-default" />

         
      <Alert title='Alert Title2' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Vitae eum saepe praesentium ullam magnam dolorum ut eos a 
        ipsam sint. A, odio minima? Velit aliquid sunt fuga accusamus,
         beatae aliquam.' icon={<NotebookPen/>} type="alert-info"  />

      <Alert title='Alert Title3' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Vitae eum saepe praesentium ullam magnam dolorum ut eos a 
        ipsam sint. A, odio minima? Velit aliquid sunt fuga accusamus,
         beatae aliquam.' icon={   <Ban />} type="alert-warning"  />

      <Alert title='Alert Title4' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Vitae eum saepe praesentium ullam magnam dolorum ut eos a 
        ipsam sint. A, odio minima? Velit aliquid sunt fuga accusamus,
         beatae aliquam.' icon={  <Box />} type="alert-error"  />

      <Alert title='Alert Title5' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Vitae eum saepe praesentium ullam magnam dolorum ut eos a 
        ipsam sint. A, odio minima? Velit aliquid sunt fuga accusamus,
         beatae aliquam.' icon={ <BicepsFlexed />} type="alert-success"  />


    </>
  );
}

export default App;
