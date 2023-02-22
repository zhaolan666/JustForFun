export * from './src/message';
import { withInstallFunction } from '@justforfun-ui/utils/';
import Message from './src/method';

export const TassMessage = withInstallFunction(Message, '$message');

export default TassMessage;
