import { EnvConfig } from '../../../../tools/env/env-config.interface';

export const Config: EnvConfig = {
    BaseEndpoint: 'http://localhost:8080/',
    LoginEndpoint: 'http://localhost:54882/Home/Token',
    LogoutEndpoint: 'http://localhost:8080/'
}; //JSON.parse('<%= ENV_CONFIG %>');