/*
    assignment 4 
    #task 1
    SIRSS1259 
    kuldeep rajpurohit
*/

function printMilitaryTime()
{
    var str = document.getElementById("time").value;

    var h1 = Number(str[1] - '0');
    var h2 = Number(str[0] - '0');
    var hh = (h2 * 10 + h1 % 10);
    var mt=" ";


    if (str[8] == 'A')
    {
        if (hh == 12)
        {
           mt= mt+"00";
            for (var i = 2; i <= 7; i++)
            {
               mt= mt+str[i];
            }
            alert("Military Time: "+mt);
        }
        else
        {
            for (var i = 0; i <= 7; i++)
            {
                 mt= mt+str[i];
            }
            alert("Military Time: "+mt);
        }
    }


    else
    {
        if (hh == 12)
        {
            mt=mt+"12";
            for (var i = 2; i <= 7; i++)
            {
               mt=mt+ str[i];
            }  
            alert("Military Time: "+mt);
        }
        else
        {
            hh = hh + 12;
            mt=mt+hh;
            for (var i = 2; i <= 7; i++)
               {
                 mt= mt+ str[i];
               }  
               alert("Military Time: "+mt);
        }
    }
}
