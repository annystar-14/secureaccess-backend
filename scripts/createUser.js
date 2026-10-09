const argon2 = require("argon2");

async function generarHash() {
    const password = process.env.INITIAL_PASSWORD;

    if (!password || password.length < 12) 
    {
        throw new Error( "el PASSWORD debe tener al menos 12 caracteres" );
    }

    const hash = await argon2.hash(password, { type: argon2.argon2id});

    console.log("Hash Argon2id:");
    console.log(hash);
}

generarHash().catch(error => {
    console.error(error.message);
    process.exitCode = 1;
});