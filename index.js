const LOGGING_LEVEL_COLORS = {
	WARN: "\u001B[33m",
	ERROR: "\u001B[31m",
	DEBUG: "\u001B[32m",
	INFO: "\u001B[90m",
}

function getCurrentFormattedDate() {
	const options = {
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		timeZone: "UTC",
	}
	return new Date().toLocaleString("en-US", options)
}

function underLineText(text) {
	return `\u001b[4m${text}\u001b[0m`
}

function messageParser(loggingLevel, message, ...args) {
	const loggingColor = LOGGING_LEVEL_COLORS[loggingLevel]
	const formattedDate = `(${underLineText(getCurrentFormattedDate())})`
	let parsedMessage = message
	if (args.length > 0) {
		parsedMessage = args.reduce((acc, arg) => acc.replace("{}", arg), message)
	}
	return `${loggingColor}[${loggingLevel}]\x1b[0m: ${formattedDate} ${loggingColor}=>\x1b[0m ${parsedMessage}`
}

export function logWarn(message, ...args) {
	console.warn(messageParser("WARN", message, args))
}

export function logError(message, ...args) {
	console.error(messageParser("ERROR", message, args))
}

export function logDebug(message, ...args) {
	console.log(messageParser("DEBUG", message, args))
}

export function logInfo(message, ...args) {
	console.info(messageParser("INFO", message, args))
}
