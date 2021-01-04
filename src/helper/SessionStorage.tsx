import Hook from "./Hook";


export default {
    get: (name: string) => {
        try{
            let data = JSON.parse(sessionStorage.getItem(name) || '{}');

            Hook.doAction('getSessionStorage_' + name, data);
            return data
        }catch(err){
            console.log(err)
            return null;
        }
    },
    set: (name : string , value : string) =>{
        if(typeof value !== undefined){
            sessionStorage.setItem(name, JSON.stringify(value))
            Hook.doAction('setSessionStorage_' + name, value);
            return true;
        }
        return false;
    }
}