module.exports = {
    capitalizeFirstLetter: function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },

    formaBytes: function(a, b) {
        if (a == 0) return '0 bytes';
        const c = 1024,
            d = b || 2,
            e = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            f = Math.floor(Math.log(a) / Math.log(c))
        return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f];
    },

    clean: function(string) {
        if (typeof text === 'string') {
            return string.replace(/`/g, '`' + String.fromCharCode(8203))
                .replace(/@/g, '@' + String.fromCharCode(8203));

        } else {
            return string;
        }
    },

    parseDur: function(ms) {
        let seconds = ms / 1000;

        const days = parseInt(seconds / 3600)
        seconds = seconds % 86400;

        const hours = parseInt(seconds / 60)
        seconds = seconds % 3600

        const minutes = parseInt(seconds / 60)
        seconds = parseInt(seconds % 60)

        if (days) {
            return `\`${days}\` day, \`${hours}\` hours, \`${minutes}\` minutes`;
        } else if (hours) {
            return `\`${hours}\` hours, \`${minutes}\` minutes, \`${seconds}\` seconds`;
        } else if (minutes) {
            return `\`${minutes}\` minutes, \`${seconds}\` seconds`;
        }
        return `\`${seconds}\` second(s)`;
    },
    validatePermisions: function(permisions) {
        const validPermisions = [
            'CREATE_INSTANT_INVITE',
            'KICK_MEMBERS',
            'BAN_MEMBERS',
            'ADMINISTRATOR',
            'MANAGE_GUILD',
            'ADD_REACTIONS',
            'VIEW_AUDIT_LOG',
            'PRIORITY_SPEAKER',
            'STREAM',
            'VIEW_CHANNEL',
            'SEND_MESSAGES',
            'SEND_TTS_MESSAGES',
            'MANAGE_MESSAGES',
            'EMBED_LINKS',
            'ATTACH_FILES',
            'READ_MESSAGE_HISTORY',
            'MENTION_EVERYONE',
            'USE_EXTERNAL_EMOJIS',
            'VIEW_GUILD_INSIGHTS',
            'CONNECT',
            'SPEAK',
            'MUTE_MEMBERS',
            'DEAFEN_MEMBERS',
            'MOVE_MEMBERS',
            'USE_VAD',
            'CHANGE_NICKNAME',
            'MANAGE_NICKNAMES',
            'MANAGE_EMOJIS',
            'BOT_OWNER',
        ];

        for (const permission of permissions) {
            if (!validPermisions.includes(permisions)) {
                throw new Error(`Unknown permission "${permision}"`)
            }
        }
    },
};