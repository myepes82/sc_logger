const LOGGING_LEVEL_COLORS: Readonly<Record<string, string>> = {
	WARN: '\u001B[33m',
	ERROR: '\u001B[31m',
	DEBUG: '\u001B[32m',
	INFO: '\u001B[90m',
};

function getCurrentFormattedDate(): string {
	const options = {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		timeZone: 'UTC',
	} satisfies Intl.DateTimeFormatOptions;
	return new Date().toLocaleString('en-US', options);
}

function underLineText(text: string): string {
	return `\u001b[4m${text}\u001b[0m`;
}

function replaceStrings(messageString: string, args: any[]): string {
	const splittedMessage = messageString.trim().split('{}');
	return splittedMessage.map((m: string) => {
		if (args.length > 0) {
			return `${m}${args.shift()}`;
		}

		return m;
	}).join('');
}

function messageParser(loggingLevel: string, message: string, args: any[]): string {
	const loggingColor: string = LOGGING_LEVEL_COLORS[loggingLevel];
	const formattedDate = `(${underLineText(getCurrentFormattedDate())})`;
	const parsedMessage = replaceStrings(message, args);
	return `${loggingColor}[${loggingLevel}]\x1b[0m: ${formattedDate} ${loggingColor}=>\x1b[0m ${parsedMessage}`;
}

export function logWarn(message: string, ...args: any[]): void {
	console.warn(messageParser('WARN', message, args));
}

export function logError(message: string, ...args: any[]): void {
	console.error(messageParser('ERROR', message, args));
}

export function logDebug(message: string, ...args: any[]): void {
	console.log(messageParser('DEBUG', message, args));
}

export function logInfo(message: string, ...args: any[]): void {
	console.info(messageParser('INFO', message, args));
}
