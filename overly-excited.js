// Create an array that contains the words in the sentence
var sentence = ["hello", "how","are","you","today", "hello", "how","are","you","today"];

// The addExcitement function should accept the array as the sole argument
function addExcitement (sentence) 
{
	var builder = " ";
    for(var i=1; i<=sentence.length; i++)
    {
    	if(i%3 === 0)
    	{
    		builder += ` ${sentence[i-1]}`;
    		for(var j=0; j<i/3; j++)
    		{
    			builder += "!";
    		}
    	console.log(builder);
    	}
       	else
       	{
    	builder += ` ${sentence[i-1]}`;
    	console.log(builder);
        }
    }
}

// Invoke the function and pass in the array
addExcitement(sentence);