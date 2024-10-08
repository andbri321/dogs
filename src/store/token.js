import { TOKEN_POST } from '../Api';
import createAsyncSlice from './helper/createAsyncSlice';

const slice = createAsyncSlice({
  name: 'token',
  fetchConfig: (user) => TOKEN_POST(user),
});

export const fetchToken = slice.asyncAction;

export default slice.reducer;
