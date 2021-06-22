/*
    assignment 4 
    #task 2
    SIRSS1259 
    kuldeep rajpurohit
*/

function isConvertible()
{
   var str1 = document.getElementById("initial").value;
   var str2 = document.getElementById("desired").value;
   var k = document.getElementById("operations").value;
    
    if ((str1.length + str2.length) < k)
        return true;
 
    
    var commonLength = 0;
    for (var i = 0; i < Math.min(str1.length,str2.length); i++) 
    {
        if (str1[i] == str2[i])
            commonLength++;
        else
            break;
    }
 
    
    if ((k - str1.length - str2.length + 2 * commonLength) % 2 == 0)
        alert("Yes");
 
    
    else
    alert("No");

}