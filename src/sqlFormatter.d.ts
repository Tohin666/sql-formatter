export interface FormatOptions {
  language?:
    | 'db2'
    | 'mariadb'
    | 'mysql'
    | 'n1ql'
    | 'plsql'
    | 'postgresql'
    | 'redshift'
    | 'spark'
    | 'sql'
    | 'tsql';
  params?: { [x: string]: string } | string[];
  indent?: string;
  uppercase?: boolean;
  linesBetweenQueries?: number;
  customConfig?: {
    reservedWords?: string[];
    reservedTopLevelWords?: string[];
    reservedNewlineWords?: string[];
    reservedTopLevelWordsNoIndent?: string[];
    stringTypes?: string[];
    openParens?: string[];
    closeParens?: string[];
    indexedPlaceholderTypes?: string[];
    namedPlaceholderTypes?: string[];
    lineCommentTypes?: string[];
    specialWordChars?: string[];
    operator?: string[];
  };
}

export function format(sql: string, options?: FormatOptions): string;
