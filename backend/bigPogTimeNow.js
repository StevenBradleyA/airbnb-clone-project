const BigPogTimeNow = () => {
    const pogo = {
        topBar: '\u001b[1;42m\n\
🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢\u001b[0m\n',
        bottomBar:
            '\u001b[1;41m\n\
🥵🔞🥵🔞🥵🔞🥵🔞🥵🔞🥵🔞🥵🔞🥵🔞🥵🔞🥵🔞🥵🔞🥵🔞🥵🔞🥵🔞🥵🔞🥵🔞🥵🔞🥵🔞🥵🔞🥵🔞\u001b[0m',
        pogDaddy:
            '\
\u001b[1;31m     _____     ___    _____)    ______    _____    ______    ______   __     __) \n \
\u001b[1;32m   (, /   ) /(,  ) /          (, /    ) (, /  |  (, /    ) (, /    )(, )   /    \n \
\u001b[1;33m    _/__ / /    / /   ___       /    /    /---|    /    /    /    /   /   /     \n \
\u001b[1;34m    /     /    / /     / )     /    /  ) /    |   /    /    /    /   (___/_     \n \
\u001b[1;35m ) /     (___ / (____ /     (_/___ /  (_/      (_/___ /  (_/___ /   )   /       \n \
\u001b[1;36m(_/                                                                (__ /\u001b[0m',
    };
    console.pogo = pogo;

    console.pog = (str) => {
        console.log(pogo.topBar);
        console.log(pogo.pogDaddy);
        console.log(pogo.topBar);
        console.log(str);
        console.log(pogo.bottomBar);
    };
};

module.exports = BigPogTimeNow;
