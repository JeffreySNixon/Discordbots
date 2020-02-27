const { Command } = require('discord-akairo');
// Role command that serves as back up to the react role command. 
class RoleR extends Command {
    constructor() {
        super('roleR', {
            args: [
                    {
                     id: 'roleR',
                     //Roles list
                     type: ['MonsterHunter', 'LOL','Division2','Satisfactory','Minecraft','CallOfDuty','SoloGames','Terraria','Apex','PUBG','WoW','WoWClassic','Civ6','Destiny 2'],
                     //Probably poor error handling
                     default: 'Error'
                
                    }

                 ],
            aliases: ['roleR']
        });
    }
    //TODO romove json file to for scalability
    async exec(message, args){

        switch(args.roleR){
            //Switch case for each role
            case 'MonsterHunter':
                message.member.removeRole('669963991434526745')
                .then(console.log('Removed MonsterHunter role'))
                .then(message.reply('Role Removed'))
                .catch(console.error);
        
                break;
            case 'LOL':
                message.member.removeRole('681725389835337845')
                .then(console.log('Removed LOL role'))
                .then(message.reply('Role Removed'))
                .catch(console.error);
            
                break;       
            case 'PUBG':
                message.member.removeRole('681725702281625610')
                .then(console.log('Removed PUBG role'))
                .then(message.reply('Role Removed'))
                .catch(console.error);
                
            break;
            case 'Division2':
                message.member.removeRole('681725469200220214')
                .then(console.log('Removed Division2 role'))
                .then(message.reply('Role Removed'))
                .catch(console.error);
        
                break;
            case 'Satisfactory':
                message.member.removeRole('681725525781250118')
                .then(console.log('Removed Satisfactory role'))
                .then(message.reply('Role Removed'))
                .catch(console.error);
            
                break;
            case 'Minecraft':
                message.member.removeRole('681725569322450946')
                .then(console.log('Removed Minecraft role'))
                .then(message.reply('Role Removed'))
                .catch(console.error);
            
                break;
            case 'CallOfDuty':
                message.member.removeRole('681725596002549800')
                .then(console.log('Removed CallOfDuty role'))
                .then(message.reply('Role Removed'))
                .catch(console.error);
            
                break;
            case 'SoloGames':
                message.member.removeRole('681725634887548957')
                .then(console.log('Removed SoloGames role'))
                .then(message.reply('Role Removed'))
                .catch(console.error);
            
                break;
            case 'Terraria':
                message.member.removeRole('681725681444716567')
                .then(console.log('Removed Terraria role'))
                .then(message.reply('Role Removed'))
                .catch(console.error);
            
                break;
            case 'Apex':
                message.member.removeRole('681725504092372992')
                .then(console.log('Removed Terraria role'))
                .then(message.reply('Role Removed'))
                .catch(console.error);
            
                break;
            case 'WoW':
                message.member.removeRole('682466541916520460')
                .then(console.log('Removed MonsterHunter role'))
                .then(message.reply('Role Removed'))
                .catch(console.error);
        
                break;
            case 'WoWClassic':
                message.member.removeRole('682466564192469022')
                .then(console.log('Removed MonsterHunter role'))
                .then(message.reply('Role Removed'))
                .catch(console.error);
        
                break;
            case 'Destiny2':
                message.member.removeRole('682466583875944448')
                .then(console.log('Removed MonsterHunter role'))
                .then(message.reply('Role Removed'))
                .catch(console.error);
        
                break;
            case 'Civ6':
                message.member.removeRole('682466519195844638')
                .then(console.log('Removed MonsterHunter role'))
                .then(message.reply('Role Removed'))
                .catch(console.error);
            
            case 'Error':
                message.reply('Error has occured')
                .catch(console.error);
                break;
        }
    
    }

}

module.exports = RoleR;