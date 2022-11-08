const {MongoClient} = require("mongodb")

async function main(){
    const url = "mongodb+srv://MugemaneBertin2001:12345@cluster0.oqjbtbf.mongodb.net/test";
    const client = new MongoClient(url)
    try{
        await client.connect();
        await listDatabases(client);
        } catch(e){
            console.error(e)
        } finally{
            await client.close();
        }
    
}
main().catch(console.error)
//
async function listDatabases(client)
{
    const databaseslist = await client.db().admin().listDatabases()
    console.log("database : ");

    databaseslist.databases.forEach((db) => {
        console.log(db.name)
        
    });
}