import { AuthorizationRequestHandler, StringMap } from '@openid/appauth';
import { IAuthAction } from './auth-action';
import { UserInfoHandler } from './user-info-request-handler';
import { EndSessionHandler } from './end-session-request-handler';
import { IAuthConfig } from './auth-configuration';
import { Browser } from "./auth-browser";
import { StorageBackend, Requestor, AuthorizationServiceConfiguration, TokenResponse, AuthorizationRequest, AuthorizationResponse, AuthorizationError, TokenRequestHandler } from '@openid/appauth';
import { BaseAuthObserver, AuthObserver } from './auth-observer';
export interface IAuthService {
    signIn(authExtras?: StringMap): void;
    signOut(): void;
    refreshToken(): void;
    loadUserInfo(): void;
    authorizationCallback(callbackUrl: string): void;
    endSessionCallback(): void;
    loadTokenFromStorage(): void;
    getValidToken(buffer?: number): Promise<TokenResponse>;
    addActionObserver(observer: BaseAuthObserver): void;
    addActionListener(func: (action: IAuthAction) => void): AuthObserver;
    removeActionObserver(observer: BaseAuthObserver): void;
}
export declare class AuthService implements IAuthService {
    protected browser: Browser;
    protected storage: StorageBackend;
    protected requestor: Requestor;
    private _configuration?;
    private _authConfig?;
    private _authSubject;
    private _actionHistory;
    private _session;
    protected tokenHandler: TokenRequestHandler;
    protected userInfoHandler: UserInfoHandler;
    protected requestHandler: AuthorizationRequestHandler;
    protected endSessionHandler: EndSessionHandler;
    constructor(browser?: Browser, storage?: StorageBackend, requestor?: Requestor);
    get authConfig(): IAuthConfig;
    set authConfig(value: IAuthConfig);
    get configuration(): Promise<AuthorizationServiceConfiguration>;
    get history(): IAuthAction[];
    get session(): import("./auth-session").IAuthSession;
    protected notifyActionListers(action: IAuthAction): void;
    protected setupAuthorizationNotifier(): void;
    protected onAuthorizationNotification(request: AuthorizationRequest, response: AuthorizationResponse | null, error: AuthorizationError | null): void;
    protected internalAuthorizationCallback(url: string): Promise<void>;
    protected internalEndSessionCallback(): Promise<void>;
    protected performEndSessionRequest(state?: string): Promise<void>;
    protected performAuthorizationRequest(authExtras?: StringMap, state?: string): Promise<void>;
    protected requestAccessToken(code: string, codeVerifier?: string): Promise<void>;
    protected requestTokenRefresh(): Promise<void>;
    protected internalLoadTokenFromStorage(): Promise<void>;
    protected internalRequestUserInfo(): Promise<void>;
    loadTokenFromStorage(): Promise<void>;
    signIn(authExtras?: StringMap, state?: string): Promise<void>;
    signOut(state?: string): Promise<void>;
    refreshToken(): Promise<void>;
    loadUserInfo(): Promise<void>;
    authorizationCallback(callbackUrl: string): void;
    endSessionCallback(): void;
    getValidToken(buffer?: number): Promise<TokenResponse>;
    addActionListener(func: (action: IAuthAction) => void): AuthObserver;
    addActionObserver(observer: BaseAuthObserver): void;
    removeActionObserver(observer: BaseAuthObserver): void;
}
