
export class WebUser {
    private login_id: string;
    private password: string;
    private state: string;

    constructor(login_id: string,password: string){
        this.login_id = login_id;
        this.password = password;
        this.state =UserState.NEW
    }
    public getlogin_id():string{
        return this.login_id
    }
    public setpassword(password: string):void{
         this.password = password
    }
    public getstate():UserState{
        return this.state
    }
    public setstate(state:UserState):void{
        this.state 
    }

public toString(): string{
    return `WebUser: ID = $[this.login_id], state= ${this.state}`
}
}



export class UserState{
    public static NEW = "New"
    public static Active = "Active"
    public static Blocked = "Blocked"
    public static Banned = "Banned"
}