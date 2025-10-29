export function generateNameBuyer(){
    const name = Date.now() + Math.floor(Math.random() * 1000);
    return `UserBuyer_${name}`;
}

export function generateEmailBuyer(){
    const name = Date.now() + Math.floor(Math.random() * 1000);
    return `UserBuyer_${name}@email.com`; 
}