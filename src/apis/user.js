import axios from 'axios';

const baseUrl ='https://tranquil-basin-75437.herokuapp.com/api';



//POST /api/users/login 使用者號登入 

//POST /api/users 註冊自己的帳號
//GET /api/users/:id 取得某一位user的資料
export const getUsers = async (id) => {
  const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcjFAZXhhbXBsZS5jb20iLCJuYW1lIjoidXNlcjEiLCJhdmF0YXIiOiJodHRwczovL2kucHJhdmF0YXIuY2MvMzAwP2ltZz03MiIsImludHJvZHVjdGlvbiI6InByYWVzZW50aXVtIHF1byBlbmltIGRvbG9yaWJ1cyBoaWMiLCJyb2xlIjoidXNlciIsImFjY291bnQiOiJ1c2VyMSIsImNvdmVyIjoiaHR0cHM6Ly9sb3JlbWZsaWNrci5jb20vNjQwLzQ4MC9jaXR5P2xvY2s9MzYiLCJjcmVhdGVkQXQiOiIyMDIzLTA2LTA5VDA3OjE2OjMzLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA2LTA5VDA3OjE2OjMzLjAwMFoiLCJpYXQiOjE2ODYzMTQyNzMsImV4cCI6MTY4ODkwNjI3M30.NLl7ruyc2FBqWpnPv_Ixu_SMnA9lVS5QDyQdexrma70'
  //const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${baseUrl}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error:cannot get user', error);
    }
  };
//GET /api/users/:id/tweets 看見某使用者發過的推文
export const getUserTweets = async (id) => {
  const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcjFAZXhhbXBsZS5jb20iLCJuYW1lIjoidXNlcjEiLCJhdmF0YXIiOiJodHRwczovL2kucHJhdmF0YXIuY2MvMzAwP2ltZz03MiIsImludHJvZHVjdGlvbiI6InByYWVzZW50aXVtIHF1byBlbmltIGRvbG9yaWJ1cyBoaWMiLCJyb2xlIjoidXNlciIsImFjY291bnQiOiJ1c2VyMSIsImNvdmVyIjoiaHR0cHM6Ly9sb3JlbWZsaWNrci5jb20vNjQwLzQ4MC9jaXR5P2xvY2s9MzYiLCJjcmVhdGVkQXQiOiIyMDIzLTA2LTA5VDA3OjE2OjMzLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA2LTA5VDA3OjE2OjMzLjAwMFoiLCJpYXQiOjE2ODYzMTQyNzMsImV4cCI6MTY4ODkwNjI3M30.NLl7ruyc2FBqWpnPv_Ixu_SMnA9lVS5QDyQdexrma70'
  //const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${baseUrl}/users/${id}/tweets`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error:cannot get user tweet', error);
    }
  };

//GET /api/users/:id/replied_tweets 看見某使用者發過回覆的推文
export const getUserRepliedTweets = async (id) => {
  const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcjFAZXhhbXBsZS5jb20iLCJuYW1lIjoidXNlcjEiLCJhdmF0YXIiOiJodHRwczovL2kucHJhdmF0YXIuY2MvMzAwP2ltZz03MiIsImludHJvZHVjdGlvbiI6InByYWVzZW50aXVtIHF1byBlbmltIGRvbG9yaWJ1cyBoaWMiLCJyb2xlIjoidXNlciIsImFjY291bnQiOiJ1c2VyMSIsImNvdmVyIjoiaHR0cHM6Ly9sb3JlbWZsaWNrci5jb20vNjQwLzQ4MC9jaXR5P2xvY2s9MzYiLCJjcmVhdGVkQXQiOiIyMDIzLTA2LTA5VDA3OjE2OjMzLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA2LTA5VDA3OjE2OjMzLjAwMFoiLCJpYXQiOjE2ODYzMTQyNzMsImV4cCI6MTY4ODkwNjI3M30.NLl7ruyc2FBqWpnPv_Ixu_SMnA9lVS5QDyQdexrma70'
  //const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${baseUrl}/users/${id}/replied_tweets`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error:cannot get user replied tweet', error);
    }
  };

//GET /api/users/:id/likes 看見某使用者點過的 Like
export const getUserLike = async (id) => {
  const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcjFAZXhhbXBsZS5jb20iLCJuYW1lIjoidXNlcjEiLCJhdmF0YXIiOiJodHRwczovL2kucHJhdmF0YXIuY2MvMzAwP2ltZz03MiIsImludHJvZHVjdGlvbiI6InByYWVzZW50aXVtIHF1byBlbmltIGRvbG9yaWJ1cyBoaWMiLCJyb2xlIjoidXNlciIsImFjY291bnQiOiJ1c2VyMSIsImNvdmVyIjoiaHR0cHM6Ly9sb3JlbWZsaWNrci5jb20vNjQwLzQ4MC9jaXR5P2xvY2s9MzYiLCJjcmVhdGVkQXQiOiIyMDIzLTA2LTA5VDA3OjE2OjMzLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA2LTA5VDA3OjE2OjMzLjAwMFoiLCJpYXQiOjE2ODYzMTQyNzMsImV4cCI6MTY4ODkwNjI3M30.NLl7ruyc2FBqWpnPv_Ixu_SMnA9lVS5QDyQdexrma70'  
  //const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${baseUrl}/users/${id}/likes`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error:cannot get user likes', error);
    }
  };
//GET /api/users/:id/followings 看見某使用者所有跟隨中的人
//GET /api/users/:id/followers 看見某使用者的所有跟隨者
//PUT /api/users/:id 編輯自己setting頁的資料 ( name, introduction, account, eamil, password )
//PUT /api/users/:id/profile 編輯自己Profile頁的資料 ( name, introduction, avatar, cover )
//GET /api/users/topFollowers 回傳 10 位最多followers的user


//先寫來測試
//getUsers(4);
//getUserLike(2);
//getUserTweets(14);
//getUserRepliedTweets(14);
