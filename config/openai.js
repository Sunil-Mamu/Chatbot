//import configuration class and OpenAIApi 
import OpenAI from 'openai';

//importing dotenv to get api key 
import dotenv from 'dotenv';
//have to call the config method to use the API
dotenv.config();

//Creating a configuration object and setting it to a new
//Configuration object and its gonna take in an object literal


//taking the configuration object and passing it to OpenAIApi
//then passing in the configuration object we just created
const openai = new OpenAI({ key: process.env.OPENAI_API_KEY });


export default openai;