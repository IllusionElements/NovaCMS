import { Discord } from '../../../../modules/server/discord.js'
import { ReactiveDict } from 'meteor/reactive-dict'
import { check, Match } from 'meteor/check'
import { Meteor } from 'meteor/meteor'
import { HTTP } from 'meteor/http'

const { discord } = Meteor.settings.private;

Meteor.methods({
    logs(param) {

        let type = typeof param === 'object'
        if (type) return console.dir(param)

    },
    modifyHook({ name, avatar }) {
        let payload;
        if (avatar) {
            payload = { name, avatar };

        }
        else {
            payload = { name };
        }
        return Discord.webhooks('modify', {
            webhook_id: discord.webhook.auth._id,
            webhook_token: discord.webhook.auth._token,
            payload

        });

    },
    logAction({ payload, wait }) {
        /*check(payload.content, 'string');
        check(payload, 'object');
        check(wait, 'boolean');*/
        return Discord.webhooks('execute', {
            webhook_id: discord.webhook.auth._id,
            webhook_token: discord.webhook.auth._token,
            qs: wait,
            payload: payload.content
        });

    },
    getWebhook(content) {
        const url = `https://discordapp.com/api/webhooks/404763593666723840/tft5MQe63eOSuQpeZCSVdQHlpaG9nG9OLKvRCi5oe5wZrOs_EMrzxJBYEpBc9RpbM9aS`
        const args = { data: { content }, query: `wait=true` }
        return HTTP.call('POST', url, { data: args.data, query: args.query }, (err, response) => {
            if (err) {
                console.log(err)
                return err;
            }
            console.log(response)
            return response;
        });
    }
})
