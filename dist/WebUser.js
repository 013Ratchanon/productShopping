"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserState = exports.WebUser = void 0;
class WebUser {
    constructor(login_id, password) {
        this.login_id = login_id;
        this.password = password;
        this.state = UserState.NEW;
    }
    getlogin_id() {
        return this.login_id;
    }
    setpassword(password) {
        this.password = password;
    }
    getstate() {
        return this.state;
    }
    setstate(state) {
        this.state;
    }
    toString() {
        return `WebUser: ID = $[this.login_id], state= ${this.state}`;
    }
}
exports.WebUser = WebUser;
class UserState {
}
exports.UserState = UserState;
UserState.NEW = "New";
UserState.Active = "Active";
UserState.Blocked = "Blocked";
UserState.Banned = "Banned";
