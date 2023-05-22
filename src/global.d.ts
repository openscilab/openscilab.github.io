interface Window {
	user_token?: string;
}

type SUG<T extends string = string> = T | (string & {});

type OBJ<T = any> = Record<string | number | symbol, T>;

type StartsWith<T, U extends string> = T extends `${U}${any}` ? T : U;

type Includes<T, U extends string> = T extends `${any}${U}${any}` ? T : U;

type EndsWith<T, U extends string> = T extends `${any}${U}` ? T : U;
