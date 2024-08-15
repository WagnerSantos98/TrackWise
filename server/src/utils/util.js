const moment = require('moment');

module.exports = {
    // Horário de funcionamento
    isOpened: (horarios) => {
        const espacos = horarios.filter((h) => h.dias.includes(moment().day()));
        if(espacos.length > 0){
            for(let h of espacos){
                const inicio = moment(moment(h.inicio).format('HH:mm'), 'HH:mm:ss');
                const fim = moment(moment(h.fim).format('HH:mm'), 'HH:mm:ss');
                if(moment().isBetween(inicio, fim)){
                    return true;
                }
            }
            return false;
        }
        return false;
    }
}
