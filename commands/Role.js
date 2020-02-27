const { Command } = require('discord-akairo');
// Role command that serves as back up to the react role command. 
class Role extends Command {
    constructor() {
        super('role', {
            args: [
                    {
                     id: 'role',
                     //Roles list
                     type: ['MonsterHunter', 'LOL','Division2','Satisfactory','Minecraft','CallOfDuty','SoloGames','Terraria','Apex','PUBG','WoW','WoWClassic','Civ6','Destiny 2'],
                     //Probably poor error handling
                     default: 'Error'
                
                    }

                 ],
            aliases: ['role']
        });
    }
    //TODO add json file to for scalability
    async exec(message, args){

        switch(args.role){
            //Switch case for each role
            case 'MonsterHunter':
                message.member.addRole('669963991434526745')
                .then(console.log('Added MonsterHunter role'))
                .then(message.delete(1000))
                .then(message.channel.send('Role Added').then(message.delete(1000)))
                .catch(console.error);
        
                break;
            case 'LOL':
                message.member.addRole('681725389835337845')
                .then(console.log('Added LOL role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
            
                break;       
            case 'PUBG':
                message.member.addRole('681725702281625610')
                .then(console.log('Added PUBG role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
                
            break;
            case 'Division2':
                message.member.addRole('681725469200220214')
                .then(console.log('Added Division2 role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
        
                break;
            case 'Satisfactory':
                message.member.addRole('681725525781250118')
                .then(console.log('Added Satisfactory role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
            
                break;
            case 'Minecraft':
                message.member.addRole('681725569322450946')
                .then(console.log('Added Minecraft role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
            
                break;
            case 'CallOfDuty':
                message.member.addRole('681725596002549800')
                .then(console.log('Added CallOfDuty role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
            
                break;
            case 'SoloGames':
                message.member.addRole('681725634887548957')
                .then(console.log('Added SoloGames role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
            
                break;
            case 'Terraria':
                message.member.addRole('681725681444716567')
                .then(console.log('Added Terraria role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
            
                break;
            case 'Apex':
                message.member.addRole('681725504092372992')
                .then(console.log('Added Terraria role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
            
                break;
            case 'WoW':
                message.member.addRole('682466541916520460')
                .then(console.log('Added MonsterHunter role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
        
                break;
            case 'WoWClassic':
                message.member.addRole('682466564192469022')
                .then(console.log('Added MonsterHunter role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
        
                break;
            case 'Destiny2':
                message.member.addRole('682466583875944448')
                .then(console.log('Added MonsterHunter role'))
                .then(message.reply('Role Added'))
                .catch(console.error);
        
                break;
            case 'Civ6':
                message.member.addRole('682466519195844638')
                .then(console.log('Added MonsterHunter role'))
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

module.exports = Role;