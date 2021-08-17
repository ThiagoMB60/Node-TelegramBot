//library import
const TelegramBot = require('node-telegram-bot-api');

//telegram bot token
const token = '1932974241:AAFFZ7sr90bacF6FwUuYbZXx-Y4jmSpFv8s';

//instance of a bot
const bot = new TelegramBot(token, {polling: true});