import './App.css';
import Alert from './components/ui/Alert/Alert';
import { BellRing } from 'lucide-react';
import { NotebookPen } from 'lucide-react';
function App() {
  return (
    <>
      <Alert title='Alert Title' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Vitae eum saepe praesentium ullam magnam dolorum ut eos a 
        ipsam sint. A, odio minima? Velit aliquid sunt fuga accusamus,
         beatae aliquam.' icon={BellRing} styles="alert-wrapper" />

         
      <Alert title='Alert Title2' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Vitae eum saepe praesentium ullam magnam dolorum ut eos a 
        ipsam sint. A, odio minima? Velit aliquid sunt fuga accusamus,
         beatae aliquam.' icon={NotebookPen} styles="alert-2"  />

      <Alert title='Alert Title3' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Vitae eum saepe praesentium ullam magnam dolorum ut eos a 
        ipsam sint. A, odio minima? Velit aliquid sunt fuga accusamus,
         beatae aliquam.' icon={BellRing} styles="2px dotted blue"  />

      <Alert title='Alert Title4' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Vitae eum saepe praesentium ullam magnam dolorum ut eos a 
        ipsam sint. A, odio minima? Velit aliquid sunt fuga accusamus,
         beatae aliquam.' icon={BellRing} styles="2px dotted red"  />


    </>
  );
}

export default App;
