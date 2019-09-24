var numUniqueEmails = function(emails) {
    
    let result = new Set();
    
    for(let email of emails){
        var mail = [];
        var posAt = 0;
        var atPos = -1;

        var plusFound = false;
        for(let c of email){
            if(c === '@')
               {
                   atPos = posAt;
                   break;
               } 
            else if(c === '.')
           {  posAt++;    
                continue; }
            else if(c === '+'){
                 posAt++;    
                plusFound = true;
                continue;
            }
            else 
                {
                    if(!plusFound)
                         mail.push(c); 
                    posAt++;        
                }
            
        }
        
        var domain = email.slice(atPos);
        result.add(mail.join('') + domain);
    }
    console.log(result)
    return result.size;
    
};

numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])
