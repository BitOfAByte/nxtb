const Event = require('../../structures/Event');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	async run(interaction) {
        console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction`.blue);
		if (!interaction.isCommand()) return;

		const command = client.commands.get(interaction.commandName);
		if (!command) return;

		try {
			await command.execute(interaction, interaction.client);
		} catch (error) {
			console.log(`${error}`);
			await interaction.reply(
				{
					content: 'There was an error executing this command.',
					ephmeral: true
				}
			);
		}
    }
};