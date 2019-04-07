
import axios from 'axios'

axios.defaults.baseURL = '/data/';
axios.defaults.timeout = 20000;

import './request'
import './response'

export default axios