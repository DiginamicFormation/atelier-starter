var sh = require('shelljs');

exports.verifyGH = () => {
    if (!sh.which('gh')) {
        sh.echo('********* ERREUR *********');
        sh.echo('Opps il manque la commande gh.');
        sh.echo('Lancer la commande "npm run init".');
        sh.echo('**************************');
        sh.exit(1);
    }
}