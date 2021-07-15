import { TokenResponse } from '@openid/appauth';
export declare enum AuthActions {
    Default = "Default",
    SignInSuccess = "Sign In Success",
    SignInFailed = "Sign In Failed",
    SignOutSuccess = "Sign Out Success",
    SignOutFailed = "Sign Out Failed",
    RefreshSuccess = "Refresh Success",
    RefreshFailed = "Refresh Failed",
    LoadTokenFromStorageSuccess = "Get Token From Storage Success",
    LoadTokenFromStorageFailed = "Get Token From Storage Failed",
    LoadUserInfoSuccess = "Load User Info Success",
    LoadUserInfoFailed = "Load User Info Failed"
}
export interface IAuthAction {
    action: string;
    tokenResponse?: TokenResponse;
    error?: string;
    user?: any;
}
export declare class AuthActionBuilder {
    static Default(): IAuthAction;
    static SignOutSuccess(): IAuthAction;
    static SignOutFailed(error: any): IAuthAction;
    static RefreshSuccess(tokenResponse: TokenResponse): IAuthAction;
    static RefreshFailed(error: any): IAuthAction;
    static SignInSuccess(tokenResponse: TokenResponse): IAuthAction;
    static SignInFailed(error: any): IAuthAction;
    static LoadTokenFromStorageSuccess(tokenResponse: TokenResponse): IAuthAction;
    static LoadTokenFromStorageFailed(error: any): IAuthAction;
    static LoadUserInfoSuccess(user: any): IAuthAction;
    static LoadUserInfoFailed(error: any): IAuthAction;
}
