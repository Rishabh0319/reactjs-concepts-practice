import {Client,Account,ID} from 'appwrite';
import config from '../config/config';

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.projectId)
        this.account = new Account(this.client);
    }

    async creatAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name)
            if(userAccount){
                // add some methodes
                return this.loginToAccount(email,password);
            }else{
               return userAccount;
            }
        } catch (error) {
            throw error
        }
    }

    async loginToAccount({email,password}){
        try{
           return await this.account.createEmailPasswordSession(email,password);
        }catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }

    async logoutFromAccount(){
        try {
            return this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;