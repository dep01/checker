import { dummies_checker } from '../data/dummies';
import {sys_post_formdata} from '../utils/api_client';


export async function checkPlagiarism(data={}){
  try {
    
    // const response = await sys_post_formdata({body:data});
    // return response.callback;
    return dummies_checker;
  } catch (error) {
    console.log(error.message)
  }
}

  