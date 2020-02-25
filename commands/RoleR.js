const { Command } = require('discord-akairo');
// Role command that serves as back up to the react role command. 
class RoleR extends Command {
    constructor() {
        super('roleR', {
            args: [
                    {
                     id: 'roleR',
                     //Roles list
                     type: ['MonsterHunter', 'LOL','Division2','Satisfactory','Minecraft','CallOfDuty','SoloGames','Terraria','Apex','PUBG'],
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
                .then(console.log('Added MonsterHunter role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
        
                break;
            case 'LOL':
                message.member.removeRole('681725389835337845')
                .then(console.log('Added LOL role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
            
                break;       
            case 'PUBG':
                message.member.removeRole('681725702281625610')
                .then(console.log('Added PUBG role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
                
            break;
            case 'Division2':
                message.member.removeRole('681725469200220214')
                .then(console.log('Added Division2 role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
        
                break;
            case 'Satisfactory':
                message.member.removeRole('681725525781250118')
                .then(console.log('Added Satisfactory role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
            
                break;
            case 'Minecraft':
                message.member.removeRole('681725569322450946')
                .then(console.log('Added Minecraft role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
            
                break;
            case 'CallOfDuty':
                message.member.removeRole('681725596002549800')
                .then(console.log('Added CallOfDuty role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
            
                break;
            case 'SoloGames':
                message.member.removeRole('681725634887548957')
                .then(console.log('Added SoloGames role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
            
                break;
            case 'Terraria':
                message.member.removeRole('681725681444716567')
                .then(console.log('Added Terraria role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
            
                break;
            case 'Apex':
                message.member.removeRole('681725504092372992')
                .then(console.log('Added Terraria role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
            
                break;    
            case 'Error':
                message.reply('Error has occured')
                .catch(console.error);
                break;
        }
    
    }

}

module.exports = RoleR;