import openai from "./config/openai.js";

import readlineSync from "readline-sync";
import colors from "colors";
async function main() {
    //so that the chatbot greets the user upon start
   console.log(colors.bold.bgGreen('Welcome to Sunils Chatbot'));
   console.log(colors.bold.bgGreen("How may I assist you?"));

//to store chat history
   const chatHistory = []; 


   while (true) {
    const userInput = readlineSync.question(colors.yellow('You :'))
 
    try {
        //making message by iterating over history
        const messages = chatHistory.map(([role, content]) => ({role, content}))
       
        // add latest user input 
         messages.push({role: 'user', content: userInput });
        
        
         //calling api and inputting user input
        const completion = await openai.chat.completions.create({
        model:"gpt-3.5-turbo",
        //the content the api recieves will be the user input
        messages: messages,
    });

    //getting the content
    const completionContent = completion.choices[0].message.content;
    //the chatbot responding

    //exit if user types "exit"
    console.log(colors.green("Bot : ") + completionContent);
    if (userInput.toLowerCase() == 'exit') {
        console.log(colors.bold.bgGreen(" Chat Ended "));
       
        return;
    }

   //updating history 
   chatHistory.push(['user', userInput]);
   chatHistory.push(['assistant', completionContent]);
  } catch (error) {
    console.error(colors.bgRed(Error));
  }

};
};

main();