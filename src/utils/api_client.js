// THIS IS BASEURL CHANGE WITH YOUR API URL EX.. https://jsonplaceholder.typicode.com/
const baseUrl =
  'https://www.prepostseo.com/apis/checkPlag?key=dd0da041128af2b3c4af6c3b6858a140';
// const baseUrl='https://jsonplaceholder.typicode.com/posts';
// THIS IS DEFAULT CALLBACK, JUST CHANGE IT IF YOU HAVE ANOTHER DEFAULT
const callbackModel = {
  code: 503,
  status: false,
  message: 'Network request failed',
  callback: null,
};

export const sys_get = async ({auth = false, endpoint = ''}) => {
  const token = '';
  var callback = callbackModel;
  try {
    const response = await fetch(baseUrl + endpoint, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: auth ? 'Bearer ' + token : '',
      },
    });
    const data = await response.json();
    callback.code = response.status;
    callback.status = true;
    callback.message = '';
    callback.callback = data;
    return callback;
  } catch (error) {
    // YOU CAN JUST CONSOLE LOG ERROR
    // console.log(error.message);
    // OR DOSOMETHING LIKE RETURN OR POPUP YOUR ERROR
    // callback.message = error.message;
    // return callback;
  }
};
export const sys_post = async ({auth = false, endpoint = '', body = {}}) => {
  const token = '';
  var callback = callbackModel;
  try {
    const response = await fetch(baseUrl + endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: auth ? 'Bearer ' + token : '',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    callback.code = response.status;
    callback.status = response.status;
    callback.message = data.message;
    callback.callback = data.data;
    return callback;
  } catch (error) {}
};

export const sys_post_formdata = async ({
  auth = false,
  endpoint = '',
  body = {},
}) => {
  // var data_send = new FormData();
  // Object.keys(body).map((key, index) => {
  //   data_send.append(key, body[key]);
  // });

  var data_send = [];
  for (var props in body) {
    var encodedKey = encodeURIComponent(props);
    var encodedValue = encodeURIComponent(body[props]);
    data_send.push(encodedKey + '=' + encodedValue);
  }
  data_send = data_send.join("&");
  console.log(data_send)
  var callback = callbackModel;
  try {
    const response = await fetch(baseUrl + endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data_send,
    });
    const data = await response.json();
    callback.code = response.status;
    callback.status = true;
    callback.message = response.statusText;
    callback.callback = data;
    return callback;
  } catch (error) {
    console.log(error);
  }
};
export const sys_del = async ({auth = false, endpoint = ''}) => {
  const token = '';
  var callback = callbackModel;
  try {
    const response = await fetch(baseUrl + endpoint, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: auth ? 'Bearer ' + token : '',
      },
    });
    const data = await response.json();
    callback.code = response.status;
    callback.status = data.status;
    callback.message = data.message;
    callback.callback = data.data;
    return callback;
  } catch (error) {}
};
export const sys_put = async ({auth = false, endpoint = '', body = {}}) => {
  const token = '';
  var callback = callbackModel;
  try {
    const response = await fetch(baseUrl + endpoint, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: auth ? 'Bearer ' + token : '',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    callback.code = response.status;
    callback.status = data.status;
    callback.message = data.message;
    callback.callback = data.data;
    return callback;
  } catch (error) {}
};
