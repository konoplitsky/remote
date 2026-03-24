import App from './App';
import { createBridgeComponent } from '@module-federation/bridge-react/v18';

export default createBridgeComponent({
  rootComponent: App
});
