const { Command } = require('discord-akairo');
let choi;
let ran;
class rps extends Command {
    constructor() {
        super('rps', {
            args: [
                    {
                     id: 'rps',
                     //Roles list
                     type: ['rock','paper','scissor'],
                     //Probably poor error handling
                     default: 'Error'
                
                    }

                 ],
            aliases: ['rps']
        });
    }
    async exec(message, args){
        console.log('rps')
        ran = Math.floor(Math.random()*3)
        console.log('Number was ' + ran)
        
        switch(ran){
            case 0:
            choi = 'rock';
            break;
            case 1:
            choi = 'paper';
            break;
            case 2:
            choi = 'scissor';
            break;
        }
        
        if(choi === args.rps){
            message.reply('We tied! I chose '+choi)
        }
        else if(choi === 'rock' && args.rps == 'scissor' || choi === 'scissor' && args.rps == 'paper' || choi === 'paper' && args.rps == 'rock'){
            message.reply('You lost! I chose '+choi)
        }
        else if(args.rps === 'Error'){
            message.reply('Try again! Errored!')
            return;
        } 
        else{
            message.reply('You won! I chose '+choi)
        }
        
    }
}
module.exports = rps;